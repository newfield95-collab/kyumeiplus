export default function DemoBanner() {
  // 公開期限（2週間後）
  const EXPIRY = "2026年6月9日（火）";
  const CLIENT = "鈴木トーヨー住器";

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 text-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #fff 0 1px, transparent 1px 10px)",
        }}
      />
      <div className="container-base flex flex-col items-center justify-between gap-1.5 py-2 text-center sm:flex-row sm:gap-4 sm:py-2.5 sm:text-left">
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center rounded-md bg-wood-500 px-2 py-0.5 text-[10px] font-bold tracking-[0.18em] text-white">
            DEMO
          </span>
          <p className="text-[12px] leading-snug sm:text-[13px]">
            <span className="font-bold text-wood-400">{CLIENT}</span>
            <span className="text-navy-100/80"> 様 専用サンプルサイト</span>
          </p>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-navy-100/80 sm:text-xs">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-wood-400" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <span>
            公開期限：<span className="font-bold text-white">{EXPIRY}</span> まで
          </span>
        </div>
      </div>
    </div>
  );
}
