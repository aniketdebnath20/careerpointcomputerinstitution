"use client";

import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import WhoWeAre from "@/components/landing/WhoWeAre";
import Benefits from "@/components/landing/Benefits";
import Contact from "@/components/landing/Contact";
import Cta from "@/components/landing/Cta";
import Footer from "@/components/landing/Footer";
import Marquee from "@/components/landing/Marquee";
import Pricing from "@/components/landing/Pricing";
import ComputerCourses from "@/components/landing/ComputerCourses";
import { motion } from "framer-motion";
import ReferAndEarn from "@/components/landing/ReferAndEarn";
import TrendingCourses from "@/components/landing/TrendingCourses";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.1 }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <div className="fixed inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 -z-20 h-full w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.1),transparent)]"></div>
      </div>
      <Marquee />
      <Header />
      <main className="flex-1">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>

        <AnimatedSection>
          <WhoWeAre />
        </AnimatedSection>



        <AnimatedSection>
          <TrendingCourses />
        </AnimatedSection>

        <AnimatedSection>
          <ComputerCourses />
        </AnimatedSection>

        <AnimatedSection>
          <Contact />
        </AnimatedSection>

        <AnimatedSection>
          <Pricing />
        </AnimatedSection>

        <AnimatedSection>
          <Benefits />
        </AnimatedSection>
        
        <AnimatedSection>
          <ReferAndEarn />
        </AnimatedSection>

        <AnimatedSection>
          <Cta />
        </AnimatedSection>


      </main>
      <Footer />
    </div>
  );
}
