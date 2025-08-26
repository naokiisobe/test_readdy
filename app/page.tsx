
'use client';

import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import UseCases from './components/UseCases';
import PricingPlans from './components/PricingPlans';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <BeforeAfter />
      <UseCases />
      <PricingPlans />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
