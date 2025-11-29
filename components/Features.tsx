import React from 'react';
import { Box, Lock, Search, Settings, Sparkles, Database, Users, Layers, Shield } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-brand-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-medium text-brand-dark mb-4">
            Byggd för det moderna företaget
          </h2>
          <p className="text-lg text-brand-text-muted">
            Kraftfull nog för ingenjörsteam, enkel nog för HR. 
            Banq samlar din organisations spridda kunskap.
          </p>
        </div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          {/* Top Left: Semantic Search */}
          <GridItem
            area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
            icon={<Sparkles className="h-4 w-4 text-brand-orange" />}
            title="Semantisk Intelligens"
            description="Banq förstår sammanhang, inte bara nyckelord. Ställ naturliga frågor och få exakta svar från dina dokument."
          />

          {/* Top Right: Team Collaboration */}
          <GridItem
            area="md:[grid-area:1/7/2/13] xl:[grid-area:1/8/2/13]"
            icon={<Users className="h-4 w-4 text-brand-orange" />}
            title="Teamsamarbete"
            description="Dela sökningar, kommentera dokument och bygg en kollektiv hjärna som blir smartare för varje interaktion."
          />

          {/* Middle Pillar: Security */}
          <GridItem
            area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
            icon={<Shield className="h-4 w-4 text-brand-orange" />}
            title="Säkerhet i företagsklass"
            description="Rollbaserad åtkomstkontroll (RBAC), SSO och SOC2-efterlevnad säkerställer att din känsliga data alltid är skyddad."
          />

          {/* Bottom Left: Indexing */}
          <GridItem
            area="md:[grid-area:2/7/3/13] xl:[grid-area:2/1/3/5]"
            icon={<Database className="h-4 w-4 text-brand-orange" />}
            title="Omedelbar Indexering"
            description="Ladda upp PDF, DOCX, CSV eller anslut Notion/Drive. Dokument bearbetas och blir sökbara på sekunder."
          />

          {/* Bottom Right: Integration */}
          <GridItem
            area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
            icon={<Layers className="h-4 w-4 text-brand-orange" />}
            title="Sömlösa Integrationer"
            description="Fungerar där du arbetar. Kom åt Banq direkt i Slack, Microsoft Teams eller via vårt Chrome-tillägg."
          />
        </ul>
      </div>
    </section>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-brand-border bg-white p-2 md:rounded-3xl md:p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          movementDuration={1.5}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-brand-border bg-brand-muted/50 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 font-sans text-xl font-semibold text-brand-dark">
                {title}
              </h3>
              <p className="font-sans text-sm text-brand-text-muted leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};