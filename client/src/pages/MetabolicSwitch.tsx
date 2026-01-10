export default function MetabolicSwitch() {
  return (
    <div className="w-full bg-white">
      {/* 全屏產品攝影區 */}
      <section className="w-full h-screen flex items-center justify-center relative bg-white overflow-hidden pt-20">
        <div className="absolute inset-0 w-full h-full">
          {/* 背景漸層 - 模擬攝影 */}
          <div className="w-full h-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 flex items-center justify-center">
            <div className="text-center">
              {/* 模擬安瓿陣列背景 */}
              <div className="w-80 h-96 mx-auto bg-gradient-to-b from-green-900 to-green-800 rounded-lg opacity-5 blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* 產品文案區 - 右側/下方 */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 max-w-3xl">
          <div className="space-y-16 text-center">
            {/* 第一句 */}
            <p className="font-serif text-xl md:text-2xl font-light tracking-wide text-yellow-700 leading-relaxed">
              植物矩陣，溫柔喚醒。
            </p>

            {/* 第二句 */}
            <p className="font-serif text-xl md:text-2xl font-light tracking-wide text-gray-900 leading-relaxed">
              一劑長伴，代謝從容。
            </p>

            {/* 第三句 */}
            <p className="font-serif text-xl md:text-2xl font-light tracking-wide text-yellow-700 leading-relaxed">
              綠本質，靜切換。
            </p>
          </div>

          {/* 隱蔽按鈕 - 頁面最底部 */}
          <div className="absolute bottom-12 opacity-20 hover:opacity-100 transition-opacity duration-300">
            <button className="px-6 py-3 border border-yellow-700 text-yellow-700 font-serif text-xs tracking-widest font-light hover:border-yellow-600 hover:text-yellow-600">
              加入長伴
            </button>
          </div>
        </div>
      </section>

      {/* 成分隱喻區 */}
      <section className="w-full min-h-screen flex items-center justify-center bg-white py-32 px-8">
        <div className="max-w-2xl text-center space-y-20">
          <div>
            <p className="font-serif text-sm tracking-widest text-gray-500 font-light mb-8">
              核心成分
            </p>
            <p className="font-serif text-lg md:text-xl font-light tracking-wide text-gray-900 leading-relaxed">
              深翠抹茶，喚醒晨光般的活力。
            </p>
          </div>

          <div className="h-px bg-gray-200"></div>

          <div>
            <p className="font-serif text-lg md:text-xl font-light tracking-wide text-yellow-700 leading-relaxed">
              柚子馬鞭草，靜謐的植物力量。
            </p>
          </div>

          <div className="h-px bg-gray-200"></div>

          <div>
            <p className="font-serif text-lg md:text-xl font-light tracking-wide text-gray-900 leading-relaxed">
              植物矩陣，60% GLP-1 臨床提升。
            </p>
          </div>
        </div>
      </section>

      {/* 臨床數據區 */}
      <section className="w-full min-h-screen flex items-center justify-center bg-white py-32 px-8">
        <div className="max-w-2xl text-center">
          <p className="font-serif text-4xl md:text-5xl font-light tracking-wide text-yellow-700 mb-12">
            60%
          </p>
          <p className="font-serif text-lg md:text-xl font-light tracking-wide text-gray-900 leading-relaxed mb-8">
            GLP-1 臨床提升
          </p>
          <p className="font-serif text-sm tracking-widest text-gray-500 font-light">
            植物之力，科學佐證
          </p>
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
