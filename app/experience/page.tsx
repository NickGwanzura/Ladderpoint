import type { Metadata } from 'next';
import { CTASection, Eyebrow, Hero, LadderLines } from '@/components/site/primitives';
import { Reveal } from '@/components/site/client';
import { stats } from '@/content/site';

export const metadata: Metadata = { title: 'Experience', description: 'Communications leadership across development, integrated campaigns, digital communities and film.' };

export default function Experience() {
  return <>
    <Hero eyebrow="Our Experience" index="18+ years" title={<>The work behind <em>the perspective.</em></>} text="Experience earned across development, campaigns, communities and creative production. The thinking we bring to your next challenge." />
    <section className="section wrap">
      <p className="experience-intro">These achievements reflect the experience of Ladder Point’s leadership, brought into every new collaboration.</p>
      <div className="experience-list">
        {stats.slice(0, 4).map((s, i) => <Reveal key={s.value}><article className="experience-item">
          <span className="card-number">0{i + 1}</span>
          <div className="experience-number">{s.value}</div>
          <div className="experience-text"><h2>{s.label}</h2><p>{s.detail}</p></div>
        </article></Reveal>)}
      </div>
    </section>
    <section className="section-tight wrap">
      <Reveal><article className="film-feature">
        <LadderLines className="film-motif" />
        <div><Eyebrow index="05">Storytelling on screen</Eyebrow><div className="film-title"><em>Shaina</em><span>A feature film</span></div></div>
        <div className="film-copy"><h2>A story with a life beyond the screen.</h2><p>Communications and technical oversight for the award-winning feature film <em>Shaina</em>.</p></div>
      </article></Reveal>
    </section>
    <section className="section wrap">
      <Reveal><article className="borders-feature">
        <Eyebrow index="06">Across borders</Eyebrow>
        <div className="borders-grid">
          <h2>Beyond <em>borders.</em></h2>
          <div><h3>Connection travels.</h3><p>Support extending into Zambia through radio engagement, strategic storytelling and communications training.</p>
            <ul className="tag-list">{['Radio engagement', 'Strategic storytelling', 'Communications training'].map(t => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
      </article></Reveal>
    </section>
    <CTASection />
  </>;
}
