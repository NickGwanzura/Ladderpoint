import { Action, LadderLines } from '@/components/site/primitives';

export default function NotFound() {
  return <section className="page-hero not-found">
    <LadderLines className="page-hero-motif" />
    <div className="wrap page-hero-inner">
      <span className="eyebrow">404 / A different direction</span>
      <h1>This idea hasn’t <em>found its home.</em></h1>
      <p>The page you’re looking for isn’t here. Let’s take you back to the House.</p>
      <Action href="/" variant="gold">Back to the House</Action>
    </div>
  </section>;
}
