import type { Metadata } from 'next';
import { Mail, Phone } from 'lucide-react';
import { Eyebrow, Hero } from '@/components/site/primitives';
import { InquiryForm } from '@/components/site/client';
import { site } from '@/content/site';

export const metadata: Metadata = { title: 'Start a Conversation', description: 'Bring Ladder Point a challenge, a half-formed idea or a story that needs shaping.' };

export default function Contact() {
  return <>
    <Hero eyebrow="Contact" index="Start a conversation" title={<>Good things start with <em>a conversation.</em></>} text="Have a challenge, a half-formed idea or a story that needs shaping? Bring it to Ladder Point." />
    <section className="section wrap contact-layout">
      <aside className="contact-aside">
        <Eyebrow>The door is open</Eyebrow>
        <h2>Tell us what you’re thinking.</h2>
        <p>You don’t need a finished brief. A question, an ambition or a starting point is enough.</p>
        <div className="contact-details">
          <span className="deliverables-label">Contact</span>
          {site.email ? <a href={`mailto:${site.email}`}><Mail size={16} />{site.email}</a> : <p><Mail size={16} />Email details coming soon.</p>}
          {site.phone ? <a href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}><Phone size={16} />{site.phone}</a> : <p><Phone size={16} />Phone details coming soon.</p>}
        </div>
      </aside>
      <InquiryForm />
    </section>
  </>;
}
