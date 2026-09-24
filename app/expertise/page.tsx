import type { Metadata } from 'next';
import Link from 'next/link';
import { Action, CTASection, Eyebrow, Hero } from '@/components/site/primitives';
import { Reveal } from '@/components/site/client';
import { services } from '@/content/site';

export const metadata: Metadata = { title: 'Our Expertise', description: 'Storytelling, strategic communications, development communications, advocacy, reputation, AI and training.' };

export default function Expertise() {
  return <>
    <Hero eyebrow="Our Expertise" index="07 disciplines" title={<>Strategy meets story. <em>Ideas become influence.</em></>} text="Seven connected disciplines. One purpose: helping your organization communicate with clarity, creativity and impact." />
    <div className="wrap index-layout">
      <aside className="index-nav" aria-label="Expertise sections">
        <span className="eyebrow">On this page</span>
        <ol>{services.map((s, i) => <li key={s.slug}><Link href={`#${s.slug}`}><span>0{i + 1}</span>{s.name}</Link></li>)}</ol>
      </aside>
      <div className="index-content">
        {services.map((s, i) => <section className={`detail-block ${i === 0 ? 'is-featured' : ''}`} id={s.slug} key={s.slug}>
          <Reveal>
            <Eyebrow index={`0${i + 1}`}>{i === 0 ? 'At the heart of what we do' : 'Our expertise'}</Eyebrow>
            <h2>{s.name}</h2>
            <p className="lead">{s.description}</p>
            <p>{s.help}</p>
            <div className="deliverables">
              <span className="deliverables-label">What we can bring to the table</span>
              <ul className="tag-list">{s.deliverables.map(d => <li key={d}>{d}</li>)}</ul>
            </div>
            <Action>Let’s talk about {i === 0 ? 'your story' : 'your challenge'}</Action>
          </Reveal>
        </section>)}
      </div>
    </div>
    <CTASection />
  </>;
}
