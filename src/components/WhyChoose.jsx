import {
  Clock3,
  Truck,
  ShieldCheck,
  Sparkles,
  Headphones,
  RotateCcw,
} from 'lucide-react';

const benefits = [
  {
    icon: Clock3,
    title: '72-Hour Delivery',
    text: 'Fast dispatch on ready-to-wear units, with tracking from our atelier to your door.',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    text: 'Complimentary standard delivery on every LUXÉ order.',
  },
  {
    icon: ShieldCheck,
    title: '100% Human Hair',
    text: 'Premium hair selected for natural movement, softness and longevity.',
  },
  {
    icon: Sparkles,
    title: 'Atelier Finish',
    text: 'Each unit is checked, refined and prepared for a polished first wear.',
  },
  {
    icon: Headphones,
    title: 'Private Concierge',
    text: 'Get personal help with shade, texture, fit and care before you order.',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    text: 'A simple return window gives you confidence when choosing your next look.',
  },
];

export default function WhyChoose() {
  return (
    <section className="why-luxe" id="why-luxe">
      <div className="why-luxe-intro">
        <p className="eyebrow">Why choose LUXÉ</p>

        <h2>
          More than beautiful.
          <br />
          <em>Beautifully considered.</em>
        </h2>

        <p>
          From the first scroll to the moment you put
          her on, every part of the LUXÉ experience is
          designed around quality, confidence and
          convenience.
        </p>

        <a
          className="outline-btn"
          href="#contact"
        >
          Meet our concierge
        </a>
      </div>

      <div className="why-luxe-image">
        <img
          src="https://cdn.wigginshair.com/media/catalog/product/cache/6/image/600x/040ec09b1e35df139433887a97daa66f/2/1/2102.jpg"
          alt="Luxury Lagos hairline body wave wig on a Black model"
          loading="lazy"
        />
      </div>

      <div className="benefit-grid">
        {benefits.map(
          ({ icon: Icon, title, text }) => (
            <article key={title}>
              <span className="benefit-icon">
                <Icon size={20} />
              </span>

              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          )
        )}
      </div>
    </section>
  );
}
