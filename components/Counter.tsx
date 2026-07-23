"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Counter({ end, label }: { end: number; label: string }) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  const run = () => {
    if (started.current) return;
    started.current = true;
    const t0 = performance.now();
    const step = (now: number) => {
      const k = Math.min((now - t0) / 1200, 1);
      setValue(Math.round(end * (1 - Math.pow(1 - k, 3))));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <div className="stat">
      <motion.div
        className="font-display text-3xl font-bold text-ink"
        onViewportEnter={run}
        viewport={{ once: true, amount: 0.6 }}
      >
        {value}+
      </motion.div>
      <div className="font-mono text-[0.66rem] tracking-[0.16em] uppercase text-ink/55">
        {label}
      </div>
    </div>
  );
}
