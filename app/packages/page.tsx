import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { Action, CTASection, Hero } from '@/components/site/primitives';
import { Reveal } from '@/components/site/client';
import { packages } from '@/content/site';

export const metadata: Metadata = { title: 'Our Packages', description: 'Five flexible communications packages for development programs, businesses, enterprises and communications teams.' };

export default function Packages() {
  return <>
    <Hero eyebrow="Ways to Work Together" index="05 packages" title={<>Your context. Your ambition. <em>Our collective thinking.</em></>} text="A focused starting point for the work you need. Each package brings strategy and execution together, with room to adapt." />
    <section className="section wrap">
      <div className="package-grid">
        {packages.map((p, i) => <Reveal key={p.name} delay={(i % 3) * .06}><article id={`package-${i}`} className="package-card">
          <div className="package-card-head"><span className="card-number">0{i + 1}</span><span className="package-audience">{p.audience}</span></div>
          <h2>{p.name}<span>Package</span></h2>
          <span className="deliverables-label">What’s included</span>
          <ul className="check-list">{p.items.map(d => <li key={d}><Check size={16} aria-hidden="true" />{d}</li>)}</ul>
          <Action>Start a Conversation</Action>
        </article></Reveal>)}
        <Reveal delay={.12}><article className="package-card is-tailored">
          <span className="card-number">+</span>
          <h2>Not every challenge fits a package.</h2>
          <p>Packages can be tailored to your context. Tell us where you are, where you want to go and what stands in the way.</p>
          <Action variant="gold">Let’s shape it together</Action>
        </article></Reveal>
      </div>
    </section>
    <CTASection />
  </>;
}
