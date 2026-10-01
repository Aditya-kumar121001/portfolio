import React, { useEffect, useRef } from "react";

// Fixed page background: dot grid, ambient glows, and a cursor spotlight on pointer devices
const Backdrop: React.FC = () => {
  const spotlight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      spotlight.current?.style.setProperty(
        "background",
        `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(56, 189, 248, 0.06), transparent 80%)`
      );
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" />
      <div className="absolute -top-20 right-[-10%] h-[360px] w-[520px] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div ref={spotlight} className="absolute inset-0 transition-[background] duration-300" />
    </div>
  );
};

export default Backdrop;
