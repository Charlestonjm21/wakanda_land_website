import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    marker: "STEP 01",
    title: "Choose a parcel",
    body: "Browse our areas or book a free site visit.",
  },
  {
    marker: "STEP 02",
    title: "Verify everything",
    body: "We walk you through the survey plan, ownership history, and local authority records. You won't pay a shilling until you're ready.",
  },
  {
    marker: "STEP 03",
    title: "Reserve and pay",
    body: "Secure your plot with a deposit via bank transfer, then pay in flexible installments.",
  },
  {
    marker: "STEP 04",
    title: "Receive your title",
    body: "We process the transfer and hand you your documents. Your land, your name, on record.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-[1400px] px-6 pt-0 pb-[110px] md:px-10">
      <Reveal className="mb-15 max-w-[44rem]">
        <Eyebrow>The process</Eyebrow>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em]">
          From first visit to title deed, in four clear steps.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <Reveal key={s.marker} delay={i * 0.08}>
            <div className="group relative h-full overflow-hidden rounded-[18px] border border-line bg-paper p-7.5 transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-26px_rgba(27,22,16,0.4)]">
              <div
                className="pointer-events-none absolute -top-10 -right-10 h-[110px] w-[110px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(106,90,224,.14), transparent 70%)",
                }}
              />
              <span className="mb-11 block font-mono text-[0.68rem] tracking-[0.2em] text-tanzanite">
                {s.marker}
              </span>
              <h3 className="mb-2.5 font-display text-[1.2rem] font-bold">{s.title}</h3>
              <p className="text-[0.9rem] text-ink/70">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
