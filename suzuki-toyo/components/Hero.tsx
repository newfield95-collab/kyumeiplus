export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      {/* 背景の柔らかいグラデーション + ドット */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-navy-50" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(#0f2c44 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-wood-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-navy-100/70 blur-3xl" />
      </div>

      <div className="container-base grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
        <div className="lg:col-span-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/80 px-4 py-1.5 text-xs font-bold text-navy-700 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-wood-500" />
            創業50年・LIXIL正規取扱店・碧南市
          </div>

          <h1 className="font-serif text-3xl font-bold leading-[1.35] text-navy-800 sm:text-4xl md:text-5xl lg:text-[3.3rem] lg:leading-[1.3]">
            碧南・西三河の住まいに、
            <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="relative z-10">光と風と安心を。</span>
              <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-wood-100/80" />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-[1.95] text-slate-700 sm:text-base">
            窓・玄関ドア・エクステリア・リフォームまで。
            <br />
            地域に根ざして50年、住まいの困りごとを丁寧に解決します。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-700 px-7 py-4 text-base font-bold text-white shadow-card transition-all hover:bg-navy-800"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              無料相談する
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
            <a
              href="#cases"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy-700 bg-white px-7 py-4 text-base font-bold text-navy-700 transition-all hover:bg-navy-50"
            >
              施工事例を見る
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-3 border-t border-navy-100 pt-6">
            {[
              { k: "創業", v: "50年" },
              { k: "対応エリア", v: "西三河" },
              { k: "受付", v: "8:00〜17:30" },
            ].map((s) => (
              <div key={s.k} className="text-center sm:text-left">
                <dt className="text-[11px] font-medium tracking-wider text-slate-500">
                  {s.k}
                </dt>
                <dd className="mt-0.5 font-serif text-lg font-bold text-navy-800 sm:text-xl">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ヒーロービジュアル：CSSで作る窓と光 */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            {/* 額縁影 */}
            <div className="absolute -inset-3 rounded-[28px] bg-navy-800/5 blur-2xl" />
            {/* 窓本体 */}
            <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-gradient-to-b from-navy-700 to-navy-800 p-5 shadow-card ring-1 ring-navy-900/10">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-b from-sky-200 via-sky-100 to-wood-50">
                {/* 太陽光 */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-200/70 blur-2xl" />
                <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-white/70 blur-md" />
                {/* 風景：山 */}
                <svg
                  viewBox="0 0 200 280"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path d="M0 200 L40 150 L80 180 L120 130 L160 170 L200 140 L200 280 L0 280Z" fill="#1f527c" opacity="0.18" />
                  <path d="M0 220 L50 180 L100 210 L150 175 L200 205 L200 280 L0 280Z" fill="#1f527c" opacity="0.28" />
                  {/* 草原 */}
                  <rect x="0" y="240" width="200" height="40" fill="#946a2d" opacity="0.18" />
                </svg>
                {/* 窓枠（十字） */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-1/2 top-0 h-full w-[6px] -translate-x-1/2 bg-navy-700/95" />
                  <div className="absolute left-0 top-1/2 h-[6px] w-full -translate-y-1/2 bg-navy-700/95" />
                </div>
                {/* ハイライト */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-transparent" />
              </div>
              {/* 下のラベル */}
              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-xl bg-white/95 px-4 py-3 backdrop-blur">
                <div>
                  <div className="text-[10px] font-bold tracking-widest text-wood-500">
                    LIXIL PRODUCT
                  </div>
                  <div className="text-sm font-bold text-navy-800">
                    高断熱・高遮熱の窓へ
                  </div>
                </div>
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-navy-700" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </div>

            {/* フローティングバッジ */}
            <div className="absolute -left-4 top-10 hidden rotate-[-6deg] rounded-2xl bg-white px-4 py-3 shadow-card ring-1 ring-navy-100 sm:block">
              <div className="text-[10px] font-bold tracking-wider text-wood-500">SINCE 1975</div>
              <div className="text-sm font-bold text-navy-800">地域密着 50年</div>
            </div>
            <div className="absolute -right-3 bottom-16 hidden rotate-[5deg] rounded-2xl bg-navy-700 px-4 py-3 text-white shadow-card sm:block">
              <div className="text-[10px] font-bold tracking-wider text-wood-100">FREE</div>
              <div className="text-sm font-bold">現地調査・見積無料</div>
            </div>
          </div>
        </div>
      </div>

      {/* スクロールヒント */}
      <div className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 text-xs text-navy-700/60 lg:block">
        <span className="flex flex-col items-center gap-1">
          SCROLL
          <span className="block h-6 w-px animate-pulse bg-navy-700/40" />
        </span>
      </div>
    </section>
  );
}
