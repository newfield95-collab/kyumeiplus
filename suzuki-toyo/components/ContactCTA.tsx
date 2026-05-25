export default function ContactCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-800 py-16 text-white sm:py-20">
      <div className="absolute inset-0 -z-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>
      <div className="container-base relative grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="section-label text-wood-400">
            <span className="h-px w-6 bg-wood-400" />
            FREE CONSULTATION
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">
            まずはお気軽に、
            <br />
            無料でご相談ください。
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-navy-100/80 sm:text-base">
            「うちの場合、いくらかかるの？」「補助金は使える？」
            <br />
            そんな疑問にも、地元の住器店として丁寧にお答えします。現地調査・お見積りは無料です。
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 text-ink shadow-card sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold tracking-widest text-wood-500">
                TEL
              </div>
              <a
                href="tel:0566421726"
                className="block font-serif text-3xl font-bold text-navy-800 sm:text-4xl"
              >
                0566-42-1726
              </a>
              <p className="mt-1 text-xs text-slate-500">
                営業時間 8:00〜17:30（日曜・祝日休）
              </p>
            </div>
            <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-navy-50 text-navy-700 sm:h-16 sm:w-16">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href="tel:0566421726"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-700 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-800"
            >
              電話で相談
            </a>
            <a
              href="mailto:info@suzuki-toyo.example.jp"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-wood-500 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-wood-600"
            >
              メールで相談
            </a>
          </div>
          <ul className="mt-5 grid grid-cols-3 gap-2 text-center text-[11px] font-bold text-navy-700 sm:text-xs">
            {["現地調査 無料", "見積もり 無料", "しつこい営業なし"].map((t) => (
              <li key={t} className="rounded-full bg-cream py-2">
                ◎ {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
