import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Listings from "@/components/Listings";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <HowItWorks />
      <Listings />
      <CTA />
      <Footer />
    </>
  );
}
