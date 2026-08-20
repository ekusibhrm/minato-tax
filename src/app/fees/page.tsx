import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "料金 | みなと税理士法人",
  description:
    "顧問契約プランとスポット業務の料金の目安をご紹介します。表示金額はすべて税抜です。",
};

const plans = [
  {
    name: "個人事業主プラン",
    monthly: "月額 15,000円〜",
    settlement: "確定申告料 80,000円〜",
    visit: "年2回(オンライン可)",
    features: ["記帳代行(月間仕訳100件まで)", "所得税確定申告書の作成", "税務相談(随時)"],
  },
  {
    name: "小規模法人プラン",
    monthly: "月額 30,000円〜",
    settlement: "決算申告料 150,000円〜",
    visit: "月1回(訪問 / オンライン)",
    features: ["記帳代行(月間仕訳300件まで)", "法人税・消費税申告書の作成", "資金繰り相談", "年末調整対応"],
    highlight: true,
  },
  {
    name: "中規模法人プラン",
    monthly: "月額 60,000円〜",
    settlement: "決算申告料 250,000円〜",
    visit: "月1〜2回(訪問 / オンライン)",
    features: ["記帳代行(仕訳件数上限なし)", "法人税・消費税申告書の作成", "資金繰り・経営相談", "年末調整・給与計算対応"],
  },
];

const spot = [
  { name: "会社設立サポート", price: "50,000円〜" },
  { name: "相続税申告", price: "200,000円〜(遺産総額の0.5%〜)" },
  { name: "税務調査対応", price: "50,000円 / 日〜" },
  { name: "スポット税務相談", price: "10,000円 / 時間" },
  { name: "年末調整代行(記帳代行契約なしの場合)", price: "1名あたり 3,000円〜" },
  { name: "各種届出書の作成", price: "10,000円〜" },
];

export default function FeesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fees"
        title="料金"
        description="顧問契約は事業規模やご要望に応じてプランをご提案します。まずはお気軽にお見積りをご依頼ください。"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="font-serif text-xl font-bold tracking-wide text-foreground">
            顧問契約プラン
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col bg-background p-8 ${plan.highlight ? "ring-1 ring-inset ring-primary" : ""}`}
              >
                {plan.highlight && (
                  <span className="mb-4 inline-flex w-fit items-center bg-primary px-3 py-1 text-xs font-medium tracking-wide text-white">
                    人気プラン
                  </span>
                )}
                <h3 className="font-serif text-base font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="mt-4 font-serif text-2xl font-bold text-primary">
                  {plan.monthly}
                </p>
                <p className="mt-1 text-xs text-muted">{plan.settlement}</p>
                <p className="mt-1 text-xs text-muted">訪問頻度目安:{plan.visit}</p>
                <ul className="mt-6 flex flex-col gap-2 border-t border-border pt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted">
            ※表示金額はすべて税抜です。仕訳件数・業務内容により金額が変動する場合があります。詳細は個別にお見積りいたします。
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="font-serif text-xl font-bold tracking-wide text-foreground">
            スポット業務料金
          </h2>
          <div className="mt-10 flex flex-col divide-y divide-border border-t border-border">
            {spot.map((item) => (
              <div
                key={item.name}
                className="flex flex-col justify-between gap-2 py-4 sm:flex-row sm:items-center"
              >
                <span className="text-sm text-foreground">{item.name}</span>
                <span className="font-serif text-sm font-bold text-primary">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted">
            ※表示金額はすべて税抜です。案件の難易度・分量により別途お見積りとなります。
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20">
          <h2 className="font-serif text-xl font-bold tracking-wide text-foreground">
            お客様の状況に合わせてお見積りします
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
            事業規模やご希望のサポート内容をお伺いした上で、最適なプランをご提案いたします。
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-primary-dark"
            >
              お見積りを相談する
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
