import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "事務所概要 | みなと税理士法人",
  description:
    "みなと税理士法人の代表挨拶、事務所概要、沿革、所在地についてご紹介します。",
};

const overview = [
  { label: "名称", value: "みなと税理士法人" },
  { label: "代表者", value: "代表社員税理士 湊 慎一郎" },
  { label: "所在地", value: "東京都中央区八丁堀2-11-6 みなとビル5F" },
  { label: "設立", value: "2012年4月" },
  { label: "登録番号", value: "東京税理士会 第12345号(架空)" },
  { label: "所属団体", value: "東京税理士会 八丁堀支部(架空)" },
  { label: "業務内容", value: "税務申告代理、記帳代行、相続・事業承継支援 ほか" },
  { label: "顧問先数", value: "約320社" },
  { label: "電話 / FAX", value: "03-6812-4521 / 03-6812-4522" },
  { label: "営業時間", value: "平日 9:00〜18:00(土日祝休業)" },
];

const history = [
  { year: "2012", text: "湊慎一郎税理士事務所として中央区八丁堀に開業" },
  { year: "2016", text: "スタッフ増員に伴い現事務所へ移転" },
  { year: "2019", text: "相続・事業承継部門を新設" },
  { year: "2022", text: "税理士法人化し「みなと税理士法人」に改称" },
  { year: "2026", text: "顧問先数320社を突破、現在に至る" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="事務所概要"
        description="お客様の経営に寄り添う、身近な税理士でありたいと考えています。"
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <span className="text-xs font-medium tracking-[0.2em] text-primary">
            Message
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold tracking-wide text-foreground">
            代表挨拶
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-[auto_1fr] sm:gap-14">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center border border-primary font-serif text-2xl font-bold text-primary">
              湊
            </div>
            <div>
              <p className="leading-loose text-foreground">
                税理士事務所を開業して以来、大切にしてきたのは「お客様が数字を通じて経営の意思決定をできるようにすること」です。申告書を期限までに正しく作成することは税理士として当然の責務ですが、それだけでは経営のお役には立てないと考えています。
              </p>
              <p className="mt-5 leading-loose text-foreground">
                月次の試算表を単なる報告書で終わらせず、資金繰りや投資判断の材料としてお使いいただけるよう、スタッフ一同、わかりやすい説明を心がけています。税務・会計に関することであれば、規模の大小を問わずお気軽にご相談ください。
              </p>
              <p className="mt-8 font-serif text-sm font-bold text-foreground">
                代表社員税理士 湊 慎一郎
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <span className="text-xs font-medium tracking-[0.2em] text-primary">
            Overview
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold tracking-wide text-foreground">
            事務所概要
          </h2>
          <div className="mt-10 border-t border-border">
            {overview.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 gap-1 border-b border-border py-4 sm:grid-cols-[160px_1fr] sm:gap-6"
              >
                <span className="text-sm text-muted">{row.label}</span>
                <span className="text-sm text-foreground">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <span className="text-xs font-medium tracking-[0.2em] text-primary">
            History
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold tracking-wide text-foreground">
            沿革
          </h2>
          <div className="mt-10 flex flex-col divide-y divide-border border-t border-border">
            {history.map((item) => (
              <div
                key={item.year}
                className="flex gap-6 py-5 sm:gap-10"
              >
                <span className="w-16 shrink-0 font-serif text-sm font-bold text-primary">
                  {item.year}
                </span>
                <span className="text-sm leading-relaxed text-foreground">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <span className="text-xs font-medium tracking-[0.2em] text-primary">
            Access
          </span>
          <h2 className="mt-4 font-serif text-2xl font-bold tracking-wide text-foreground">
            アクセス
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <p className="leading-relaxed text-foreground">
                〒104-0032
                <br />
                東京都中央区八丁堀2-11-6 みなとビル5F
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                東京メトロ日比谷線・JR京葉線「八丁堀駅」より徒歩5分
                <br />
                東京メトロ有楽町線「新富町駅」より徒歩7分
              </p>
            </div>
            <div
              aria-hidden
              className="flex h-48 items-center justify-center border border-border bg-surface text-xs tracking-wide text-muted sm:h-auto"
            >
              MAP(イメージ)
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
