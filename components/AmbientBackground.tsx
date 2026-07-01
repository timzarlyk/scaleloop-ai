/**
 * Глобальный светлый фон: мягкие цветные облака (mesh) на молочной базе.
 * Чисто декоративный, фиксированный слой. Не мешает читаемости карточек.
 */
export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* soft colour clouds — calm, mostly near the top */}
      <div className="absolute -top-44 -left-32 size-[640px] rounded-full bg-accent/12 blur-[170px] animate-drift" />
      <div className="absolute top-[4%] right-[-12%] size-[560px] rounded-full bg-violet/10 blur-[180px] animate-float-slow [animation-delay:-6s]" />
      <div className="absolute top-[46%] left-[60%] size-[420px] rounded-full bg-cyan/8 blur-[170px] animate-float-slow [animation-delay:-9s]" />

      {/* milky wash that settles the lower half so content stays clean */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(247,249,252,0.4)_55%,rgba(247,249,252,0.85)_100%)]" />

      {/* very subtle grain */}
      <div className="noise absolute inset-0 opacity-[0.018] mix-blend-multiply" />
    </div>
  );
}
