import type { Metadata } from 'next';
import { Eyebrow, Hero } from '@/components/site/primitives';
import { Newsletter } from '@/components/site/client';
import { categories } from '@/content/site';

export const metadata: Metadata = { title: 'Insights', description: 'Perspectives, stories, press releases and practical insights from the House of Ideas.' };

export default function Insights() {
  return <>
    <Hero eyebrow="Insights" index="Notes from the House" title={<>A little perspective <em>changes everything.</em></>} text="Stories, perspectives, press releases and practical thinking from the intersection of communication, creativity and impact." />
    <section className="section wrap insights">
      <div className="topics">
        <span className="eyebrow">Topics we will cover</span>
        <ul className="tag-list">{categories.map(c => <li key={c}>{c}</li>)}</ul>
      </div>
      <div className="insights-empty">
        <div className="ghost-cards" aria-hidden="true"><span /><span /><span /></div>
        <div className="insights-empty-copy">
          <Eyebrow>The next chapter is coming</Eyebrow>
          <h2>Ideas are <em>taking shape.</em></h2>
          <p>Check back soon for stories, perspectives and practical insights from the House of Ideas. Or have the first ones delivered.</p>
          <Newsletter className="light" />
        </div>
      </div>
    </section>
  </>;
}
