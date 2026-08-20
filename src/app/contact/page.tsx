"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // This is a portfolio demo: no data is sent anywhere.
    setSubmitted(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="お問い合わせ"
        description="税務・会計に関するご相談、顧問契約のお見積りなど、お気軽にお問い合わせください。"
      />

      <section>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_320px]">
          <div>
            {submitted ? (
              <div className="border border-border p-10 text-center sm:p-14">
                <p className="font-serif text-lg font-bold text-foreground">
                  お問い合わせありがとうございます。
                </p>
                <p className="mt-2 text-sm text-muted">
                  ※本サイトはデモのため、実際には送信されていません。
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center justify-center border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  フォームに戻る
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="お名前" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
                      placeholder="山田 太郎"
                    />
                  </Field>
                  <Field label="会社名・屋号(任意)" htmlFor="company">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
                      placeholder="株式会社Example"
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="メールアドレス" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </Field>
                  <Field label="電話番号" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
                      placeholder="090-1234-5678"
                    />
                  </Field>
                </div>

                <Field label="ご相談内容の種別" htmlFor="type">
                  <select
                    id="type"
                    name="type"
                    defaultValue="bookkeeping"
                    className="w-full border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="bookkeeping">記帳代行・税務申告</option>
                    <option value="inheritance">相続税・事業承継</option>
                    <option value="startup">起業・会社設立</option>
                    <option value="tax-audit">税務調査対応</option>
                    <option value="other">その他</option>
                  </select>
                </Field>

                <Field label="ご相談内容" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full resize-none border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none"
                    placeholder="現在の経理体制や、ご相談の背景などをご記入ください。"
                  />
                </Field>

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center bg-primary px-8 py-4 text-sm font-medium tracking-wide text-white transition-colors hover:bg-primary-dark"
                >
                  送信する
                </button>
                <p className="text-xs text-muted">
                  ※本フォームはポートフォリオ用のデモです。送信しても実際にはどこにも送信されません。
                </p>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-8">
            <div className="border border-border p-6">
              <h2 className="font-serif text-sm font-bold text-foreground">
                お電話でのお問い合わせ
              </h2>
              <p className="mt-3 font-serif text-xl font-bold text-primary">
                03-6812-4521
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                受付時間 平日 9:00〜18:00(土日祝休業)
              </p>
            </div>
            <div className="border border-border p-6">
              <h2 className="font-serif text-sm font-bold text-foreground">
                所在地
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground">
                〒104-0032
                <br />
                東京都中央区八丁堀2-11-6
                <br />
                みなとビル5F
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
