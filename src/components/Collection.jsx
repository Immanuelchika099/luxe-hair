import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Plus, ChevronRight } from 'lucide-react';
import { wigs } from '../data/wigs';

const money = (n) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);

function WigCard({ wig, index, onAdd }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.article
      className="luxe-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: (index % 4) * 0.04 }}
    >
      <a
        className="luxe-card-media"
        href={`#/wig/${wig.id}`}
      >
        <img
          src={wig.image}
          alt={wig.name}
          loading="lazy"
        />

        <span>{wig.badge || 'Couture unit'}</span>

        <button
          className="luxe-heart"
          onClick={(e) => {
            e.preventDefault();
            setLiked(!liked);
          }}
          aria-label="Wishlist"
        >
          <Heart
            size={17}
            fill={liked ? 'currentColor' : 'none'}
          />
        </button>

        <div className="luxe-quick">
          View wig
          <ChevronRight size={15} />
        </div>
      </a>

      <div className="luxe-card-info">
        <div>
          <p>
            {wig.type} · {wig.length}
          </p>
          <h3>{wig.name}</h3>
          <span>{wig.shade}</span>
        </div>

        <strong>{money(wig.price)}</strong>
      </div>

      <button
        className="luxe-add"
        onClick={() => onAdd(wig)}
      >
        Add to bag
        <Plus size={15} />
      </button>
    </motion.article>
  );
}

export default function Collection({ onAdd, search = '' }) {
  const [filter, setFilter] = useState('All');
  const [expanded, setExpanded] = useState(false);

  const filters = [
    'All',
    'Raw Virgin',
    'HD Lace',
    'Silk Top',
  ];

  const query = search.trim().toLowerCase();

  const matches = useMemo(
    () =>
      wigs.filter((wig) => {
        const matchesFilter =
          filter === 'All' || wig.type === filter;

        const haystack = [
          wig.name,
          wig.type,
          wig.texture,
          wig.length,
          wig.shade,
          wig.badge,
          wig.description,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();

        return (
          matchesFilter &&
          (!query || haystack.includes(query))
        );
      }),
    [filter, query]
  );

  const items =
    query || expanded
      ? matches
      : matches.slice(0, 8);

  return (
    <section
      className="luxe-collection"
      id="collection"
    >
      <div className="luxe-section-head">
        <div>
          <p className="eyebrow">The Collection</p>
          <h2>
            Signature <em>Wigs</em>
          </h2>
        </div>

        <p>
          Our couture-inspired units, selected for
          natural movement, immaculate lace and
          effortless wear.
        </p>
      </div>

      <div className="luxe-filters">
        {filters.map((item) => (
          <button
            className={
              filter === item ? 'active' : ''
            }
            onClick={() => {
              setFilter(item);
              setExpanded(false);
            }}
            key={item}
          >
            {item}
          </button>
        ))}

        {query && (
          <span className="search-result">
            {matches.length} result
            {matches.length === 1 ? '' : 's'} for
            “{search}”
          </span>
        )}
      </div>

      {items.length ? (
        <div className="luxe-grid">
          {items.map((wig, index) => (
            <WigCard
              key={wig.id}
              wig={wig}
              index={index}
              onAdd={onAdd}
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <div className="no-results-mark">⌕</div>
          <h3>Not available</h3>
          <p>
            We couldn't find a wig matching
            “{search}”. Try another name, texture,
            shade or length.
          </p>
        </div>
      )}

      {!query && !expanded && matches.length > 8 && (
        <div className="center-action">
          <button
            className="outline-btn"
            onClick={() => setExpanded(true)}
          >
            View more wigs
            <ChevronRight size={15} />
          </button>
        </div>
      )}

      {!query && expanded && (
        <div className="center-action">
          <a
            className="outline-btn"
            href="#recommended"
          >
            Continue exploring
            <ChevronRight size={15} />
          </a>
        </div>
      )}
    </section>
  );
}
