const services = [
  {
    title: "窓・サッシ交換",
    desc: "古いサッシを最新の高断熱窓へ。結露・防音・防犯まで一度に解決。",
    tag: "LIXIL リプラス / サーモスX",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    title: "内窓・断熱リフォーム",
    desc: "今ある窓の内側にもう1枚。最短半日で断熱性能を大きく向上。",
    tag: "LIXIL インプラス",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <rect x="6" y="7" width="12" height="10" rx="0.5" />
        <path d="M12 7v10" />
      </svg>
    ),
  },
  {
    title: "玄関ドア交換",
    desc: "1日で生まれ変わるカバー工法。断熱・採光・スマートキー対応も。",
    tag: "LIXIL リシェント玄関ドア",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
        <path d="M4 21h16" />
        <circle cx="15" cy="13" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "カーポート・フェンス",
    desc: "強風・大雪に強い高耐久シリーズから、目隠しフェンスまで。",
    tag: "LIXIL カーポートSC ほか",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 9h18l-2 6H5z" />
        <path d="M5 15v5M19 15v5" />
        <circle cx="9" cy="18" r="1.2" />
        <circle cx="15" cy="18" r="1.2" />
      </svg>
    ),
  },
  {
    title: "水まわりリフォーム",
    desc: "キッチン・浴室・トイレ・洗面。毎日使う場所を、快適で安全に。",
    tag: "システムバス / システムキッチン",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 12h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
        <path d="M8 12V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2" />
        <path d="M16 8h3" />
      </svg>
    ),
  },
  {
    title: "工務店向け建材サポート",
    desc: "新築・改修現場への建材手配や、納まりのご相談まで。プロの現場を支えます。",
    tag: "建材卸・現場支援",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 7 12 3l9 4-9 4z" />
        <path d="M3 7v8l9 4 9-4V7" />
        <path d="M12 11v8" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream/60 py-20 sm:py-24">
      <div className="container-base">
        <div className="text-center">
          <span className="section-label justify-center">
            <span className="h-px w-6 bg-wood-500" />
            OUR SERVICES
          </span>
          <h2 className="section-title">サービス内容</h2>
          <p className="section-lead mx-auto">
            窓・玄関ドアの専門技術を軸に、外まわりから水まわりまで、住まいのことなら何でもご相談ください。
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-7 shadow-[0_2px_12px_rgba(15,44,68,0.06)] ring-1 ring-slate-100 transition-all hover:-translate-y-1 hover:shadow-card hover:ring-wood-400/40"
            >
              {/* 装飾コーナー */}
              <div className="absolute right-0 top-0 h-20 w-20 -translate-y-10 translate-x-10 rounded-full bg-wood-50 transition-transform group-hover:scale-110" />
              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <span className="block h-6 w-6">{s.icon}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-800">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">
                  {s.desc}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-navy-700/5 px-3 py-1 text-[11px] font-bold tracking-wide text-navy-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-wood-500" />
                  {s.tag}
                </div>
              </div>
              <div className="relative mt-6 flex items-center gap-1 text-xs font-bold text-navy-700 opacity-70 transition-opacity group-hover:opacity-100">
                詳細を相談する
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
