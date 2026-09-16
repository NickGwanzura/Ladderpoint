import type { Metadata } from 'next';
import { Hero } from '@/components/site/primitives';
import { InquiryForm } from '@/components/site/client';
import { site } from '@/content/site';
export const metadata:Metadata={title:'Start a Conversation',description:'Bring Ladder Point a challenge, a half-formed idea or a story that needs shaping.'};
export default function Contact(){return <><Hero eyebrow="START A CONVERSATION" title="Good things start with a conversation." text="Have a challenge, a half-formed idea or a story that needs shaping? Bring it to Ladder Point."/><section className="wrap contact-layout"><aside><span className="eyebrow">THE DOOR IS OPEN</span><h2>Tell us what<br/>you’re thinking.</h2><p>You don’t need a finished brief. A question, an ambition or a starting point is enough.</p><div className="contact-details"><span className="eyebrow">CONTACT</span>{site.email?<a href={`mailto:${site.email}`}>{site.email}</a>:<p>Email details coming soon.</p>}{site.phone?<a href={`tel:${site.phone.replace(/[^+\d]/g,'')}`}>{site.phone}</a>:<p>Phone details coming soon.</p>}</div></aside><InquiryForm/></section></>}
