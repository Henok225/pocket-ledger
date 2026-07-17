import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";

import {
  hero,
  features,
  faqItems
} from "@/data/content";


export default function Home() {

  return (

    <main className="bg-slate-50 min-h-screen">


      <Navbar />


      <Hero
        content={hero}
      />


      <Features
        items={features}
      />


      <FAQ
        items={faqItems}
      />


      <Footer />


    </main>

  );
}