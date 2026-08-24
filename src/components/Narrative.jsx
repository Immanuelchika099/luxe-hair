import { ArrowUpRight } from 'lucide-react';

export default function Narrative() {
  return <section className="narrative" id="narrative">
    <div className="narrative__image narrative__image--large"><img src="https://images.pexels.com/photos/6923259/pexels-photo-6923259.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="LUXÉ wig displayed in the atelier" loading="lazy" /></div>
    <div className="narrative__content">
      <p className="eyebrow">02 · Our Narrative</p>
      <h2>Beyond the wig.<br /><em>Into the craft.</em></h2>
      <p>At LUXÉ, hair is more than an accessory. It is architecture, expression and ritual. We curate couture-grade human hair and shape every piece with an obsessive eye for movement, realism and fit.</p>
      <a className="text-link" href="#atelier">Discover our story <ArrowUpRight size={15} /></a>
    </div>
    <div className="narrative__image narrative__image--small"><img src="https://images.pexels.com/photos/6923242/pexels-photo-6923242.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Wig craftsmanship at the atelier" loading="lazy" /></div>
  </section>;
}
