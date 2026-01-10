import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

/**
 * 長伴之聲 - 用戶評論頁面
 * 意大利靜奢美學：極簡呈現，大量留白
 * 姓名首字母 + 短句，無頭像、無星級、無過多條目
 */

const voices = [
  {
    initial: "L",
    name: "李女士",
    quote: "每日一劑，從容如初。",
  },
  {
    initial: "W",
    name: "王先生",
    quote: "綠色的力量，靜靜改變。",
  },
  {
    initial: "Z",
    name: "張女士",
    quote: "一年的等待，值得。",
  },
  {
    initial: "C",
    name: "陳先生",
    quote: "代謝平衡，生活從容。",
  },
];

export default function Voices() {
  const [, navigate] = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="w-full bg-background text-foreground">
      {/* ============================================
          頂部導航 - 隱藏式設計
          ============================================ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/20">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="text-2xl font-bold" style={{ color: '#C5A46C' }}>
              Essenza
            </div>
            <div className="text-2xl font-bold text-foreground">Verda</div>
          </button>

          {/* 右側 - 導航按鈕 */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="p-2 hover:bg-foreground/5 rounded transition-colors"
            aria-label="Toggle navigation"
          >
            {navOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* 隱藏式導航菜單 */}
        {navOpen && (
          <div className="border-t border-border/20 bg-background">
            <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 space-y-4">
              <button
                onClick={() => {
                  navigate("/");
                  setNavOpen(false);
                }}
                className="nav-link block text-left"
              >
                首頁
              </button>
              <button
                onClick={() => {
                  navigate("/products/metabolic-switch");
                  setNavOpen(false);
                }}
                className="nav-link block text-left"
              >
                Metabolic Switch
              </button>
              <button
                onClick={() => {
                  navigate("/voices");
                  setNavOpen(false);
                }}
                className="nav-link-active block text-left"
              >
                長伴之聲
              </button>
              <button className="nav-link block text-left">靜室</button>
              <button className="nav-link block text-left">證據</button>
            </div>
          </div>
        )}
      </nav>

      {/* ============================================
          頁面標題
          ============================================ */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-background">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            長伴之聲
          </h1>
          <p className="text-lg text-foreground/70">
            來自長伴者的真摯反饋
          </p>
        </div>
      </section>

      {/* ============================================
          評論區塊 - 極簡呈現
          ============================================ */}
      <section className="section-padding bg-background">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="space-y-24 md:space-y-32">
            {voices.map((voice, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* 評論卡片 */}
                <div className="border-l-2" style={{ borderColor: '#C5A46C' }}>
                  <div className="pl-8">
                    {/* 姓名首字母 + 冒號 + 短句 */}
                    <p className="text-lg md:text-xl text-foreground leading-relaxed">
                      <span style={{ color: '#C5A46C' }} className="font-bold">
                        {voice.initial}.
                      </span>
                      ：{voice.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 底部留白 + 邀請 */}
          <div className="mt-32 md:mt-48 text-center py-16">
            <p className="text-foreground/60 text-sm">
              您也可以成為長伴者。
              <br />
              分享您的故事。
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          頁腳
          ============================================ */}
      <footer className="bg-background border-t border-accent/10 py-12">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* 品牌 */}
            <div>
              <div className="flex items-center gap-2 mb-4 cursor-pointer hover:opacity-80 transition-opacity">
                <div className="text-xl font-bold" style={{ color: '#C5A46C' }}>
                  Essenza
                </div>
                <div className="text-xl font-bold text-foreground">Verda</div>
              </div>
              <p className="text-sm text-foreground/60 leading-relaxed">
                綠本質，靜切換。
                <br />
                Advanced GLP-1 Support Matrix
              </p>
            </div>

            {/* 產品 */}
            <div>
              <h4 className="font-bold mb-4">產品</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <button
                    onClick={() => navigate("/products/metabolic-switch")}
                    className="hover:text-accent transition-colors"
                  >
                    Metabolic Switch
                  </button>
                </li>
              </ul>
            </div>

            {/* 公司 */}
            <div>
              <h4 className="font-bold mb-4">公司</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <button
                    onClick={() => navigate("/voices")}
                    className="hover:text-accent transition-colors"
                  >
                    長伴之聲
                  </button>
                </li>
                <li>
                  <button className="hover:text-accent transition-colors">
                    靜室
                  </button>
                </li>
              </ul>
            </div>

            {/* 法律 */}
            <div>
              <h4 className="font-bold mb-4">法律</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>
                  <button className="hover:text-accent transition-colors">
                    隱私政策
                  </button>
                </li>
                <li>
                  <button className="hover:text-accent transition-colors">
                    服務條款
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-accent/10 pt-8 text-center text-sm text-foreground/50">
            <p>© 2026 Essenza Verda. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
