import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { packages, services, stats } from '@/content/site';

type ActionVariant = 'primary' | 'light' | 'gold' | 'ghost';

export function Action({ children, href = '/contact', variant = 'primary' }: { children: React.ReactNode; href?: string; variant?: ActionVariant }) {
  return <Link className={`button button-${variant}`} href={href}><span>{children}</span><span className="button-icon"><ArrowUpRight size={16} /></span></Link>;
}

export function Eyebrow({ children, index }: { children: React.ReactNode; index?: string }) {
  return <span className="eyebrow">{index && <span className="eyebrow-index">{index}</span>}{children}</span>;
}

export function SectionHeading({ eyebrow, index, title, children, align = 'left' }: { eyebrow: string; index?: string; title: React.ReactNode; children?: React.ReactNode; align?: 'left' | 'center' }) {
  return <div className={`section-heading ${align === 'center' ? 'is-centered' : ''}`}>
    <Eyebrow index={index}>{eyebrow}</Eyebrow>
    <h2>{title}</h2>
    {children && <p>{children}</p>}
  </div>;
}

/** Ascending ladder drawn in fine lines; used as the brand motif on dark surfaces. */
export function LadderLines({ className = '' }: { className?: string }) {
  const rungs = Array.from({ length: 13 }, (_, i) => i / 12);
  return <svg className={`ladder-lines ${className}`} viewBox="0 0 640 640" fill="none" aria-hidden="true">
    <path d="M140 660L400 -20M270 660L530 -20" stroke="currentColor" strokeWidth="1" />
    {rungs.map(t => <path key={t} d={`M${140 + 260 * t} ${660 - 680 * t}H${270 + 260 * t}`} stroke="currentColor" strokeWidth="1" />)}
    <path d="M60 660L320 -20M350 660L610 -20" stroke="currentColor" strokeOpacity=".35" strokeDasharray="2 10" />
    <circle className="ladder-point" cx="465" cy="150" r="6" />
  </svg>;
}

export function Ladder({ large = false }: { large?: boolean }) {
  return <svg className={large ? 'ladder-art' : 'brand-mark'} viewBox="0 0 300 400" fill="none" aria-hidden="true"><path d="M60 380V100L240 20V300M60 100L240 20M60 155L240 75M60 210L240 130M60 265L240 185M60 320L240 240M60 375L240 295" stroke="currentColor" strokeWidth={large ? 1 : 15} />{large && <><path d="M20 398V82L240 -16M100 400V118L280 38V320M0 375L300 242M0 320L300 187M0 265L300 132" stroke="currentColor" strokeOpacity=".2" /><circle cx="240" cy="20" r="5" fill="currentColor" /></>}</svg>;
}

export function Hero({ eyebrow, title, text, index, children }: { eyebrow: string; title: React.ReactNode; text: string; index?: string; children?: React.ReactNode }) {
  return <section className="page-hero">
    <LadderLines className="page-hero-motif" />
    <div className="wrap page-hero-inner">
      <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Ladder Point</Link><span aria-hidden="true">/</span><span aria-current="page">{eyebrow}</span></nav>
      <div className="page-hero-grid">
        <h1>{title}</h1>
        <div className="page-hero-aside">
          {index && <span className="page-hero-index">{index}</span>}
          <p>{text}</p>
          {children}
        </div>
      </div>
    </div>
  </section>;
}

export function ServiceCard({ service, index, featured = false }: { service: typeof services[number]; index: number; featured?: boolean }) {
  return <Link className={`service-card ${featured ? 'is-featured' : ''}`} href={`/expertise#${service.slug}`}>
    <span className="card-number">0{index + 1}</span>
    <h3>{service.name}</h3>
    <p>{service.short}</p>
    <span className="card-link">Discover more <ArrowUpRight size={16} /></span>
  </Link>;
}

export function StatBlock({ stat }: { stat: typeof stats[number] }) {
  return <div className="stat"><strong>{stat.value}</strong><span>{stat.label}</span><p>{stat.detail}</p></div>;
}

export function PackageRow({ item, index }: { item: typeof packages[number]; index: number }) {
  return <Link className="package-row" href={`/packages#package-${index}`}>
    <span className="card-number">0{index + 1}</span>
    <h3>{item.name}</h3>
    <p>{item.audience}</p>
    <span className="package-row-icon"><ArrowUpRight size={20} /></span>
  </Link>;
}

const steps = [
  ['Insight', 'We research the problem.'],
  ['Strategy', 'We build the strategy.'],
  ['Story', 'We craft the message.'],
  ['Creation', 'We photograph the story. We film it. We animate it.'],
  ['Engagement', 'We take it digital.'],
  ['Impact', 'We make sure it reaches the people who matter.'],
];

export function ProcessFlow() {
  return <ol className="process">{steps.map(([step, text], i) => <li key={step}><span className="process-num">0{i + 1}</span><h3>{step}</h3><p>{text}</p></li>)}</ol>;
}

export function CTASection() {
  return <section className="cta">
    <LadderLines className="cta-motif" />
    <div className="wrap cta-inner">
      <Eyebrow>Let’s make something matter</Eyebrow>
      <h2>Your next story<br />starts <em>here.</em></h2>
      <div className="cta-bottom">
        <p>Bring us the challenge. We will help you turn it into something people can understand, remember and act on.</p>
        <Action variant="gold">Start a Conversation</Action>
      </div>
    </div>
  </section>;
}
