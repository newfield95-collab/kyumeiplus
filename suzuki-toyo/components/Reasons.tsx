const reasons = [
  {
    no: "01",
    title: "地域密着 創業50年",
    desc: "碧南市で半世紀。西三河の気候・住宅事情を知り尽くした地元店だから、住まいに本当に合うご提案ができます。",
    points: ["碧南・西三河に長年密着", "近所のかかりつけ住器店", "工事後のフォローも迅速"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        <circle cx="12" cy="12" r="7" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    no: "02",
    title: "LIXIL製品に強い専門店",
    desc: "高性能窓・玄関ドア・エクステリアまで、LIXIL正規取扱店として豊富な商品知識でベストな組み合わせをご提案します。",
    points: ["最新の高断熱窓に精通", "補助金制度の活用も対応", "メーカー保証で安心"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
      </svg>
    ),
  },
  {
    no: "03",
    title: "相談から施工まで丁寧対応",
    desc: "現地調査・お見積りは無料。ヒアリングからアフターまで、職人が直接対応するので、伝言ミスや余計な中間マージンがありません。",
    points: ["現地調査・見積無料", "自社職人による施工", "アフター・小工事も気軽に"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 11V7a3 3 0 0 1 6 0v4" />
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M12 15v2" />
      </svg>
    ),
  },
];

export default function Reasons() {
  return (
    <section id="reasons" className="relative overflow-hidden bg-navy-800 py-20 text-white sm:py-24">
      {/* 模様 */}
      <div className="absolute inset-0 -z-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 48%, #fff 48%, #fff 52%, transparent 52%)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>
      <div className="container-base relative">
        <div className="text-center">
          <span className="section-label justify-center text-wood-400">
            <span className="h-px w-6 bg-wood-400" />
            WHY CHOOSE US
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
            鈴木トーヨー住器が選ばれる理由
          </h2>
          <p className="mt-4 text-sm text-navy-100/80 sm:text-base">
            「地元で長く商売をしているからこそ、できること」があります。
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {reasons.map((r) => (
            <li
              key={r.no}
              className="relative flex h-full flex-col rounded-2xl bg-white p-7 text-ink shadow-card"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-700 text-white">
                  <span className="block h-7 w-7">{r.icon}</span>
                </div>
                <span className="font-serif text-3xl font-bold leading-none text-wood-500/90">
                  {r.no}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy-800 sm:text-xl">
                {r.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
                {r.desc}
              </p>
              <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                {r.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-[13px] text-navy-800">
                    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-none text-wood-500" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="m5 12 5 5 9-11" />
                    </svg>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
