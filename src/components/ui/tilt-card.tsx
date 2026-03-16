"use client";

import { useEffect, useRef } from "react";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const onMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      node.style.setProperty("--tx", `${x * 8}px`);
      node.style.setProperty("--ty", `${y * 8}px`);
      node.style.setProperty("--rx", `${y * -5}deg`);
      node.style.setProperty("--ry", `${x * 7}deg`);
    };

    const onLeave = () => {
      node.style.setProperty("--tx", "0px");
      node.style.setProperty("--ty", "0px");
      node.style.setProperty("--rx", "0deg");
      node.style.setProperty("--ry", "0deg");
    };

    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", onLeave);

    return () => {
      node.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={ref} className={`tilt-shell ${className}`}>
      <div className="tilt-inner">{children}</div>
    </div>
  );
}
