const problems = [
  {
    title: "窓の結露がひどい",
    desc: "朝になると窓がびっしょり。カビや木枠の傷みも気になる。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 12h18M12 3v18" />
        <circle cx="17.5" cy="17.5" r="0.8" fill="currentColor" />
        <circle cx="16" cy="19.5" r="0.6" fill="currentColor" />
        <circle cx="19" cy="19" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "夏は暑く、冬は寒い",
    desc: "光熱費が年々かさむ。断熱性能を上げて快適に過ごしたい。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </svg>
    ),
  },
  {
    title: "玄関ドアを新しくしたい",
    desc: "古くて重い玄関ドアを、断熱・防犯性能の高いものに替えたい。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
        <path d="M4 21h16" />
        <circle cx="15" cy="13" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "外構・カーポートを整えたい",
    desc: "雨や雪から車を守りたい。庭まわりもまとめてきれいにしたい。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M3 11h18M5 11V8a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v3" />
        <path d="M3 11v6M21 11v6" />
        <circle cx="7" cy="18" r="1.5" />
        <circle cx="17" cy="18" r="1.5" />
      </svg>
    ),
  },
  {
    title: "信頼できる地元業者に頼みたい",
    desc: "訪問営業や大手の電話勧誘ではなく、近所で長く商売している会社に。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function Problems() {
  return (
    <section id="problems" className="bg-white py-20 sm:py-24">
      <div className="container-base">
        <div className="text-center">
          <span className="section-label justify-center">
            <span className="h-px w-6 bg-wood-500" />
            YOUR PROBLEMS
          </span>
          <h2 className="section-title">こんなお悩み、ありませんか？</h2>
          <p className="section-lead mx-auto">
            住まいの「ちょっと困った」を、創業50年の経験で丁寧に解決します。
            <br className="hidden sm:block" />
            ひとつでも当てはまったら、まずはお気軽にご相談ください。
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <li
              key={p.title}
              className="group relative flex gap-4 rounded-2xl border border-slate-100 bg-cream/40 p-6 transition-all hover:-translate-y-1 hover:border-wood-400/40 hover:bg-white hover:shadow-card"
            >
              <span className="absolute -top-3 left-6 inline-flex h-6 items-center rounded-full bg-navy-700 px-3 text-[10px] font-bold tracking-widest text-white">
                CASE {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-white text-navy-700 shadow-sm ring-1 ring-navy-100">
                <span className="block h-6 w-6">{p.icon}</span>
              </div>
              <div className="min-w-0 pt-0.5">
                <h3 className="text-base font-bold text-navy-800">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-slate-600">
                  {p.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center">
          <div className="rounded-full bg-wood-50 px-5 py-2 text-sm font-bold text-wood-600">
            ↓ そのお悩み、鈴木トーヨー住器が解決します
          </div>
        </div>
      </div>
    </section>
  );
}
