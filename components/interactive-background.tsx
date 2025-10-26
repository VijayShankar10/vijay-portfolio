"use client";

import { useEffect, useRef } from "react";

export function InteractiveBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return;

      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      bgRef.current.style.background = `
        radial-gradient(
          circle at ${x}% ${y}%, 
          rgba(59, 130, 246, 0.15) 0%, 
          rgba(147, 51, 234, 0.1) 25%,
          rgba(236, 72, 153, 0.05) 50%,
          transparent 100%
        )
      `;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={bgRef}
      className="pointer-events-none fixed inset-0 z-0 transition-all duration-300 ease-out"
      style={{
        background: `radial-gradient(
          circle at 50% 50%, 
          rgba(59, 130, 246, 0.15) 0%, 
          rgba(147, 51, 234, 0.1) 25%,
          rgba(236, 72, 153, 0.05) 50%,
          transparent 100%
        )`,
      }}
    />
  );
}
