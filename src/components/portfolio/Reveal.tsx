import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({ label, title, children }: { label: string; title: string; children?: ReactNode }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="section-label">{label}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-muted-foreground leading-relaxed">{children}</p>}
    </Reveal>
  );
}
