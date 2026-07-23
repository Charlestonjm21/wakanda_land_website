import Counter from "@/components/Counter";
import Eyebrow from "@/components/Eyebrow";
import ParcelMap from "@/components/ParcelMap";

export default function Hero() {
  return (
    <header
      id="top"
      className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 pt-[130px] pb-16 md:px-10 lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div>
        <Eyebrow className="mb-5">Verified land · Title-ready plots</Eyebrow>
        <h1 className="mb-6 font-display text-[clamp(2.6rem,5.6vw,4.9rem)] font-bold leading-[1.02] tracking-[-0.03em]">
          Turning tenants <em className="text-tanzanite not-italic">to landowners.</em>
        </h1>
        <p className="lede mb-8 max-w-[32rem] text-[1.12rem] text-ink/78">
          Wakanda Land surveys, verifies, and sells title-ready plots around Arusha.
          First-time buyers and the diaspora can stop renting their future and own a
          verified piece of Tanzania.
        </p>
        <div className="mb-11 flex flex-wrap gap-3.5">
          <a
            href="#parcels"
            className="inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-tanzanite"
          >
            Browse verified parcels
          </a>
          <a
            href="#how"
            className="inline-block rounded-full border-[1.5px] border-ink px-6 py-3 text-sm font-semibold text-ink transition-all duration-200 hover:bg-ink hover:text-paper"
          >
            How it works
          </a>
        </div>
        <div className="flex flex-wrap gap-8 sm:gap-11">
          <Counter end={140} label="Plots surveyed" />
          <Counter end={96} label="Titles processed" />
          <Counter end={12} label="Project sites" />
        </div>
      </div>

      <ParcelMap />
    </header>
  );
}
