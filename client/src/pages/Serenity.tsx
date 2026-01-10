import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";

/**
 * 靜室 - 推廣內容輪播頁面
 * 意大利靜奢美學：自動慢速輪播、靜音、金色標題詩句
 */

const serenityContent = [
  {
    title: "晨光中的綠",
    description: "新的一天，新的開始。",
    color: "from-green-900 to-green-800",
  },
  {
    title: "切換的寧靜",
    description: "身體的智慧，自然激活。",
    color: "from-emerald-900 to-emerald-800",
  },
  {
    title: "一劑長伴",
    description: "每日儀式，每生從容。",
    color: "from-teal-900 to-teal-800",
  },
  {
    title: "靜美長存",
    description: "綠色本質，永恆陪伴。",
    color: "from-slate-900 to-slate-800",
  },
];

export default function Serenity() {
  const [, navigate] = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // 自動輪播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % serenityContent.length);
    }, 5000); // 每 5 秒切換一次
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % serenityContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + serenityContent.length) % serenityContent.length
    );
  };

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
                className="nav-link-active block text-left"
              >
                靜室
              </button>
              <button className="nav-link block text-left">證據</button>
            </div>
          </div>
        )}
      </nav>

      {/* ============================================
          頁面標題
          ============================================ */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 bg-background">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span style={{ color: '#C5A46C' }}>靜美長存</span>
          </h1>
          <p className="text-lg text-foreground/70">
            品牌故事與視覺詩篇
          </p>
        </div>
      </section>

      {/* ============================================
          輪播區塊 - 自動慢速切換
          ============================================ */}
      <section className="section-padding bg-foreground text-background">
        <div className="container max-w-5xl mx-auto px-4">
          {/* 輪播容器 */}
          <div className="relative h-96 md:h-screen max-h-96 md:max-h-screen rounded-lg overflow-hidden mb-8">
            {/* 幻燈片 */}
            {serenityContent.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* 背景漸層 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${slide.color}`} />

                {/* 內容 */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h2
                    className="text-4xl md:text-6xl font-bold mb-4"
                    style={{ color: '#C5A46C' }}
                  >
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-2xl text-background/80">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}

            {/* 導航按鈕 - 隱蔽 */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full hover:bg-background/20 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-background/60" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full hover:bg-background/20 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-background/60" />
            </button>
          </div>

          {/* 指示器 - 金色圓點 */}
          <div className="flex justify-center gap-3">
            {serenityContent.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8"
                    : "opacity-50 hover:opacity-75"
                }`}
                style={{
                  backgroundColor: index === currentSlide ? '#C5A46C' : '#C5A46C',
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
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
