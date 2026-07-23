import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

const PILLARS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2 L17 6 V14 L10 18 L3 14 V6 Z" stroke="#9C7418" strokeWidth="1.6" />
        <circle cx="10" cy="10" r="2.4" fill="#E4B54A" />
      </svg>
    ),
    title: "Surveyed & beaconed",
    body: "Every plot is professionally surveyed with beacons placed and GPS coordinates recorded before it's listed.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="4" width="14" height="12" rx="2" stroke="#9C7418" strokeWidth="1.6" />
        <path d="M6 8h8M6 11h5" stroke="#E4B54A" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Title-ready paperwork",
    body: "We manage the documentation trail end-to-end, from sale agreement to certificate of title.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="4" y="2" width="12" height="16" rx="3" stroke="#9C7418" strokeWidth="1.6" />
        <path d="M8 15h4" stroke="#E4B54A" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: "Pay from anywhere",
    body: "Flexible installments via bank transfer. Built for buyers at home and abroad.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-6 py-[110px] md:px-10">
      <Reveal className="mb-15 max-w-[44rem]">
        <Eyebrow>Why we exist</Eyebrow>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em]">
          Land in Tanzania shouldn&apos;t require insider knowledge.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-15 md:grid-cols-2">
        <Reveal className="font-display text-[clamp(1.5rem,2.6vw,2.1rem)] font-medium leading-[1.3] tracking-[-0.01em]">
          Too many buyers lose money to double-sold plots, missing surveys, and
          paperwork that goes nowhere. This hits the diaspora hardest.{" "}
          <em className="text-laterite not-italic">
            We built Wakanda Land to make every step verifiable.
          </em>
        </Reveal>

        <Reveal className="grid" delay={0.1}>
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="grid grid-cols-[56px_1fr] gap-4 border-t border-line py-5.5 last:border-b"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-paper">
                {p.icon}
              </div>
              <div>
                <h3 className="mb-1 font-display text-[1.08rem] font-bold">{p.title}</h3>
                <p className="text-[0.92rem] text-ink/70">{p.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
