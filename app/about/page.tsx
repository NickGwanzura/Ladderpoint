import type { Metadata } from 'next';
import Image from 'next/image';
import { CTASection, Hero, Ladder, SectionHeading } from '@/components/site/primitives';
import { leadershipTeam } from '@/content/site';

export const metadata: Metadata = {
  title: 'About the House',
  description: 'Meet Ladder Point, a networked strategic communications consultancy led by a multidisciplinary team.',
};

export default function About() {
  return <>
    <Hero eyebrow="ABOUT LADDER POINT" title="A house for ideas. A ladder to what’s next." text="We help organizations move from ideas to impact, and from impact to influence. Because important work deserves to be understood." />
    <section className="section wrap about-story">
      <div className="about-motif"><Ladder large /></div>
      <div>
        <span className="eyebrow">THE HOUSE OF IDEAS</span>
        <h2>Different perspectives.<br /><em>Shared purpose.</em></h2>
        <p>Ladder Point brings strategy, storytelling, creativity, technology and engagement into one connected practice. It is a house where complex ideas can take shape and find their way into the world.</p>
        <p>We believe communication is infrastructure. It connects people to purpose, gives organizational goals a clear voice and makes development work and social causes visible.</p>
      </div>
    </section>
    <section className="section ink">
      <div className="wrap">
        <SectionHeading eyebrow="OUR WORKING MODEL" title="One challenge. The right team. Strategy through execution." />
        <div className="three-columns">
          <div><h3>Start with the challenge.</h3><p>We listen to your context, clarify the ambition and understand the people you need to reach.</p></div>
          <div><h3>Bring the right minds.</h3><p>Our networked consultancy model brings together the disciplines your challenge calls for, with a shared strategic direction.</p></div>
          <div><h3>Connect the whole story.</h3><p>From initial insight to creative execution and engagement, we keep the work connected to its purpose.</p></div>
        </div>
      </div>
    </section>
    <section id="leadership" className="section wrap leadership-grid">
      <figure className="portrait-placeholder portrait-photo">
        <Image src="/images/doreen-portrait.png" alt="Doreen Hove smiling in a navy floral top" fill sizes="(max-width: 900px) 100vw, 48vw" priority />
        <figcaption className="eyebrow">CLARITY. CREATIVITY. HUMANITY.</figcaption>
      </figure>
      <div>
        <span className="eyebrow">OUR LEADERSHIP</span>
        <h2>Doreen Hove</h2>
        <h3>Co-Founder &amp; Lead Consultant</h3>
        <p>Doreen brings more than 18 years of experience in communications. Her experience includes communications leadership for a development portfolio exceeding $300 million annually and integrated campaigns reaching more than one million people.</p>
        <p>Her digital communications experience includes growing a Facebook community from approximately 2,000 to more than 100,000 followers and more than two million annual impressions.</p>
        <p>Her work also includes communications and technical oversight for the award-winning feature film <em>Shaina</em>, with support extending into Zambia through radio engagement, strategic storytelling and communications training.</p>
      </div>
    </section>
    <section className="team-image-band wrap" aria-label="Doreen at work">
      <Image src="/images/doreen-office.png" alt="Doreen Hove working at her desk with Ladder Point branding" width={1355} height={1160} sizes="(max-width: 900px) 100vw, 68vw" />
      <div><span className="eyebrow">THE WORK IN MOTION</span><p>Ideas become useful when they move from the page into the world.</p></div>
    </section>
    <section className="section team-section">
      <div className="wrap">
        <SectionHeading eyebrow="THE TEAM" title="Different disciplines. One connected practice." />
        <div className="team-grid">
          {leadershipTeam.map((member, index) => <article className="team-card" id={member.slug} key={member.slug}>
            <div className="team-card-top"><div className={member.image ? 'team-photo has-image' : 'team-photo'}>{member.image ? <Image src={member.image} alt={`${member.name}, ${member.role}`} width={718} height={1280} className="team-photo-image" /> : <span className="team-monogram">{member.monogram}</span>}</div><span className="eyebrow">0{index + 1} / LADDER POINT</span></div>
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <div className="team-bio">{member.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          </article>)}
        </div>
      </div>
    </section>
    <section className="section values">
      <div className="wrap">
        <SectionHeading eyebrow="WHAT GUIDES US" title="The principles behind the practice." />
        {[['Clarity', 'Make the complex understandable. Give every message a purpose.'], ['Creativity', 'Find a fresh perspective. Make the story memorable.'], ['Humanity', 'Keep people, their experiences and their dignity at the center.'], ['Strategic thinking', 'Connect the message to the ambition. Know why the work matters.'], ['Impact', 'Create communication that people can understand, remember and act on.']].map(([title, description], index) => <div className="value-row" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></div>)}
      </div>
    </section>
    <CTASection />
  </>;
}
