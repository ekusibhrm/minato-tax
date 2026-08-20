export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <span className="text-xs font-medium tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
        <h1 className="mt-5 font-serif text-3xl font-bold tracking-wide text-foreground sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
