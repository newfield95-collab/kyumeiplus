"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#problems", label: "お悩み" },
  { href: "#reasons", label: "選ばれる理由" },
  { href: "#services", label: "サービス" },
  { href: "#cases", label: "施工事例" },
  { href: "#company", label: "会社情報" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-white/95 shadow-[0_2px_12px_rgba(15,44,68,0.08)] backdrop-blur"
          : "bg-white/90 backdrop-blur"
      }`}
    >
      <div className="container-base flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center gap-3">
          <span
            aria-hidden
            className="flex h-10 w-10 items-center justify-center rounded-md bg-navy-700 text-white shadow-sm sm:h-11 sm:w-11"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block text-[10px] font-bold tracking-[0.18em] text-wood-500">
              SUZUKI TOYO JYUKI
            </span>
            <span className="block text-base font-bold text-navy-800 sm:text-lg">
              鈴木トーヨー住器
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-800 transition-colors hover:text-wood-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:0566421726"
            className="hidden items-center gap-2 rounded-full border border-navy-200 px-4 py-2 text-sm font-bold text-navy-700 transition-colors hover:bg-navy-50 md:inline-flex"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            0566-42-1726
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-wood-500 px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:bg-wood-600 sm:px-5"
          >
            無料相談
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-md text-navy-800 lg:hidden"
            aria-label="メニュー"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <nav className="container-base flex flex-col py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-3 text-sm font-medium text-navy-800 last:border-b-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:0566421726"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-navy-50 py-3 text-sm font-bold text-navy-700"
            >
              0566-42-1726（8:00〜17:30）
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
