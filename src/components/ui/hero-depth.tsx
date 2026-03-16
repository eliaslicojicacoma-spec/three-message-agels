"use client";

import { useEffect, useRef } from "react";

type HeroDepthProps = {
  children: React.ReactNode;
};

export default function HeroDepth({ children }: HeroDepthProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      node.style.setProperty("--mx", `${x * 12}px`);
      node.style.setProperty("--my", `${y * 12}px`);
      node.style.setProperty("--rx", `${y * -4}deg`);
      node.style.setProperty("--ry", `${x * 6}deg`);
    };

    const onLeave = () => {
      node.style.setProperty("--mx", `0px`);
      node.style.setProperty("--my", `0px`);
      node.style.setProperty("--rx", `0deg`);
      node.style.setProperty("--ry", `0deg`);
    };

    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", onLeave);

    return () => {
      node.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className="hero-3d-shell">
      {children}
    </div>
  );
}
