"use client";

import { useState, useEffect } from "react";
import { LoadingScreen } from "@/components/lumidh/loading-screen";
import { Navbar } from "@/components/lumidh/navbar";
import { HeroSection } from "@/components/lumidh/hero-section";
import { PhilosophySection } from "@/components/lumidh/philosophy-section";
import { MenSection } from "@/components/lumidh/men-section";
import { WomenSection } from "@/components/lumidh/women-section";
import { ParfumeSection } from "@/components/lumidh/parfume-section";
import { Footer } from "@/components/lumidh/footer";
import { WhatsAppButton } from "@/components/lumidh/whatsapp-button";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <PhilosophySection />
        <MenSection />
        <WomenSection />
        <ParfumeSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
