import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import NumberMark from "@/components/NumberMark";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "業務内容 | みなと税理士法人",
  description:
    "記帳代行、税務申告、相続税・事業承継、起業支援など、みなと税理士法人の業務内容をご紹介します。",
};

const flow = [
  { title: "お問い合わせ", description: "電話・フォームよりご連絡ください。" },
  {
    title: "ヒアリング",
    description: "現状の経理体制やお悩みについて詳しくお伺いします。",
  },
  {
    title: "お見積り・ご契約",
    description: "業務内容に応じたお見積りをご提示し、ご契約いただきます。",
  },
  {
    title: "業務開始",
    description: "担当税理士が決まり次第、業務を開始いたします。",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="業務内容"
        description="記帳代行から税務申告、相続・事業承継まで、企業と個人事業主の税務・会計を幅広くサポートしています。"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="flex flex-col divide-y divide-border border-t border-border">
            {services.map((service, i) => (
              <div
                key={service.slug}
                className="grid grid-cols-1 gap-6 py-10 sm:grid-cols-[auto_1fr] sm:gap-10"
              >
                <NumberMark index={i + 1} />
                <div>
                  <h2 className="font-serif text-lg font-bold text-foreground">
                    {service.name}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="font-serif text-xl font-bold tracking-wide text-foreground">
            顧問契約までの流れ
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-4">
            {flow.map((step, i) => (
              <div key={step.title} className="flex flex-col gap-3">
                <span className="font-serif text-sm font-bold text-primary">
                  STEP {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
