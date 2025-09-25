import AnchorNav from "@/components/AnchorNav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TrustRow from "@/components/TrustRow";
import Styles from "@/components/Styles";
import Fabrics from "@/components/Fabrics";
import Details from "@/components/Details";
import Occasions from "@/components/Occasions";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <div className="font-sans text-z-ink bg-z-cream">
      <AnchorNav />
      <main>
        <Hero />
        <TrustRow />
        <Styles />
        <Fabrics />
        <Details />
        <Occasions />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <MobileCTA />
      <Footer />
    </div>
  );
}
