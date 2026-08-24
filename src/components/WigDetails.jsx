import { useState } from 'react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Plus,
  ShoppingBag,
} from 'lucide-react';
import { wigs } from '../data/wigs';

const money = (n) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(n);

export default function WigDetails({
  wig,
  onBack,
  onAdd,
}) {
  const related = wigs
    .filter(
      (item) =>
        item.id !== wig.id &&
        item.type === wig.type
    )
    .slice(0, 8);

  const [active, setActive] = useState(0);

  const [length, setLength] = useState(
    wig.length.replace(' inch', '')
  );

  const [shade, setShade] = useState(
    wig.shade
  );

  const gallery = [
    wig.image,
    ...related
      .slice(0, 2)
      .map((item) => item.image),
  ];

  const openRelated = (e) => {
    e.preventDefault();

    const href = e.currentTarget.getAttribute(
      'href'
    );

    window.location.hash = href.slice(1);

    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  };

  return (
    <main className="luxe-pdp">
      <button
        className="luxe-back"
        onClick={onBack}
      >
        <ArrowLeft size={17} />
        Back to collection
      </button>

      <section className="luxe-pdp-main">
        <div className="luxe-pdp-gallery">
          <div className="luxe-pdp-thumbs">
            {gallery.map((image, i) => (
              <button
                className={
                  active === i ? 'active' : ''
                }
                key={image + i}
                onClick={() => setActive(i)}
              >
                <img src={image} alt="" />
              </button>
            ))}
          </div>

          <div className="luxe-pdp-image">
            <img
              src={gallery[active]}
              alt={wig.name}
            />
            <span>{wig.badge}</span>
          </div>
        </div>

        <div className="luxe-pdp-copy">
          <p className="eyebrow">
            LUXÉ / COUTURE COLLECTION
          </p>

          <h1>{wig.name}</h1>

          <div className="luxe-rating">
            ★★★★★
            <span>
              4.9 · 38 private client reviews
            </span>
          </div>

          <h2>{money(wig.price)}</h2>

          <p className="luxe-pdp-description">
            {wig.description}
          </p>

          <div className="luxe-specs">
            <div>
              <span>Texture</span>
              <b>{wig.texture}</b>
            </div>

            <div>
              <span>Construction</span>
              <b>{wig.type}</b>
            </div>

            <div>
              <span>Density</span>
              <b>{wig.density}</b>
            </div>
          </div>

          <label>Length</label>

          <div className="luxe-options">
            {[
              '18',
              '22',
              '24',
              '26',
              '28',
              '30',
            ].map((item) => (
              <button
                className={
                  length === item ? 'active' : ''
                }
                onClick={() => setLength(item)}
                key={item}
              >
                {item}"
              </button>
            ))}
          </div>

          <label>Shade</label>

          <div className="luxe-options luxe-shades">
            {[
              'Natural Black',
              'Espresso',
              'Mocha Melt',
              'Honey Blonde',
            ].map((item) => (
              <button
                className={
                  shade === item ? 'active' : ''
                }
                onClick={() => setShade(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="luxe-pdp-add"
            onClick={() =>
              onAdd({
                ...wig,
                length: `${length} inch`,
                shade,
              })
            }
          >
            Add to Shopping Bag
            <ShoppingBag size={18} />
          </button>

          <div className="luxe-accordions">
            <details open>
              <summary>
                Cap construction
                <Plus size={15} />
              </summary>

              <p>
                Glueless lace construction,
                adjustable band and breathable cap
                designed for secure all-day comfort.
              </p>
            </details>

            <details>
              <summary>
                Care & longevity
                <Plus size={15} />
              </summary>

              <p>
                Cleanse gently, air dry and store
                on a silk-lined hanger. With proper
                care, this unit is designed for
                repeated wear.
              </p>
            </details>

            <details>
              <summary>
                Shipping & concierge
                <Plus size={15} />
              </summary>

              <p>
                Nationwide delivery available.
                Book a private fitting for shade
                matching and customization.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="luxe-related">
        <div className="luxe-section-head">
          <div>
            <p className="eyebrow">
              Complete the edit
            </p>

            <h2>
              You may also <em>love</em>
            </h2>
          </div>

          <div className="luxe-slider-arrows">
            <button
              onClick={() =>
                document
                  .getElementById('related-track')
                  ?.scrollBy({
                    left: -220,
                    behavior: 'smooth',
                  })
              }
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() =>
                document
                  .getElementById('related-track')
                  ?.scrollBy({
                    left: 220,
                    behavior: 'smooth',
                  })
              }
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          className="luxe-related-track"
          id="related-track"
        >
          {related.map((item) => (
            <a
              href={`#/wig/${item.id}`}
              onClick={openRelated}
              className="luxe-mini-card"
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div>
                <p>{item.type}</p>
                <h3>{item.name}</h3>
                <strong>
                  {money(item.price)}
                </strong>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
