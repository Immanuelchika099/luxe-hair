import { useState } from 'react';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

const steps = [
  { label: 'Texture', options: ['Raw Virgin', 'HD Lace', 'Silk Top'] },
  { label: 'Shade', options: ['Natural Black', 'Espresso', 'Mocha Melt'] },
  { label: 'Length', options: ['20–22 inch', '24–26 inch', '28–30 inch'] },
];

export default function Atelier() {
  const [active, setActive] = useState({ Texture: 'Raw Virgin', Shade: 'Natural Black', Length: '24–26 inch' });
  return <section className="atelier section-dark" id="atelier">
    <div className="atelier__visual"><img src="https://images.pexels.com/photos/6923259/pexels-photo-6923259.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Luxury wig displayed at the LUXÉ atelier" loading="lazy" /><div className="atelier__visual-label">THE VIRTUAL ATELIER · 03</div></div>
    <div className="atelier__panel">
      <p className="eyebrow">03 · The Virtual Atelier</p>
      <h2>Your perfect<br /><em>match.</em></h2>
      <p>Start with a few details and our concierge will curate the closest silhouettes for your face, lifestyle and desired finish.</p>
      <div className="selector">{steps.map((step) => <div className="selector__group" key={step.label}><span>{step.label}</span><div className="selector__options">{step.options.map((option) => <button key={option} className={active[step.label] === option ? 'selected' : ''} onClick={() => setActive({ ...active, [step.label]: option })}>{active[step.label] === option && <Check size={13} />}{option}</button>)}</div></div>)}</div>
      <a className="button button--cream" href="#contact">Get my curated match <ArrowRight size={17} /></a>
      <div className="atelier-note"><Sparkles size={15} /><span>Personalized guidance · No pressure · 15 min consultation</span></div>
    </div>
  </section>;
}
