export function AuroraBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="grid-bg absolute inset-0 mask-fade-y opacity-70" />
      <div
        className="aurora-blob absolute -left-[10%] top-[-15%] h-[55vh] w-[55vh] rounded-full opacity-60 blur-[90px]"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 65%)" }}
      />
      <div
        className="aurora-blob absolute right-[-10%] top-[10%] h-[50vh] w-[50vh] rounded-full opacity-50 blur-[100px]"
        style={{
          background: "radial-gradient(circle, var(--color-accent-2), transparent 65%)",
          animationDelay: "-7s",
        }}
      />
      <div
        className="aurora-blob absolute bottom-[-20%] left-[25%] h-[50vh] w-[50vh] rounded-full opacity-40 blur-[100px]"
        style={{
          background: "radial-gradient(circle, var(--color-accent-3), transparent 65%)",
          animationDelay: "-14s",
        }}
      />
    </div>
  );
}
