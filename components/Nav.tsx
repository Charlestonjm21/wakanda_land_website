import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#how", label: "How it works" },
  { href: "#parcels", label: "Parcels" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 md:px-10 backdrop-blur-md bg-sand/82 border-b border-line">
      <Link href="#top" className="flex items-center gap-3 text-ink">
        <Image
          src="/logo.png"
          alt="Wakanda Land"
          width={38}
          height={38}
          className="shrink-0"
          priority
        />
        <span className="font-display text-[1.15rem] font-bold leading-tight tracking-tight">
          Wakanda Land
          <span className="block font-mono text-[0.55rem] font-normal tracking-[0.28em] uppercase text-laterite">
            Arusha · Tanzania
          </span>
        </span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group relative text-sm font-medium text-ink"
          >
            {link.label}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-tanzanite transition-[width] duration-200 group-hover:w-full" />
          </a>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-tanzanite"
        >
          Reserve a plot
        </a>
      </div>
    </nav>
  );
}
