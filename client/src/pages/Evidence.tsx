import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

/**
 * 證據 - 臨床研究頁面
 * 意大利靜奢美學：突出 60% GLP-1 臨床數據、科學支持
 */

export default function Evidence() {
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
                className="nav-link block text-left"
              >
                長伴之聲
              </button>
              <button
                onClick={() => {
                  navigate("/serenity");
                  setNavOpen(false);
                }}
                className="nav-link block text-left"
              >
                靜室
              </button>
              <button
                onClick={() => {
                  navigate("/evidence");
                  setNavOpen(false);
                }}
                className="nav-link-active block text-left"
              >
                證據
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ============================================
          第一屏 - 臨床數據突出
          ============================================ */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 bg-background">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          {/* 標題 */}
          <h1 className="text-4xl md:text-5xl font-light mb-12 text-foreground/80">
            科學支持
          </h1>

          {/* 核心數據 - 金色大字 */}
          <div className="mb-16">
            <div
              className="text-7xl md:text-9xl font-bold mb-4"
              style={{ color: '#C5A46C' }}
            >
              60%+
            </div>
            <p className="text-2xl md:text-3xl font-light text-foreground mb-4">
              GLP-1 臨床提升
            </p>
            <p className="text-lg text-foreground/70">
              植物之力，科學佐證。
            </p>
          </div>

          {/* 副文案 */}
          <div className="max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              Essenza Verda™ Metabolic Switch 經過嚴格的臨床驗證，
              <br />
              全部成分來自可持續植物來源，
              <br />
              為您提供科學支持的代謝支持。
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          第二屏 - 研究詳情
          ============================================ */}
      <section className="section-padding bg-foreground text-background">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-accent">
            研究亮點
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 亮點 1 */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-3">臨床驗證</h3>
              <p className="text-background/80">
                經過獨立實驗室驗證，
                <br />
                60%+ GLP-1 Boost 的確切數據。
              </p>
            </div>

            {/* 亮點 2 */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-xl font-bold mb-3">植物來源</h3>
              <p className="text-background/80">
                100% 植物矩陣，
                <br />
                無合成成分，無依賴。
              </p>
            </div>

            {/* 亮點 3 */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">安全認證</h3>
              <p className="text-background/80">
                符合國際食品安全標準，
                <br />
                可持續來源認證。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          第三屏 - 成分科學
          ============================================ */}
      <section className="section-padding bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            成分科學
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 成分 1 */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#C5A46C' }}>
                深翠抹茶
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                富含兒茶素和 L-茶氨酸，支持代謝平衡和心理平靜。
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>✓ 天然抗氧化劑</li>
                <li>✓ 支持代謝活動</li>
                <li>✓ 促進心理清晰</li>
              </ul>
            </div>

            {/* 成分 2 */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#C5A46C' }}>
                柚子馬鞭草
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                珍稀植物精華，支持飽腹感和腸道健康。
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>✓ 支持飽腹感</li>
                <li>✓ 腸道友好</li>
                <li>✓ 天然清新香氣</li>
              </ul>
            </div>
          </div>

          {/* 底部說明 */}
          <div className="mt-16 pt-12 border-t border-accent/20 text-center">
            <p className="text-foreground/60">
              所有成分均來自可持續農業，無農藥殘留，無重金屬污染。
              <br />
              符合 ISO 22000 食品安全管理標準。
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
                  <button
                    onClick={() => navigate("/serenity")}
                    className="hover:text-accent transition-colors"
                  >
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
