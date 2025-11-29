import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';

const plans = [
  {
    name: 'Start',
    price: '$0',
    desc: 'För små team som utforskar AI-sök.',
    features: ['Upp till 5 användare', '100 dokument', 'Standardsupport', 'Grundläggande analys'],
  },
  {
    name: 'Tillväxt',
    price: '$29',
    period: '/användare/mån',
    desc: 'För växande företag med databehov.',
    features: ['Obegränsat antal användare', '10 000 dokument', 'Prioriterad support', 'Avancerad analys', 'Slack-integration'],
    highlight: true,
  },
  {
    name: 'Företag',
    price: 'Kundanpassat',
    desc: 'För stora organisationer som kräver säkerhet.',
    features: ['Obegränsade dokument', 'SSO & SAML', 'Dedikerad Success Manager', 'On-premise installation', 'Revisionsloggar'],
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-medium text-brand-dark mb-4">Enkel, transparent prissättning</h2>
          <p className="text-brand-text-muted">Välj planen som passar era kunskapsbehov.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl p-8 ${
                plan.highlight 
                  ? 'bg-white shadow-xl ring-2 ring-brand-orange relative' 
                  : 'bg-white shadow-sm border border-brand-border'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider">
                  POPULÄRAST
                </div>
              )}
              <h3 className="text-lg font-semibold text-brand-dark mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-brand-dark">{plan.price}</span>
                {plan.period && <span className="text-brand-text-muted">{plan.period}</span>}
              </div>
              <p className="text-sm text-brand-text-muted mb-8">{plan.desc}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-brand-text">
                    <Check size={16} className="text-brand-orange flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlight ? 'primary' : 'outline'} 
                className="w-full"
              >
                {plan.price === 'Kundanpassat' ? 'Kontakta sälj' : 'Starta gratis provperiod'}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};