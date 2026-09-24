'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Menu, X, Check } from 'lucide-react';

const links = ['Expertise', 'Experience', 'Packages', 'About', 'Insights', 'Contact'];
const ease = [.16, 1, .3, 1] as const;

export function Navigation() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 40); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f); }, []);
  useEffect(() => {
    if (!open) return;
    const f = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } };
    document.addEventListener('keydown', f);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', f); document.body.style.overflow = ''; };
  }, [open]);
  const solid = scrolled && !open;
  return <header className={`nav ${solid ? 'is-solid' : ''} ${open ? 'is-open' : ''}`}>
    <div className="nav-inner">
      <Link href="/" className="brand" aria-label="Ladder Point home" onClick={() => setOpen(false)}>
        <Image className="brand-logo logo-light" src="/logo-white.svg" alt="" width={152} height={152} priority />
        <Image className="brand-logo logo-dark" src="/logo-color.svg" alt="" width={152} height={152} priority />
      </Link>
      <nav aria-label="Main navigation" id="main-navigation" className="nav-links">
        {links.map((l, i) => <Link key={l} onClick={() => setOpen(false)} aria-current={path === `/${l.toLowerCase()}` ? 'page' : undefined} href={`/${l.toLowerCase()}`}><span className="nav-link-index" aria-hidden="true">0{i + 1}</span>{l}</Link>)}
      </nav>
      <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Start a Conversation <ArrowUpRight size={15} /></Link>
      <button id="menu-toggle" className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
}

export function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16, margin: '0px 0px -8%' }} transition={reduced ? { duration: 0 } : { duration: .8, delay, ease }}>{children}</motion.div>;
}

export function HeroWords() {
  const reduced = useReducedMotion();
  return <h1 className="hero-title">{['The House', 'of Ideas'].map((t, i) => <span className="hero-line" key={t}><motion.span initial={reduced ? false : { y: '105%' }} animate={{ y: 0 }} transition={reduced ? { duration: 0 } : { duration: 1.05, delay: .15 + i * .14, ease }}>{i === 1 ? <>of <em>Ideas</em></> : t}</motion.span></span>)}</h1>;
}

export function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={reduced ? { duration: 0 } : { duration: .9, delay, ease }}>{children}</motion.div>;
}

export function Newsletter({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState(''); const [busy, setBusy] = useState(false);
  return <form className={`newsletter ${className}`} onSubmit={async e => { e.preventDefault(); setBusy(true); setStatus(''); const form = e.currentTarget; try { const res = await fetch('/api/newsletter', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: new FormData(form).get('email') }) }); const data = await res.json(); setStatus(data.message); if (res.ok) form.reset(); } catch { setStatus('Unable to connect. Please try again.'); } finally { setBusy(false); } }}>
    <label htmlFor={`newsletter-email${className ? '-' + className : ''}`}>A little perspective, in your inbox.</label>
    <div className="newsletter-field"><input id={`newsletter-email${className ? '-' + className : ''}`} type="email" name="email" autoComplete="email" placeholder="Your email address" required maxLength={254} /><button aria-label="Subscribe to newsletter" disabled={busy}>{busy ? '…' : <ArrowRight size={18} />}</button></div>
    <p className="form-status" role="status">{status}</p>
  </form>;
}

const options = ['Strategic Communications', 'Storytelling', 'Development Communications', 'Stakeholder Engagement', 'Reputation and Crisis Communications', 'AI and Innovation', 'Training', 'Ongoing Communications Support', 'Something else'];
export function InquiryForm() {
  const [errors, setErrors] = useState<Record<string, string>>({}); const [status, setStatus] = useState(''); const [busy, setBusy] = useState(false); const [success, setSuccess] = useState(false);
  async function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); const form = e.currentTarget; const data = Object.fromEntries(new FormData(form)); const next: Record<string, string> = {}; for (const key of ['name', 'email', 'service', 'challenge']) if (!String(data[key] || '').trim()) next[key] = 'Please complete this field.'; if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email))) next.email = 'Enter a valid email address.'; setErrors(next); if (Object.keys(next).length) { (form.elements.namedItem(Object.keys(next)[0]) as HTMLElement)?.focus(); return; } setBusy(true); setStatus(''); try { const res = await fetch('/api/inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) }); const result = await res.json(); if (res.ok) { setSuccess(true); form.reset(); } else setStatus(result.message); } catch { setStatus('We could not connect. Please try again.'); } finally { setBusy(false); } }
  if (success) return <div className="form-card form-success" role="status"><span className="success-icon"><Check size={28} /></span><h2>Your next story is underway.</h2><p>Thank you for bringing us your challenge. Your inquiry has been received.</p><button className="button button-primary" onClick={() => setSuccess(false)}><span>Send another inquiry</span><span className="button-icon"><ArrowUpRight size={16} /></span></button></div>;
  const field = (name: string, label: string, type = 'text', required = false) => <div className="field"><label htmlFor={name}>{label}{required ? ' *' : ''}</label><input id={name} name={name} type={type} required={required} maxLength={name === 'email' ? 254 : 200} autoComplete={name === 'name' ? 'name' : name === 'email' ? 'email' : name === 'phone' ? 'tel' : name === 'organization' ? 'organization' : 'off'} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} />{errors[name] && <p className="error" id={`${name}-error`}>{errors[name]}</p>}</div>;
  return <form className="form-card inquiry-form" noValidate onSubmit={submit}>
    <div className="form-card-head"><h2>Tell us about the work.</h2><p className="required-note">Fields marked * are required.</p></div>
    <div className="form-grid">
      {field('name', 'Name', 'text', true)}{field('organization', 'Organization')}{field('email', 'Email', 'email', true)}{field('phone', 'Phone', 'tel')}
      <div className="field full"><label htmlFor="service">What do you need help with? *</label><select id="service" name="service" required aria-invalid={!!errors.service} aria-describedby={errors.service ? 'service-error' : undefined}><option value="">Select a service</option>{options.map(o => <option key={o}>{o}</option>)}</select>{errors.service && <p className="error" id="service-error">{errors.service}</p>}</div>
      <div className="field full"><label htmlFor="challenge">Tell us about the challenge *</label><textarea id="challenge" name="challenge" rows={5} required maxLength={10000} placeholder="The context. The ambition. The thing you’re trying to change." aria-invalid={!!errors.challenge} aria-describedby={errors.challenge ? 'challenge-error' : undefined} />{errors.challenge && <p className="error" id="challenge-error">{errors.challenge}</p>}</div>
      <div className="field"><label htmlFor="timeline">Preferred timeline</label><select id="timeline" name="timeline"><option value="">Select a timeline</option>{['As soon as possible', 'Within a month', '1–3 months', '3–6 months', 'Just exploring'].map(t => <option key={t}>{t}</option>)}</select></div>
      <div className="field"><label htmlFor="budget">Budget range</label><input id="budget" name="budget" maxLength={200} placeholder="Range and currency, or let’s discuss" /></div>
      <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    </div>
    <div className="form-foot"><p className="privacy-note">Your details will be used to respond to this inquiry.</p><button disabled={busy} className="button button-primary"><span>{busy ? 'Sending your inquiry…' : 'Bring Us Your Challenge'}</span><span className="button-icon"><ArrowUpRight size={16} /></span></button></div>
    <p role="alert" className="error">{status}</p>
  </form>;
}
