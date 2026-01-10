export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* 全屏英雄區 */}
      <section className="w-full h-screen flex flex-col items-center justify-center relative bg-white overflow-hidden">
        {/* 背景攝影 - 深綠包裝開盒仪式圖 */}
        <div className="absolute inset-0 w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
            <div className="text-center">
              {/* 模擬攝影背景 */}
              <div className="w-96 h-96 mx-auto bg-gradient-to-br from-green-900 to-green-800 rounded-lg opacity-10 blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* 內容層 */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
          {/* Logo */}
          <div className="mb-12 text-center">
            <p className="text-xs tracking-widest text-yellow-700 font-light">ESSENZA VERDA™</p>
          </div>

          {/* Slogan */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-6xl md:text-8xl font-light tracking-wide text-gray-900 mb-2">
              綠本質
            </h1>
            <h1 className="font-serif text-6xl md:text-8xl font-light tracking-wide text-yellow-700">
              靜切換
            </h1>
          </div>

          {/* 滾動提示 */}
          <div className="absolute bottom-12 text-center">
            <p className="text-xs tracking-widest text-gray-400 font-light animate-bounce">
              ↓ 向下滾動
            </p>
          </div>
        </div>
      </section>

      {/* 品牌宣言區 */}
      <section className="w-full min-h-screen flex items-center justify-center bg-white py-32 px-8">
        <div className="max-w-2xl text-center">
          <div className="space-y-12">
            <p className="font-serif text-lg md:text-2xl font-light tracking-wide text-yellow-700 leading-relaxed">
              植物矩陣
            </p>
            <p className="font-serif text-lg md:text-2xl font-light tracking-wide text-gray-900 leading-relaxed">
              溫柔喚醒
            </p>
            <p className="font-serif text-lg md:text-2xl font-light tracking-wide text-yellow-700 leading-relaxed">
              一劑長伴
            </p>
            <p className="font-serif text-lg md:text-2xl font-light tracking-wide text-gray-900 leading-relaxed">
              代謝從容
            </p>
            <p className="font-serif text-lg md:text-2xl font-light tracking-wide text-yellow-700 leading-relaxed">
              一生靜美
            </p>
          </div>
        </div>
      </section>

      {/* 分隔線 */}
      <div className="w-full h-px bg-gray-200"></div>

      {/* 導航提示 */}
      <section className="w-full py-20 bg-white text-center">
        <p className="text-xs tracking-widest text-gray-500 font-light">
          探索更多 ↓
        </p>
      </section>
    </div>
  );
}
