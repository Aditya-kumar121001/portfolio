import React, { useRef } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

// Card with a soft glow that follows the cursor
const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`group/card relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-colors duration-300 hover:border-white/[0.14] ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--x) var(--y), rgba(56, 189, 248, 0.10), transparent 70%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

export default SpotlightCard;
