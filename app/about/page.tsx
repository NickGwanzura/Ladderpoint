import type { Metadata } from 'next';
import Image from 'next/image';
import { CTASection, Eyebrow, Hero, LadderLines, SectionHeading } from '@/components/site/primitives';
import { Reveal } from '@/components/site/client';
import { leadershipTeam } from '@/content/site';

export const metadata: Metadata = {
  title: 'About the House',
  description: 'Meet Ladder Point, a networked strategic communications consultancy led by a multidisciplinary team.',
};

const values = [
  ['Clarity', 'Make the complex understandable. Give every message a purpose.'],
  ['Creativity', 'Find a fresh perspective. Make the story memorable.'],
  ['Humanity', 'Keep people, their experiences and their dignity at the center.'],
  ['Strategic thinking', 'Connect the message to the ambition. Know why the work matters.'],
  ['Impact', 'Create communication that people can understand, remember and act on.'],
];

const model = [
  ['Start with the challenge.', 'We listen to your context, clarify the ambition and understand the people you need to reach.'],
  ['Bring the right minds.', 'Our networked consultancy model brings together the disciplines your challenge calls for, with a shared strategic direction.'],
  ['Connect the whole story.', 'From initial insight to creative execution and engagement, we keep the work connected to its purpose.'],
];

export default function About() {
  return <>
    <Hero eyebrow="About Ladder Point" index="The House of Ideas" title={<>A house for ideas. <em>A ladder to what’s next.</em></>} text="We help organizations move from ideas to impact, and from impact to influence. Because important work deserves to be understood." />

    <section className="section wrap about-story">
      <Reveal className="about-media">
        <figure className="photo-frame"><Image src="/images/doreen-office.png" alt="Doreen Hove working at her desk with Ladder Point branding" fill sizes="(max-width: 900px) 100vw, 50vw" /></figure>
      </Reveal>
      <Reveal className="about-copy" delay={.1}>
        <Eyebrow index="01">The House of Ideas</Eyebrow>
        <h2>Different perspectives. <em>Shared purpose.</em></h2>
        <p className="lead">Ladder Point brings strategy, storytelling, creativity, technology and engagement into one connected practice. It is a house where complex ideas can take shape and find their way into the world.</p>
        <p>We believe communication is infrastructure. It connects people to purpose, gives organizational goals a clear voice and makes development work and social causes visible.</p>
      </Reveal>
    </section>

    <section className="section dark-band">
      <LadderLines className="band-motif" />
      <div className="wrap">
        <SectionHeading index="02" eyebrow="Our working model" title="One challenge. The right team. Strategy through execution." />
        <ol className="model-steps">{model.map(([title, text], i) => <li key={title}><span className="card-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
      </div>
    </section>

    <section id="leadership" className="section wrap leadership-grid">
      <Reveal className="leadership-media">
        <figure className="photo-frame portrait"><Image src="/images/doreen-portrait.png" alt="Doreen Hove smiling in a navy floral top" fill sizes="(max-width: 900px) 100vw, 45vw" /></figure>
        <span className="photo-badge"><strong>$300M+</strong> portfolio communications leadership</span>
      </Reveal>
      <Reveal className="leadership-copy" delay={.1}>
        <Eyebrow index="03">Our leadership</Eyebrow>
        <h2>Doreen Hove</h2>
        <span className="role">Co-Founder &amp; Lead Consultant</span>
        <p>Doreen brings more than 18 years of experience in communications. Her experience includes communications leadership for a development portfolio exceeding $300 million annually and integrated campaigns reaching more than one million people.</p>
        <p>Her digital communications experience includes growing a Facebook community from approximately 2,000 to more than 100,000 followers and more than two million annual impressions.</p>
        <p>Her work also includes communications and technical oversight for the award-winning feature film <em>Shaina</em>, with support extending into Zambia through radio engagement, strategic storytelling and communications training.</p>
      </Reveal>
    </section>

    <section className="section surface">
      <div className="wrap">
        <SectionHeading index="04" eyebrow="The team" title="Different disciplines. One connected practice." />
        <div className="team-grid">
          {leadershipTeam.map((member, i) => <Reveal key={member.slug} delay={i * .06}><article className="team-card" id={member.slug}>
            <div className={`team-photo ${member.image ? '' : 'is-monogram'}`}>{member.image ? <Image src={member.image} alt={`${member.name}, ${member.role}`} fill sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 30vw" /> : <span>{member.monogram}</span>}</div>
            <div className="team-body">
              <h3>{member.name}</h3>
              <p className="team-role">{member.role.replace(/^Co-Founder \| /, '')}</p>
              <p>{member.paragraphs[0]}</p>
              {member.paragraphs.length > 1 && <details className="team-more">
                <summary>Read full profile</summary>
                {member.paragraphs.slice(1).map(p => <p key={p}>{p}</p>)}
              </details>}
            </div>
          </article></Reveal>)}
        </div>
      </div>
    </section>

    <section className="section wrap">
      <SectionHeading index="05" eyebrow="What guides us" title="The principles behind the practice." />
      <ol className="values">{values.map(([title, text], i) => <li key={title}><span className="card-number">0{i + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
    </section>
    <CTASection />
  </>;
}
