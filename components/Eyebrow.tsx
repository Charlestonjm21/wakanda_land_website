export default function Eyebrow({
  children,
  className = "",
  tone = "laterite",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "laterite" | "gold";
}) {
  const toneClass =
    tone === "gold"
      ? "text-gold before:bg-gold"
      : "text-laterite before:bg-laterite";

  return (
    <div
      className={`mb-4 flex items-center gap-2.5 font-mono text-[0.72rem] uppercase tracking-[0.3em] before:content-[''] before:inline-block before:h-[1.5px] before:w-[34px] ${toneClass} ${className}`}
    >
      {children}
    </div>
  );
}
