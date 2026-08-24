import { motion } from 'framer-motion';
import { ArrowRight, Heart, Plus } from 'lucide-react';
import { wigs } from '../data/wigs';

const money = (n) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);

export default function Recommended({ onAdd }) {
  const picks = wigs.slice(8, 18);
  const marqueePicks = [...picks, ...picks];

  return (
    <section
      className="recommend-section"
      id="recommended"
    >
      <div className="luxe-section-head">
        <div>
          <p className="eyebrow">Curated for you</p>
          <h2>
            Recommend <em>for You</em>
          </h2>
        </div>

        <a
          className="text-link"
          href="#collection"
        >
          Explore all wigs
          <ArrowRight size={15} />
        </a>
      </div>

      <div className="recommend-marquee">
        <div className="recommend-marquee-track">
          {marqueePicks.map((wig, index) => (
            <motion.article
              className="recommend-card"
              key={`${wig.id}-${index}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: Math.min(index, 10) * 0.025,
              }}
            >
              <a
                href={`#/wig/${wig.id}`}
                className="recommend-media"
              >
                <img
                  src={wig.image}
                  alt={wig.name}
                  loading="lazy"
                />

                <span>
                  {wig.badge || 'Curated'}
                </span>

                <button
                  onClick={(e) => e.preventDefault()}
                  aria-label="Wishlist"
                >
                  <Heart size={16} />
                </button>
              </a>
              
              <div className="recommend-copy">
                <div>
                  <p>
                    {wig.type} · {wig.length}
                  </p>
                  <h3>{wig.name}</h3>
                  <span>{wig.shade}</span>
                </div>

                <strong>
                  {money(wig.price)}
                </strong>
              </div>

              <button
                className="recommend-add"
                onClick={() => onAdd(wig)}
              >
                Add
                <Plus size={14} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="center-action">
        <a
          className="outline-btn"
          href="#collection"
        >
          View more wigs
          <ArrowRight size={15} />
        </a>
      </div>
    </section>
  );
}
