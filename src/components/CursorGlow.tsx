"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * ヒーローセクション上でマウスポインターに追従するグロー演出。
 * 要件2-1「マウスポインターに追従するインタラクティブな演出」に対応。
 */
export default function CursorGlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 25, stiffness: 150, mass: 0.5 });
  const springY = useSpring(y, { damping: 25, stiffness: 150, mass: 0.5 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
    };

    container.addEventListener("pointermove", handlePointerMove);
    return () => container.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-56 w-56 rounded-full opacity-20 blur-3xl"
        style={{
          left: springX,
          top: springY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, var(--accent) 0%, var(--accent-2) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}
