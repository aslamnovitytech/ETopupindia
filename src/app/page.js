import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSecttion";
import Navbar from "@/components/Navbar";
import OneWalletSection from "@/components/OneWalletSection";
import PartnersSection from "@/components/PartnersSection";
import ServicesSection from "@/components/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
   <main className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <ServicesSection/>
      <OneWalletSection/>
      <PartnersSection/>
      <FAQSection />
      <Footer/>
    </main>
  );
}
