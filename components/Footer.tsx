import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-brand-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-brand-orange rounded flex items-center justify-center text-white font-serif font-bold text-xs">
                B
              </div>
              <span className="font-serif font-bold text-lg text-brand-dark">Banq</span>
            </div>
            <p className="text-sm text-brand-text-muted leading-relaxed">
              AI-kunskapsbasen för moderna team. Säker, snabb och anmärkningsvärt smart.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-brand-dark mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm text-brand-text-muted">
              <li><a href="#" className="hover:text-brand-orange">Funktioner</a></li>
              <li><a href="#" className="hover:text-brand-orange">Integrationer</a></li>
              <li><a href="#" className="hover:text-brand-orange">Företag</a></li>
              <li><a href="#" className="hover:text-brand-orange">Ändringslogg</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-dark mb-4">Företag</h4>
            <ul className="space-y-2 text-sm text-brand-text-muted">
              <li><a href="#" className="hover:text-brand-orange">Om oss</a></li>
              <li><a href="#" className="hover:text-brand-orange">Karriär</a></li>
              <li><a href="#" className="hover:text-brand-orange">Blogg</a></li>
              <li><a href="#" className="hover:text-brand-orange">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-dark mb-4">Juridiskt</h4>
            <ul className="space-y-2 text-sm text-brand-text-muted">
              <li><a href="#" className="hover:text-brand-orange">Integritet</a></li>
              <li><a href="#" className="hover:text-brand-orange">Villkor</a></li>
              <li><a href="#" className="hover:text-brand-orange">Säkerhet</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-muted pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-brand-text-muted">© 2024 Banq Technologies Inc. Alla rättigheter förbehållna.</p>
          <div className="flex gap-4">
            <div className="w-5 h-5 bg-brand-muted rounded-full hover:bg-brand-border cursor-pointer transition-colors" />
            <div className="w-5 h-5 bg-brand-muted rounded-full hover:bg-brand-border cursor-pointer transition-colors" />
            <div className="w-5 h-5 bg-brand-muted rounded-full hover:bg-brand-border cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};