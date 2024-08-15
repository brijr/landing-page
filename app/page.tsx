import { Main, Section, Container } from "@/components/craft";

import Hero from "@/components/lp/hero";
import CTA from "@/components/lp/cta";
import Feature from "@/components/lp/feature";
import FAQ from "@/components/lp/faq";
import Footer from "@/components/lp/footer";

export default function Home() {
  return (
    <Main>
      <Hero />
      <Feature />
      <FAQ />
      <CTA />
      <Footer />
    </Main>
  );
}
