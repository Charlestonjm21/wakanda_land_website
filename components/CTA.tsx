import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import { OFFICE_ADDRESS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/whatsapp";

export default function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-[1400px] px-6 py-[130px] text-center md:px-10">
      <Reveal>
        <Eyebrow className="justify-center">Karibu</Eyebrow>
        <h2 className="font-display text-[clamp(2.2rem,4.6vw,3.6rem)] font-bold tracking-[-0.02em]">
          Your plot is waiting.
        </h2>
        <p className="mx-auto mt-4.5 mb-9 max-w-[34rem] text-ink/72">
          Talk to our team on WhatsApp, book a site visit, or reserve online.
          We&apos;ll walk with you from first question to title deed.
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-tanzanite"
          >
            Chat on WhatsApp
          </a>
          <a
            href="#parcels"
            className="inline-block rounded-full border-[1.5px] border-ink px-6 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:bg-ink hover:text-paper"
          >
            Browse parcels
          </a>
        </div>
        <div className="mt-9 flex flex-col items-center gap-1.5 font-mono text-[0.8rem] text-ink/65">
          <p>Office: {OFFICE_ADDRESS}</p>
          <p>
            Phone:{" "}
            <a href={PHONE_TEL} className="text-ink hover:text-tanzanite">
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  );
}
