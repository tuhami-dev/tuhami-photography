import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Packages from "@/components/Packages";
import WhoItsFor from "@/components/WhoItsFor";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
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
        <Portfolio />
        <Packages />
        <WhoItsFor />
        <HowItWorks />
        <AboutSection />
        <Testimonials />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
