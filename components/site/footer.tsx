import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/content/site';
import { Newsletter } from './client';

export function Footer() {
  return <footer className="footer">
    <div className="wrap">
      <div className="footer-top">
        <div className="footer-brand">
          <Link href="/" className="brand" aria-label="Ladder Point home"><Image className="footer-logo" src="/logo-white.svg" alt="Ladder Point — The House of Ideas" width={240} height={240} /></Link>
          <p>From Ideas to Impact.<br />From Impact to Influence.</p>
        </div>
        <div className="footer-col">
          <span className="footer-label">Explore</span>
          {['Expertise', 'Experience', 'Packages', 'About', 'Insights', 'Contact'].map(l => <Link key={l} href={`/${l.toLowerCase()}`}>{l}<ArrowUpRight size={12} aria-hidden="true" /></Link>)}
        </div>
        <div className="footer-col">
          <span className="footer-label">What we do</span>
          {services.map(s => <Link key={s.slug} href={`/expertise#${s.slug}`}>{s.name}<ArrowUpRight size={12} aria-hidden="true" /></Link>)}
        </div>
        <Newsletter />
      </div>
      <p className="footer-wordmark" aria-hidden="true">The House of <em>Ideas</em></p>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ladder Point. All rights reserved.</span>
        <span>Ideas with purpose. Stories with impact.</span>
        <span>Social channels coming soon</span>
      </div>
    </div>
  </footer>;
}
