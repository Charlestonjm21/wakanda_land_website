"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import Eyebrow from "@/components/Eyebrow";
import Lightbox from "@/components/Lightbox";
import Reveal from "@/components/Reveal";
import { AREA_IMAGES, AREAS, LISTINGS, type AreaSlug } from "@/lib/listings";
import { WHATSAPP_URL } from "@/lib/whatsapp";

type Filter = "all" | AreaSlug | "other";

export default function Listings() {
  const [filter, setFilter] = useState<Filter>("all");
  const [gallery, setGallery] = useState<{ area: AreaSlug; index: number } | null>(
    null
  );

  const visible = useMemo(
    () => LISTINGS.filter((l) => filter === "all" || l.area === filter),
    [filter]
  );

  return (
    <section id="parcels" className="max-w-none bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-[110px] md:px-10">
        <Reveal className="mb-15 max-w-[44rem]">
          <Eyebrow tone="gold">Featured parcels</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em] text-paper">
            Inventory around Arusha.
          </h2>
          <p className="mt-4.5 text-[1.05rem] text-paper/65">
            These are some of our current and recent project areas. We have plots
            across Arusha, so ask us about other locations.
          </p>
        </Reveal>

        <Reveal className="mb-10 flex flex-wrap gap-2.5">
          <button
            onClick={() => setFilter("all")}
            className={`rounded-full border px-4.5 py-2.5 font-mono text-[0.74rem] tracking-[0.08em] transition-all duration-200 ${
              filter === "all"
                ? "border-tanzanite bg-tanzanite text-white"
                : "border-paper/30 bg-transparent text-sand hover:border-tanzanite hover:bg-tanzanite hover:text-white"
            }`}
          >
            All sites
          </button>
          {AREAS.map((area) => (
            <button
              key={area.slug}
              onClick={() => setFilter(area.slug)}
              className={`rounded-full border px-4.5 py-2.5 font-mono text-[0.74rem] tracking-[0.08em] transition-all duration-200 ${
                filter === area.slug
                  ? "border-tanzanite bg-tanzanite text-white"
                  : "border-paper/30 bg-transparent text-sand hover:border-tanzanite hover:bg-tanzanite hover:text-white"
              }`}
            >
              {area.label}
            </button>
          ))}
          <button
            onClick={() => setFilter("other")}
            className={`rounded-full border px-4.5 py-2.5 font-mono text-[0.74rem] tracking-[0.08em] transition-all duration-200 ${
              filter === "other"
                ? "border-tanzanite bg-tanzanite text-white"
                : "border-paper/30 bg-transparent text-sand hover:border-tanzanite hover:bg-tanzanite hover:text-white"
            }`}
          >
            Other areas
          </button>
        </Reveal>

        <div className="grid grid-cols-1 gap-5.5 md:grid-cols-2 lg:grid-cols-3">
          {filter === "other" ? (
            <motion.div
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col justify-between overflow-hidden rounded-[18px] border border-paper/13 bg-paper/5 p-7.5"
            >
              <div>
                <h3 className="mb-2.5 font-display text-[1.25rem] font-bold">
                  Looking for a different area?
                </h3>
                <p className="text-[0.92rem] text-paper/65">
                  We have plots across Arusha beyond the areas shown here. Message
                  us on WhatsApp and we will help you find the right plot.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block w-fit rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
              >
                Ask us on WhatsApp
              </a>
            </motion.div>
          ) : (
            visible.map((l) => {
              const areaImages = AREA_IMAGES[l.area];
              const startIndex = Math.max(0, areaImages.indexOf(l.image));
              const openGallery = () =>
                setGallery({ area: l.area, index: startIndex });

              return (
                <motion.div
                  key={l.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="group overflow-hidden rounded-[18px] border border-paper/13 bg-paper/5 transition-[transform,border-color] duration-250 hover:-translate-y-1.5 hover:border-tanzanite-bright"
                >
                  <button
                    onClick={openGallery}
                    aria-label={`View ${areaImages.length} photos of ${l.name}`}
                    className="relative block h-[190px] w-full overflow-hidden text-left"
                  >
                    <Image
                      src={l.image}
                      alt={l.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3.5 left-3.5 rounded-full bg-ink px-3 py-1.5 font-mono text-[0.62rem] tracking-[0.14em] uppercase text-gold">
                      {l.badge}
                    </span>
                    <span className="absolute bottom-3.5 right-3.5 flex items-center gap-1.5 rounded-full bg-ink/85 px-3 py-1.5 font-mono text-[0.62rem] tracking-[0.1em] text-paper backdrop-blur-sm transition-colors duration-200 group-hover:bg-tanzanite-bright group-hover:text-ink">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="15"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />
                        <circle cx="8.5" cy="10.5" r="1.6" fill="currentColor" />
                        <path
                          d="M3 16.5L8 12.5L12.5 16L16 13L21 17.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {areaImages.length} photos
                    </span>
                  </button>
                  <div className="p-5.5">
                    <div className="mb-2 font-mono text-[0.66rem] tracking-[0.1em] text-paper/50">
                      {l.coords}
                    </div>
                    <h3 className="mb-1.5 font-display text-[1.25rem] font-bold">{l.name}</h3>
                    <div className="mb-4 flex flex-wrap gap-3.5 text-[0.82rem] text-paper/65">
                      <span>{l.size}</span>
                      <span>·</span>
                      <span>{l.loc}</span>
                      <span>·</span>
                      <span>{l.dist}</span>
                    </div>
                    <div className="border-t border-paper/12 pt-4">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.86rem] font-semibold text-tanzanite-bright no-underline"
                      >
                        Request details →
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>

      <AnimatePresence>
        {gallery && (
          <Lightbox
            images={AREA_IMAGES[gallery.area]}
            title={AREAS.find((a) => a.slug === gallery.area)?.label ?? ""}
            initialIndex={gallery.index}
            onClose={() => setGallery(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
