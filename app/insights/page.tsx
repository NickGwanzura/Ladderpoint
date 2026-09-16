import type { Metadata } from 'next';
import { Hero } from '@/components/site/primitives';
import { categories } from '@/content/site';
export const metadata:Metadata={title:'Insights',description:'Perspectives, stories, press releases and practical insights from the House of Ideas.'};
export default function Insights(){return <><Hero eyebrow="NOTES FROM THE HOUSE" title="A little perspective changes everything." text="Stories, perspectives, press releases and practical thinking from the intersection of communication, creativity and impact."/><section className="wrap insights-section"><div className="category-list" aria-label="Upcoming topics">{categories.map(c=><span key={c}>{c}</span>)}</div><div className="insights-empty"><span className="eyebrow">THE NEXT CHAPTER IS COMING</span><h2>Ideas are<br/><em>taking shape.</em></h2><p>Check back soon for stories, perspectives and practical insights from the House of Ideas.</p><span className="empty-rule"/></div></section></>}
