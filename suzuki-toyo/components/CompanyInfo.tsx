const info = [
  { label: "会社名", value: "鈴木トーヨー住器" },
  { label: "所在地", value: "〒447-0046 愛知県碧南市平和町3-53-1" },
  { label: "営業時間", value: "8:00〜17:30（日曜・祝日休）" },
  { label: "電話番号", value: "0566-42-1726", href: "tel:0566421726" },
  { label: "対応エリア", value: "西三河全域（碧南市・刈谷市・安城市・西尾市・高浜市・知立市ほか）" },
  { label: "取扱メーカー", value: "LIXIL（リクシル）正規取扱店 ほか" },
];

export default function CompanyInfo() {
  return (
    <section id="company" className="bg-cream/60 py-20 sm:py-24">
      <div className="container-base">
        <div className="text-center">
          <span className="section-label justify-center">
            <span className="h-px w-6 bg-wood-500" />
            COMPANY
          </span>
          <h2 className="section-title">会社情報</h2>
        </div>

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <dl className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
              {info.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[110px_1fr] gap-4 px-5 py-4 sm:grid-cols-[150px_1fr] sm:px-7 sm:py-5 ${
                    i !== info.length - 1 ? "border-b border-slate-100" : ""
                  }`}
                >
                  <dt className="text-[12.5px] font-bold text-navy-700 sm:text-sm">
                    {row.label}
                  </dt>
                  <dd className="text-[13.5px] leading-relaxed text-slate-700 sm:text-[15px]">
                    {row.href ? (
                      <a href={row.href} className="font-bold text-navy-800 hover:text-wood-500">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 地図プレースホルダ */}
          <div className="lg:col-span-2">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card">
              <svg
                viewBox="0 0 320 280"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                aria-label="地図"
              >
                <rect width="320" height="280" fill="#eef2f6" />
                {/* 道路 */}
                <path d="M0 200 L320 160" stroke="#fff" strokeWidth="22" />
                <path d="M120 0 L160 280" stroke="#fff" strokeWidth="22" />
                <path d="M0 100 L320 80" stroke="#cbd5e1" strokeWidth="6" />
                <path d="M40 0 L80 280" stroke="#cbd5e1" strokeWidth="6" />
                {/* 川 */}
                <path d="M0 250 Q160 230 320 260" stroke="#bfdbfe" strokeWidth="14" fill="none" />
                {/* 建物いくつか */}
                <rect x="180" y="40" width="32" height="22" fill="#cbd5e1" />
                <rect x="220" y="50" width="20" height="18" fill="#cbd5e1" />
                <rect x="40" y="180" width="28" height="20" fill="#cbd5e1" />
                <rect x="220" y="200" width="40" height="24" fill="#cbd5e1" />
                {/* ピン */}
                <g transform="translate(150 130)">
                  <circle r="22" fill="#0f2c44" opacity="0.18" />
                  <path d="M0 -22 C12 -22 18 -14 18 -4 C18 8 0 24 0 24 C0 24 -18 8 -18 -4 C-18 -14 -12 -22 0 -22 Z" fill="#b9863c" />
                  <circle cy="-6" r="6" fill="#fff" />
                </g>
              </svg>
              <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white/95 px-4 py-3 backdrop-blur">
                <div className="text-[11px] font-bold tracking-widest text-wood-500">
                  ACCESS
                </div>
                <div className="text-sm font-bold text-navy-800">
                  愛知県碧南市平和町3-53-1
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=%E7%A2%A7%E5%8D%97%E5%B8%82%E5%B9%B3%E5%92%8C%E7%94%BA3-53-1"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-navy-700 hover:text-wood-500"
                >
                  Google Mapsで開く
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
