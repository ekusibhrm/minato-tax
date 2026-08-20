export default function NumberMark({ index }: { index: number }) {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary font-serif text-sm font-bold text-primary">
      {String(index).padStart(2, "0")}
    </span>
  );
}
