"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "業務内容" },
  { href: "/about", label: "事務所概要" },
  { href: "/fees", label: "料金" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-serif text-lg font-bold tracking-wide text-foreground"
        >
          <span className="flex h-9 w-9 items-center justify-center border border-primary text-sm text-primary">
            湊
          </span>
          みなと税理士法人
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide transition-colors ${
                  active
                    ? "text-foreground font-medium"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden sm:block">
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary px-5 py-2.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-primary-dark"
          >
            無料相談を予約
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="メニューを開く"
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center border border-border text-foreground sm:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-4 bg-foreground transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center bg-primary px-5 py-2.5 text-sm font-medium text-white"
            >
              無料相談を予約
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
