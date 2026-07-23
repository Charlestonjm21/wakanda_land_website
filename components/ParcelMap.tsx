"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PLOTS, type Plot } from "@/lib/plots";

const STATUS_FILL: Record<Plot["status"], string> = {
  available: "#DCD2B8",
  reserved: "#E9C98A",
  sold: "#C9BFA6",
};

export default function ParcelMap() {
  const [active, setActive] = useState<Plot | null>(null);

  return (
    <div className="relative">
      <div className="rounded-[18px] border border-line bg-paper p-5 shadow-[0_30px_60px_-30px_rgba(27,22,16,0.35)]">
        <div className="mb-3.5">
          <span className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-ink/60">
            Block A · Njiro Ndogo, Arusha
          </span>
        </div>

        <svg viewBox="0 0 300 210" className="block h-auto w-full">
          <path d="M0 105 H300" stroke="#C9BFA6" strokeWidth="14" />
          <text x="6" y="102" className="font-mono fill-ink/60" fontSize="5.5">
            ACCESS ROAD · 9M
          </text>
          {PLOTS.map((p) => (
            <g key={p.id}>
              <rect
                x={p.x}
                y={p.y}
                width={p.w}
                height={p.h}
                rx={3}
                stroke="var(--ink)"
                strokeWidth={0.7}
                strokeOpacity={0.35}
                fill={active?.id === p.id ? "var(--tanzanite-bright)" : STATUS_FILL[p.status]}
                opacity={p.status === "sold" ? 0.55 : 1}
                tabIndex={p.status === "sold" ? -1 : 0}
                className="cursor-pointer transition-[fill,opacity] duration-200 outline-none"
                onMouseEnter={() => setActive(p)}
                onMouseLeave={() => setActive((cur) => (cur?.id === p.id ? null : cur))}
                onFocus={() => setActive(p)}
                onBlur={() => setActive((cur) => (cur?.id === p.id ? null : cur))}
              />
              <text
                x={p.x + 5}
                y={p.y + 12}
                fontSize="5.5"
                className="pointer-events-none fill-ink/60 font-mono"
              >
                {p.id.slice(3)}
              </text>
            </g>
          ))}
        </svg>

        <div className="mt-3 flex gap-4 font-mono text-[0.64rem] text-ink/60">
          <span className="flex items-center gap-1.5">
            <i className="h-[11px] w-[11px] rounded-[3px] border border-line" style={{ background: "#DCD2B8" }} />
            Available
          </span>
          <span className="flex items-center gap-1.5">
            <i className="h-[11px] w-[11px] rounded-[3px] border border-line" style={{ background: "#E9C98A" }} />
            Reserved
          </span>
          <span className="flex items-center gap-1.5">
            <i className="h-[11px] w-[11px] rounded-[3px] border border-line opacity-60" style={{ background: "#C9BFA6" }} />
            Sold
          </span>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-none absolute left-6 bottom-[70px] min-w-[230px] rounded-2xl bg-ink px-5 py-4 text-paper"
          >
            <div className="mb-1.5 font-mono text-[0.68rem] tracking-[0.15em] text-gold">
              {active.id}
            </div>
            <div className="mb-2 font-display text-[1.05rem] font-bold">{active.name}</div>
            <div className="flex justify-between border-t border-paper/14 py-0.5 text-[0.8rem]">
              <span>Size</span>
              <b className="font-semibold">{active.size}</b>
            </div>
            <div className="flex justify-between border-t border-paper/14 py-0.5 text-[0.8rem]">
              <span>Status</span>
              <b className="font-semibold">{active.status.toUpperCase()}</b>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
