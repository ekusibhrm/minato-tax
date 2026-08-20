import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "業務内容" },
  { href: "/about", label: "事務所概要" },
  { href: "/fees", label: "料金" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 font-serif text-lg font-bold tracking-wide text-foreground"
            >
              <span className="flex h-9 w-9 items-center justify-center border border-primary text-sm text-primary">
                湊
              </span>
              みなと税理士法人
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              東京都中央区の税理士法人です。記帳・税務申告から相続・事業承継まで承ります。
            </p>
            <p className="mt-4 text-sm text-muted">
              〒104-0032
              <br />
              東京都中央区八丁堀2-11-6 みなとビル5F
              <br />
              TEL 03-6812-4521
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2 sm:justify-end">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted">
            ※このサイトはポートフォリオ制作のためのデモサイトです。「みなと税理士法人」は実在する事務所・法人ではありません。掲載している事務所概要・料金・実績・所属団体等の情報はすべて架空のものであり、実在の個人・団体とは一切関係ありません。
          </p>
          <p className="mt-3 text-xs text-muted/70">
            &copy; 2026 みなと税理士法人 (Demo)
          </p>
        </div>
      </div>
    </footer>
  );
}
