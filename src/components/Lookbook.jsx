import { useState } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { wigs } from '../data/wigs';

const looks = [
  { image: 'https://images.pexels.com/photos/9121363/pexels-photo-9121363.jpeg?auto=compress&cs=tinysrgb&w=1600', label: 'The Naomi', price: wigs[0].price, x: '58%', y: '52%' },
  { image: 'https://images.pexels.com/photos/16234990/pexels-photo-16234990.jpeg?auto=compress&cs=tinysrgb&w=1600', label: 'The Amara', price: wigs[1].price, x: '43%', y: '42%' },
  { image: 'https://images.pexels.com/photos/22690354/pexels-photo-22690354.jpeg?auto=compress&cs=tinysrgb&w=1600', label: 'The Sade', price: wigs[4].price, x: '63%', y: '58%' },
];

export default function Lookbook({ onAdd }) {
  const [active, setActive] = useState(null);
  return (
    <section className="lookbook section">
      <div className="section-heading"><p className="eyebrow">04 · The Lookbook</p><h2>Wear the <em>moment.</em></h2><p>Editorial looks, imagined for real life. Explore the details and discover the piece behind the look.</p></div>
      <div className="lookbook__grid">
        {looks.map((look, index) => (
          <article className={`look ${index === 1 ? 'look--featured' : ''}`} key={look.label} onMouseEnter={() => setActive(index)} onMouseLeave={() => setActive(null)}>
            <img src={look.image} alt={look.label} loading="lazy" />
            <div className="look__shade" />
            <button className="hotspot" style={{ left: look.x, top: look.y }} onClick={() => setActive(index)} aria-label={`View ${look.label}`}><Plus size={15} /></button>
            {active === index && <div className="look__card"><span>Featured piece</span><strong>{look.label}</strong><small>₦{look.price.toLocaleString()}</small><button onClick={onAdd}>Quick add <ArrowUpRight size={14} /></button></div>}
            <div className="look__caption"><span>0{index + 1}</span><b>{look.label}</b></div>
          </article>
        ))}
      </div>
    </section>
  );
}
