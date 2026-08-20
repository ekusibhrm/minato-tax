import Link from "next/link";
import NumberMark from "@/components/NumberMark";
import { services } from "@/lib/services";

const reasons = [
  {
    title: "顧問税理士歴20年以上のベテランが対応",
    description:
      "代表税理士をはじめ、経験豊富な税理士が直接お客様を担当します。",
  },
  {
    title: "月次訪問・オンライン面談を柔軟に選択",
    description:
      "ご希望に応じて、訪問・オンラインを組み合わせたご対応が可能です。",
  },
  {
    title: "相続・事業承継など専門性の高い案件にも対応",
    description:
      "相続税申告や自社株評価など、難易度の高い案件の実績があります。",
  },
];

const stats = [
  { label: "設立", value: "2012年" },
  { label: "顧問先数", value: "約320社" },
  { label: "税理士 / スタッフ", value: "4名 / 12名" },
  { label: "相続税申告実績", value: "200件以上" },
];

const news = [
  { date: "2026.07.01", text: "夏季休業のお知らせ(8月13日〜8月15日)" },
  { date: "2026.04.10", text: "インボイス制度に関する無料相談会を実施しました" },
  { date: "2026.01.15", text: "事務所移転のお知らせ" },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <span className="text-xs font-medium tracking-[0.2em] text-primary">
            TAX ACCOUNTANT
          </span>
          <h1 className="mt-6 max-w-2xl font-serif text-3xl font-bold leading-snug tracking-wide text-foreground sm:text-4xl sm:leading-snug">
            数字の向こうにある、
            <br />
            経営の意思決定を支える。
          </h1>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            みなと税理士法人は、記帳代行から税務申告、相続・事業承継まで、中小企業と個人事業主の税務・会計を一貫してサポートする税理士法人です。
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors hover:bg-primary-dark"
            >
              無料相談を予約する
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center border border-border px-7 py-3.5 text-sm font-medium tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              業務内容を見る
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="font-serif text-xl font-bold tracking-wide text-foreground">
            選ばれる理由
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {reasons.map((reason, i) => (
              <div key={reason.title} className="flex flex-col gap-4">
                <NumberMark index={i + 1} />
                <h3 className="font-serif text-base font-bold leading-relaxed text-foreground">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-serif text-xl font-bold tracking-wide text-foreground">
              業務内容
            </h2>
            <Link
              href="/services"
              className="text-sm text-primary transition-colors hover:text-primary-dark"
            >
              業務内容を詳しく見る &rarr;
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.slug} className="bg-background p-8">
                <h3 className="font-serif text-base font-bold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="font-serif text-xl font-bold tracking-wide text-foreground">
            数字で見るみなと税理士法人
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl font-bold text-primary sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs tracking-wide text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="font-serif text-xl font-bold tracking-wide text-foreground">
            お知らせ
          </h2>
          <ul className="mt-8 divide-y divide-border border-t border-border">
            {news.map((item) => (
              <li
                key={item.date}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="w-28 shrink-0 text-sm text-muted">
                  {item.date}
                </span>
                <span className="text-sm text-foreground">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-24">
          <h2 className="font-serif text-2xl font-bold tracking-wide text-foreground sm:text-3xl">
            まずは無料相談から
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
            税務・会計に関するお悩みは、些細なことでもお気軽にご相談ください。
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-primary-dark"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
