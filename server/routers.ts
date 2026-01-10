import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { TRPCError } from "@trpc/server";

// Admin-only procedure
const adminProcedure = protectedProcedure.use(async ({ ctx, next }) => {
  if (ctx.user?.role !== "admin") {
    throw new TRPCError({ code: "FORBIDDEN", message: "Admin access required" });
  }
  return next({ ctx });
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  /**
   * Product routes
   */
  products: router({
    list: publicProcedure.query(async () => {
      return db.getAllProducts();
    }),

    get: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        const product = await db.getProductById(input.id);
        if (!product) {
          throw new TRPCError({ code: "NOT_FOUND", message: "Product not found" });
        }
        return product;
      }),

    create: adminProcedure
      .input(z.object({
        name: z.string().min(1),
        description: z.string().optional(),
        price: z.string(),
        image: z.string().optional(),
        video: z.string().optional(),
        category: z.string().optional(),
        stock: z.number().int().min(0),
      }))
      .mutation(async ({ input }) => {
        return db.createProduct(input);
      }),

    update: adminProcedure
      .input(z.object({
        id: z.number(),
        name: z.string().optional(),
        description: z.string().optional(),
        price: z.string().optional(),
        image: z.string().optional(),
        video: z.string().optional(),
        category: z.string().optional(),
        stock: z.number().int().optional(),
        isActive: z.boolean().optional(),
      }))
      .mutation(async ({ input }) => {
        const { id, ...data } = input;
        await db.updateProduct(id, data);
        return { success: true };
      }),

    delete: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await db.deleteProduct(input.id);
        return { success: true };
      }),
  }),

  /**
   * Cart routes
   */
  cart: router({
    getItems: protectedProcedure.query(async ({ ctx }) => {
      return db.getCartItems(ctx.user.id);
    }),

    add: protectedProcedure
      .input(z.object({
        productId: z.number(),
        quantity: z.number().int().min(1),
      }))
      .mutation(async ({ input, ctx }) => {
        await db.addToCart(ctx.user.id, input.productId, input.quantity);
        return { success: true };
      }),

    update: protectedProcedure
      .input(z.object({
        id: z.number(),
        quantity: z.number().int().min(0),
      }))
      .mutation(async ({ input }) => {
        await db.updateCartItem(input.id, input.quantity);
        return { success: true };
      }),

    remove: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await db.removeFromCart(input.id);
        return { success: true };
      }),

    clear: protectedProcedure.mutation(async ({ ctx }) => {
      await db.clearCart(ctx.user.id);
      return { success: true };
    }),
  }),

  /**
   * Order routes
   */
  orders: router({
    list: protectedProcedure.query(async ({ ctx }) => {
      return db.getUserOrders(ctx.user.id);
    }),

    get: protectedProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input, ctx }) => {
        const order = await db.getOrderById(input.id);
        if (!order) {
          throw new TRPCError({ code: "NOT_FOUND", message: "Order not found" });
        }
        // Verify user owns this order
        if (order.userId !== ctx.user.id && ctx.user.role !== "admin") {
          throw new TRPCError({ code: "FORBIDDEN", message: "Access denied" });
        }
        return order;
      }),

    create: protectedProcedure
      .input(z.object({
        totalAmount: z.string(),
        items: z.any().optional(),
        shippingAddress: z.string().optional(),
        email: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        return db.createOrder({
          userId: ctx.user.id,
          totalAmount: input.totalAmount,
          items: input.items,
          shippingAddress: input.shippingAddress,
          email: input.email,
        });
      }),

    updateStatus: adminProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["pending", "completed", "failed", "cancelled"]),
      }))
      .mutation(async ({ input }) => {
        await db.updateOrderStatus(input.id, input.status);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
