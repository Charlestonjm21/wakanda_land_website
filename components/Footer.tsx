import Image from "next/image";
import { AREAS } from "@/lib/listings";
import { OFFICE_ADDRESS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 pt-15 pb-7.5 text-paper/60 md:px-10">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-10 border-b border-paper/12 pb-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-3.5 flex items-center gap-3 text-paper">
            <Image src="/logo.png" alt="Wakanda Land" width={38} height={38} />
            <span className="font-display text-[1.15rem] font-bold leading-tight tracking-tight">
              Wakanda Land
              <span className="block font-mono text-[0.55rem] font-normal tracking-[0.28em] uppercase text-laterite">
                Arusha · Tanzania
              </span>
            </span>
          </div>
          <p className="max-w-[20rem] text-[0.85rem]">
            Verified land parcels and title services in Arusha, Tanzania. Building the
            data and logistics backbone for East African land markets.
          </p>
        </div>

        <div>
          <h4 className="mb-3.5 font-mono text-[0.68rem] tracking-[0.2em] uppercase text-gold">
            Company
          </h4>
          <a href="#about" className="block py-0.5 text-[0.88rem] hover:text-white">
            About
          </a>
          <a href="#how" className="block py-0.5 text-[0.88rem] hover:text-white">
            How it works
          </a>
        </div>

        <div>
          <h4 className="mb-3.5 font-mono text-[0.68rem] tracking-[0.2em] uppercase text-gold">
            Parcels
          </h4>
          {AREAS.map((area) => (
            <a
              key={area.slug}
              href="#parcels"
              className="block py-0.5 text-[0.88rem] hover:text-white"
            >
              {area.label}
            </a>
          ))}
        </div>

        <div>
          <h4 className="mb-3.5 font-mono text-[0.68rem] tracking-[0.2em] uppercase text-gold">
            Contact
          </h4>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block py-0.5 text-[0.88rem] hover:text-white"
          >
            WhatsApp
          </a>
          <a href={PHONE_TEL} className="block py-0.5 text-[0.88rem] hover:text-white">
            {PHONE_DISPLAY}
          </a>
          <a
            href="mailto:hello@wakandaland.co.tz"
            className="block py-0.5 text-[0.88rem] hover:text-white"
          >
            hello@wakandaland.co.tz
          </a>
          <p className="max-w-[16rem] py-0.5 text-[0.88rem]">{OFFICE_ADDRESS}</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1400px] justify-between pt-6 font-mono text-[0.68rem] tracking-[0.08em]">
        <span>© 2026 WAKANDA LAND LIMITED</span>
        <span>S 03°22′ · E 36°41′</span>
      </div>
    </footer>
  );
}
