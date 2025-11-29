import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Mån', searches: 400 },
  { name: 'Tis', searches: 650 },
  { name: 'Ons', searches: 900 },
  { name: 'Tor', searches: 850 },
  { name: 'Fre', searches: 500 },
];

export const ProductShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif font-medium mb-6 leading-tight">
              Förvandla dina dokument till <br />
              <span className="text-brand-orange">användbara insikter.</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Administratörer får en överblick över vad organisationen frågar om. 
              Identifiera kunskapsluckor, föråldrade dokument och trendande ämnen i realtid.
            </p>
            
            <ul className="space-y-4 mb-8">
              {['SOC2 Typ II Certifierad', 'GDPR-efterlevnad', 'Självvärdade alternativ tillgängliga'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle2 className="text-brand-orange" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-brand-orange/20 rounded-lg">
                  <TrendingUp className="text-brand-orange" size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Effektivitetsökning</div>
                  <div className="text-2xl font-bold text-white">+145%</div>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                Team som använder Banq hittar svar 3x snabbare än traditionell mappbläddring.
              </p>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
            {/* Abstract Dashboard Visual */}
            <div className="bg-slate-800/80 rounded-xl border border-white/10 shadow-2xl p-6 lg:p-8 relative z-10 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-semibold text-lg">Kunskapsbas-analys</h3>
                <select className="bg-slate-700/50 border-none rounded text-sm text-slate-300 px-3 py-1">
                  <option>Senaste 7 dagarna</option>
                </select>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <XAxis 
                      dataKey="name" 
                      stroke="#94a3b8" 
                      tickLine={false} 
                      axisLine={false}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip 
                      cursor={{fill: 'transparent'}}
                      contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                    />
                    <Bar dataKey="searches" fill="oklch(0.6397 0.1720 36.4421)" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                 <div className="bg-slate-700/30 p-4 rounded-lg">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Vanligaste Frågan</div>
                    <div className="font-medium truncate">"Semesterkalender"</div>
                 </div>
                 <div className="bg-slate-700/30 p-4 rounded-lg">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Aktiva Användare</div>
                    <div className="font-medium">2,403</div>
                 </div>
              </div>
            </div>

            {/* Decor Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange rounded-full blur-3xl opacity-20 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-accent rounded-full blur-3xl opacity-20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};