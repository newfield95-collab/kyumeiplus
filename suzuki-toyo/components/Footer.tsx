export default function Footer() {
  return (
    <footer className="bg-navy-900 py-12 text-navy-100">
      <div className="container-base">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
                </svg>
              </span>
              <div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-wood-400">
                  SUZUKI TOYO JYUKI
                </div>
                <div className="text-lg font-bold text-white">
                  鈴木トーヨー住器
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-100/70">
              碧南市で創業50年。LIXIL正規取扱店として、窓・玄関ドア・エクステリア・水まわりまで、
              西三河の住まいを丁寧にお守りします。
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-wood-400">
              CONTACT
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="tel:0566421726" className="font-bold text-white hover:text-wood-400">
                  0566-42-1726
                </a>
              </li>
              <li className="text-navy-100/70">8:00〜17:30（日祝休）</li>
              <li className="text-navy-100/70">愛知県碧南市平和町3-53-1</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest text-wood-400">
              MENU
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["#problems", "お悩み"],
                ["#reasons", "選ばれる理由"],
                ["#services", "サービス"],
                ["#cases", "施工事例"],
                ["#company", "会社情報"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-navy-100/80 hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-navy-100/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} 鈴木トーヨー住器 All Rights Reserved.</p>
          <p>※ 本サイトは制作サンプルです。実在の企業情報とは異なる場合があります。</p>
        </div>
      </div>
    </footer>
  );
}
