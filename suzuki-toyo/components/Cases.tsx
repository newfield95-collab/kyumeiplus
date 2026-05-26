type CaseItem = {
  category: string;
  title: string;
  meta: string;
  before: { label: string; tone: "old" };
  after: { label: string; tone: "new" };
};

const cases: CaseItem[] = [
  {
    category: "内窓・断熱",
    title: "アルミサッシ＋内窓設置で、結露・寒さを大幅改善",
    meta: "碧南市 / 戸建 / 工期 半日",
    before: { label: "アルミサッシ・単板ガラス", tone: "old" },
    after: { label: "内窓インプラス＋Low-E複層", tone: "new" },
  },
  {
    category: "玄関ドア",
    title: "リシェント玄関ドアにカバー工法で1日交換",
    meta: "西尾市 / 戸建 / 工期 1日",
    before: { label: "木製・建付け不良", tone: "old" },
    after: { label: "断熱・電気錠仕様にリニューアル", tone: "new" },
  },
  {
    category: "エクステリア",
    title: "カーポート＋目隠しフェンス新設で快適な駐車場へ",
    meta: "高浜市 / 戸建 / 工期 3日",
    before: { label: "屋根なし・雨ざらし", tone: "old" },
    after: { label: "2台用カーポート＋目隠しフェンス", tone: "new" },
  },
];

function Frame({
  label,
  tone,
  badge,
}: {
  label: string;
  tone: "old" | "new";
  badge: "BEFORE" | "AFTER";
}) {
  const isAfter = tone === "new";
  return (
    <div className="relative">
      <div
        className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl ring-1 ${
          isAfter
            ? "bg-gradient-to-br from-sky-100 via-white to-wood-50 ring-wood-400/40"
            : "bg-gradient-to-br from-slate-200 via-slate-100 to-slate-200 ring-slate-200"
        }`}
      >
        {/* 窓の十字 or 家の輪郭 */}
        <svg
          viewBox="0 0 200 150"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          {/* 家の輪郭 */}
          <path
            d="M30 120 L30 70 L100 25 L170 70 L170 120 Z"
            fill={isAfter ? "#fff" : "#e2e8f0"}
            stroke={isAfter ? "#0f2c44" : "#94a3b8"}
            strokeWidth="2"
          />
          {/* 窓 */}
          <rect
            x="72"
            y="68"
            width="56"
            height="42"
            fill={isAfter ? "#bae6fd" : "#cbd5e1"}
            stroke={isAfter ? "#0f2c44" : "#64748b"}
            strokeWidth="2"
          />
          <line x1="100" y1="68" x2="100" y2="110" stroke={isAfter ? "#0f2c44" : "#64748b"} strokeWidth="2" />
          <line x1="72" y1="89" x2="128" y2="89" stroke={isAfter ? "#0f2c44" : "#64748b"} strokeWidth="2" />
          {/* 後ろ：太陽 or 雲 */}
          {isAfter ? (
            <circle cx="155" cy="35" r="10" fill="#fcd34d" opacity="0.9" />
          ) : (
            <>
              <circle cx="45" cy="35" r="6" fill="#cbd5e1" />
              <circle cx="55" cy="35" r="8" fill="#cbd5e1" />
              <circle cx="65" cy="35" r="6" fill="#cbd5e1" />
            </>
          )}
        </svg>
        {/* 結露ドット（before） */}
        {!isAfter && (
          <div className="absolute right-6 top-6 flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400/70" />
            <span className="h-1 w-1 rounded-full bg-slate-400/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-400/70" />
          </div>
        )}
        {/* 光の差し込み（after） */}
        {isAfter && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-yellow-100/40" />
        )}
      </div>

      <span
        className={`absolute left-3 top-3 inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-bold tracking-widest ${
          isAfter ? "bg-wood-500 text-white" : "bg-slate-700 text-white"
        }`}
      >
        {badge}
      </span>
      <p className="mt-3 text-[12.5px] text-slate-600">{label}</p>
    </div>
  );
}

export default function Cases() {
  return (
    <section id="cases" className="bg-white py-20 sm:py-24">
      <div className="container-base">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-label">
              <span className="h-px w-6 bg-wood-500" />
              WORKS
            </span>
            <h2 className="section-title">施工事例</h2>
            <p className="section-lead">
              リフォーム前後の変化を、Before / Afterでご紹介します。
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-navy-700 px-5 py-2.5 text-sm font-bold text-navy-700 transition-colors hover:bg-navy-50"
          >
            事例をもっと見る
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_2px_10px_rgba(15,44,68,0.05)] transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <span className="self-start rounded-full bg-navy-50 px-3 py-1 text-[11px] font-bold tracking-wider text-navy-700">
                {c.category}
              </span>
              <h3 className="mt-3 text-base font-bold leading-snug text-navy-800 sm:text-[17px]">
                {c.title}
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <Frame label={c.before.label} tone="old" badge="BEFORE" />
                <Frame label={c.after.label} tone="new" badge="AFTER" />
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-[12px] text-slate-500">
                <span>{c.meta}</span>
                <span className="inline-flex items-center gap-1 font-bold text-navy-700">
                  詳細
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
