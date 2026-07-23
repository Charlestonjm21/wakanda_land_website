"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Lightbox({
  images,
  title,
  initialIndex,
  onClose,
}: {
  images: string[];
  title: string;
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);

  const goPrev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const goNext = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const SWIPE_THRESHOLD = 40;
    if (deltaX > SWIPE_THRESHOLD) goPrev();
    else if (deltaX < -SWIPE_THRESHOLD) goNext();
    touchStartX.current = null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[200] flex flex-col bg-ink"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} photo gallery`}
      onClick={onClose}
    >
      <div
        className="flex items-center justify-between px-5 py-4 md:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="font-display text-[1.05rem] font-bold text-paper">
            {title}
          </div>
          <div className="font-mono text-[0.7rem] tracking-[0.08em] text-paper/55">
            {index + 1} / {images.length}
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close gallery"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 text-paper transition-colors duration-200 hover:border-gold hover:text-gold"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 4L20 20M20 4L4 20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden px-3 pb-6"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={goPrev}
          aria-label="Previous photo"
          className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 bg-ink/60 text-paper transition-colors duration-200 hover:border-gold hover:text-gold md:left-6"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 5L8 12L15 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="relative h-full w-full max-w-[1200px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={images[index]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="relative h-full w-full"
            >
              <Image
                src={images[index]}
                alt={`${title} — photo ${index + 1} of ${images.length}`}
                fill
                loading="lazy"
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={goNext}
          aria-label="Next photo"
          className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-paper/25 bg-ink/60 text-paper transition-colors duration-200 hover:border-gold hover:text-gold md:right-6"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 5L16 12L9 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        className="flex justify-center gap-2 overflow-x-auto px-5 pb-5"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-1.5 shrink-0 rounded-full transition-all duration-200 ${
              i === index ? "w-6 bg-gold" : "w-1.5 bg-paper/30 hover:bg-paper/50"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
