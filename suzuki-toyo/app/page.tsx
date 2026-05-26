import DemoBanner from "@/components/DemoBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Reasons from "@/components/Reasons";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import CompanyInfo from "@/components/CompanyInfo";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <DemoBanner />
      <Header />
      <main>
        <Hero />
        <Problems />
        <Reasons />
        <Services />
        <Cases />
        <ContactCTA />
        <CompanyInfo />
      </main>
      <Footer />
    </>
  );
}
