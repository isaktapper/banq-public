import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { ProductShowcase } from './components/ProductShowcase';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Button } from './components/ui/Button';

const CTASection = () => (
  <section className="py-24 bg-white border-t border-brand-border">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-dark mb-6">
        Redo att låsa upp er kunskap?
      </h2>
      <p className="text-xl text-brand-text-muted mb-10">
        Gå med i tusentals team som sparar timmar varje vecka med Banq.
      </p>
      <div className="flex justify-center gap-4">
        <Button size="lg" className="px-8 text-lg">Starta gratis provperiod</Button>
        <Button variant="outline" size="lg">Kontakta sälj</Button>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-orange/20 selection:text-brand-orange">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ProductShowcase />
        <Pricing />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;