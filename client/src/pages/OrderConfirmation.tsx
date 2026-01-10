import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";

export default function OrderConfirmation() {
  const [, navigate] = useLocation();
  const { user } = useAuth();

  const ordersQuery = trpc.orders.list.useQuery(undefined, {
    enabled: !!user,
  });

  const latestOrder = ordersQuery.data?.[0];

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmation</h1>
          <p className="text-gray-600 mb-8">Please log in to view your order.</p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <div className="text-5xl mb-4">✓</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-8">Thank you for your purchase.</p>

          {latestOrder && (
            <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Details</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-semibold">#{latestOrder.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-semibold capitalize">{latestOrder.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total:</span>
                  <span className="font-semibold">${latestOrder.totalAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold">{latestOrder.email}</span>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-3">
            <p className="text-gray-600">
              A confirmation email has been sent to your email address.
            </p>
            <button
              onClick={() => navigate("/")}
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
