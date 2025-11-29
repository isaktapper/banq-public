import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Command } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero: React.FC = () => {
  const [placeholderText, setPlaceholderText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Vad är vår policy för distansarbete 2024?";

  useEffect(() => {
    if (isTyping) {
      if (placeholderText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setPlaceholderText(fullText.slice(0, placeholderText.length + 1));
        }, 50); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      // Reset loop
      const timeout = setTimeout(() => {
        setPlaceholderText('');
        setIsTyping(true);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [placeholderText, isTyping]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-bg">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent rounded-full blur-3xl opacity-60 mix-blend-multiply filter" />
         <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-orange-100 rounded-full blur-3xl opacity-50 mix-blend-multiply filter" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-border shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-brand-orange" />
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-text-muted">
              Nytt: Slack Integration
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-medium text-brand-dark tracking-tight mb-6">
            Din företagskunskap,<br />
            <span className="text-brand-orange bg-clip-text text-transparent bg-gradient-to-r from-brand-orange to-red-500">
              direkt tillgänglig.
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-brand-text-muted mb-10 leading-relaxed">
            Banq kopplar ihop dina team med svaren de behöver. 
            Sluta leta i mappar—fråga bara.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8">
              Starta gratis provperiod
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 bg-white/50 backdrop-blur-sm">
              Boka en demo
            </Button>
          </div>
        </motion.div>

        {/* Interactive Demo Interface */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-brand-border overflow-hidden ring-1 ring-brand-dark/5">
            {/* Window Bar */}
            <div className="bg-brand-muted border-b border-brand-border px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-brand-border" />
                <div className="w-3 h-3 rounded-full bg-brand-border" />
                <div className="w-3 h-3 rounded-full bg-brand-border" />
              </div>
              <div className="mx-auto text-xs font-medium text-brand-text-muted font-mono">banq_sök_v2.tsx</div>
            </div>

            {/* Search Input */}
            <div className="p-6 md:p-8 bg-white min-h-[300px] flex flex-col items-center">
               <div className="w-full max-w-2xl relative mb-8">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-text-muted">
                    <Search size={20} />
                  </div>
                  <input 
                    type="text"
                    readOnly
                    value={placeholderText}
                    className="w-full bg-white text-brand-dark text-lg border-2 border-brand-border rounded-xl py-4 pl-12 pr-16 focus:outline-none focus:border-brand-orange shadow-sm transition-all"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1">
                    <kbd className="hidden sm:inline-flex h-6 select-none items-center gap-1 rounded border bg-brand-muted px-2 font-mono text-[10px] font-medium text-brand-text-muted">
                      <Command size={10} /> K
                    </kbd>
                  </div>
               </div>

               {/* Result Card Simulation */}
               <AnimatePresence>
                 {!isTyping && (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.95 }}
                     className="w-full max-w-2xl bg-brand-muted rounded-xl p-6 border border-brand-border text-left"
                   >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2 bg-brand-accent rounded-lg text-brand-dark">
                          <Sparkles size={18} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-brand-dark">Sammanfattning av distanspolicy</h3>
                          <p className="text-sm text-brand-text-muted mt-1">Genererat från <span className="font-mono text-xs bg-white border border-brand-border px-1 rounded text-brand-dark">HR_Handbok_2024.pdf</span></p>
                        </div>
                      </div>
                      <p className="text-brand-dark leading-relaxed">
                        För 2024 tillåts anställda arbeta på distans upp till <strong>3 dagar per vecka</strong>. 
                        Kärntider (10:00 - 15:00) måste hållas oavsett plats. 
                        Heltidsdistans kräver VP-godkännande.
                      </p>
                      <div className="mt-4 flex gap-2">
                        <div className="h-2 w-24 bg-brand-border rounded animate-pulse" />
                        <div className="h-2 w-16 bg-brand-border rounded animate-pulse" />
                      </div>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          </div>
        </motion.div>
        
        <p className="mt-8 text-sm text-brand-text-muted">
          Används av över 4 000 framsynta team
        </p>
      </div>
    </section>
  );
};