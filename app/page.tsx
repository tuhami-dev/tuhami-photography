import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoItsFor from "@/components/WhoItsFor";
import Packages from "@/components/Packages";
import HowItWorks from "@/components/HowItWorks";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhoItsFor />
        <Packages />
        <HowItWorks />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
