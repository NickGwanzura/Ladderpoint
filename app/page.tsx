import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Action, CTASection, Eyebrow, LadderLines, PackageRow, ProcessFlow, SectionHeading, ServiceCard, StatBlock } from '@/components/site/primitives';
import { FadeIn, HeroWords, Reveal } from '@/components/site/client';
import { leadershipTeam, packages, services, stats } from '@/content/site';

const disciplines = ['Storytelling', 'Strategic Communications', 'Development Communications', 'Stakeholder Engagement', 'Reputation & Crisis', 'AI & Innovation', 'Training'];
const heroProof = stats.slice(0, 3);

export default function Home() {
  return <>
    <section className="hero">
      <LadderLines className="hero-motif" />
      <div className="wrap hero-layout">
        <div className="hero-copy">
          <FadeIn><span className="hero-kicker"><span className="pulse" aria-hidden="true" />A boutique strategic communications &amp; creative agency</span></FadeIn>
          <HeroWords />
          <FadeIn delay={.45}><p className="hero-tagline">From Ideas to Impact.<br />From Impact to Influence.</p></FadeIn>
          <FadeIn delay={.55}><p className="hero-body">Every organization has a story. Most do not know how to tell it. <strong>We do.</strong></p></FadeIn>
          <FadeIn delay={.65} className="hero-actions">
            <Action variant="gold">Bring Us a Challenge</Action>
            <Link className="hero-secondary" href="/expertise">Explore our expertise <ArrowUpRight size={16} /></Link>
          </FadeIn>
        </div>
        <FadeIn delay={.3} className="hero-visual">
          <figure className="hero-frame">
            <Image src="/images/ladder-point-hero.png" alt="Story materials, photographs and notes laid out on a desk at dusk" fill priority sizes="(max-width: 900px) 100vw, 44vw" />
          </figure>
          <div className="hero-note">
            <span className="hero-note-label">A different perspective</span>
            <p>changes everything.</p>
            <span className="hero-note-path">Idea <i>→</i> Impact <i>→</i> Influence</span>
          </div>
        </FadeIn>
      </div>
      <div className="wrap hero-proof">
        <dl>{heroProof.map(s => <div key={s.value}><dt>{s.label}</dt><dd>{s.value}</dd></div>)}</dl>
        <a className="hero-scroll" href="#intro">Step inside <ArrowDown size={15} /></a>
      </div>
      <div className="ticker" aria-hidden="true"><div className="ticker-track">{[...disciplines, ...disciplines].map((d, i) => <span key={i}>{d}<i>✦</i></span>)}</div></div>
    </section>

    <section id="intro" className="section wrap intro">
      <Reveal className="intro-head"><Eyebrow index="01">The way we think</Eyebrow><h2>Communication isn’t an afterthought. <em>It’s infrastructure.</em></h2></Reveal>
      <Reveal className="intro-copy" delay={.1}>
        <h3>Unlocking your potential through communication</h3>
        <p>We turn complex ideas, development work and organizational ambitions into narratives that people understand, remember and act on.</p>
        <ul className="pillars">{['Strategy', 'Storytelling', 'Creativity', 'Technology', 'Engagement'].map(p => <li key={p}>{p}</li>)}</ul>
        <p>Connected, so every story works harder.</p>
        <Link className="text-link" href="/about">Step into the House of Ideas <ArrowUpRight size={16} /></Link>
      </Reveal>
    </section>

    <section className="section surface">
      <div className="wrap">
        <div className="section-top">
          <SectionHeading index="02" eyebrow="Our expertise" title="Many disciplines. One clear purpose.">The right thinking. The right craft. The right connection.</SectionHeading>
          <Link href="/expertise" className="text-link">All expertise <ArrowUpRight size={16} /></Link>
        </div>
        <div className="services-grid">
          {services.map((s, i) => <Reveal key={s.slug} className={i === 0 ? 'span-2' : ''} delay={(i % 3) * .06}><ServiceCard service={s} index={i} featured={i === 0} /></Reveal>)}
          <Reveal delay={.12}><Link className="service-card is-cta" href="/contact"><span className="card-number">?</span><h3>Not sure where to start?</h3><p>Bring us the challenge. We will bring the right disciplines to it.</p><span className="card-link">Start a conversation <ArrowUpRight size={16} /></span></Link></Reveal>
        </div>
      </div>
    </section>

    <section className="manifesto">
      <div className="wrap">
        <Eyebrow>Great work begins with a question</Eyebrow>
        <Reveal><h2>Bring us a challenge. <span>Bring us a half-formed idea.</span> Bring us the story you have not figured out how to tell yet.</h2></Reveal>
        <div className="manifesto-bottom">
          <p>Give us a blank canvas. <em>We will make it unforgettable.</em></p>
          <Link className="circle-link" aria-label="Bring us your challenge" href="/contact"><ArrowUpRight size={28} /></Link>
        </div>
      </div>
    </section>

    <section className="section wrap">
      <div className="section-top">
        <SectionHeading index="03" eyebrow="Experience that counts" title="Thinking big. Making it matter." />
        <Link href="/experience" className="text-link">Explore our experience <ArrowUpRight size={16} /></Link>
      </div>
      <div className="stats-grid">{stats.map((s, i) => <Reveal key={s.value} delay={(i % 3) * .06}><StatBlock stat={s} /></Reveal>)}</div>
      <p className="section-note">Experience brought to Ladder Point by its leadership.</p>
    </section>

    <section className="section surface">
      <div className="wrap">
        <SectionHeading index="04" eyebrow="The Ladder Point model" title="A clear path from idea to impact." />
        <ProcessFlow />
      </div>
    </section>

    <section className="section wrap packages-preview">
      <div className="packages-preview-head">
        <SectionHeading index="05" eyebrow="Ways to work together" title="Built around your ambition.">Five focused starting points. Each one brings strategy and execution together, with room to adapt to your context.</SectionHeading>
        <Action href="/packages">Explore all packages</Action>
      </div>
      <div className="package-list">{packages.map((p, i) => <PackageRow key={p.name} item={p} index={i} />)}</div>
    </section>

    <section className="section leadership">
      <div className="wrap leadership-grid">
        <Reveal className="leadership-media">
          <figure className="photo-frame portrait"><Image src="/images/doreen-portrait.png" alt="Doreen Hove, Co-Founder and Lead Consultant at Ladder Point" fill sizes="(max-width: 900px) 100vw, 45vw" /></figure>
          <span className="photo-badge"><strong>18+</strong> years in communications</span>
        </Reveal>
        <Reveal className="leadership-copy" delay={.1}>
          <Eyebrow index="06">Meet the thinking behind the work</Eyebrow>
          <h2>Strategy with depth. <em>Stories with soul.</em></h2>
          <div className="person"><h3>Doreen Hove</h3><span className="role">Co-Founder &amp; Lead Consultant</span></div>
          <p>Doreen brings more than 18 years of experience to the intersection of strategic communications, storytelling and development. Her experience includes communications leadership for a development portfolio exceeding $300 million annually.</p>
          <div className="team-strip">
            <ul className="avatars">{leadershipTeam.map(m => <li key={m.slug} title={m.name}>{m.image ? <Image src={m.image} alt="" width={96} height={96} /> : <span>{m.monogram}</span>}</li>)}</ul>
            <span>Alongside co-founders {leadershipTeam.map(m => m.name).join(', ').replace(/, ([^,]*)$/, ' and $1')}.</span>
          </div>
          <Link className="text-link" href="/about#leadership">Meet our leadership <ArrowUpRight size={16} /></Link>
        </Reveal>
      </div>
    </section>
    <CTASection />
  </>;
}
