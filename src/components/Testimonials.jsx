import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Tolu A.',
    city: 'Lagos',
    quote: 'The realism is unbelievable. From the lace to the movement, it feels like it was made for me.',
  },
  {
    name: 'Nneka O.',
    city: 'Abuja',
    quote: 'The consultation was thoughtful, the fit was perfect and the hair is stunning. It feels genuinely luxurious.',
  },
  {
    name: 'Amaka E.',
    city: 'Port Harcourt',
    quote: 'I wanted something quiet and luxurious. They understood exactly what I meant before I even knew how to explain it.',
  },
  {
    name: 'Dami K.',
    city: 'Lagos',
    quote: 'The packaging, the hair, the little details — everything felt like opening a gift made specifically for me.',
  },
  {
    name: 'Chisom N.',
    city: 'Enugu',
    quote: 'My unit looks incredibly natural. I have worn it several times already and I still get asked where I got my hair done.',
  },
  {
    name: 'Bolu R.',
    city: 'Ibadan',
    quote: 'I loved being able to ask questions before ordering. The whole experience felt personal instead of transactional.',
  },
  {
    name: 'Zainab M.',
    city: 'Abuja',
    quote: 'The texture is beautiful and the density is exactly what I wanted. It moves so naturally.',
  },
  {
    name: 'Favour I.',
    city: 'Warri',
    quote: 'This is easily the most premium wig-buying experience I have had. LUXÉ really understood the assignment.',
  },
  {
    name: 'Adaeze C.',
    city: 'Lagos',
    quote: 'The shade recommendation was perfect. I would never have chosen it myself, but it suits me beautifully.',
  },
  {
    name: 'Kemi T.',
    city: 'Benin City',
    quote: 'Everything arrived beautifully prepared and the hair feels soft, full and expensive. I am obsessed.',
  },
];

export default function Testimonials() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const updateActive = () => {
    const track = trackRef.current;

    if (!track) return;

    const cards = [...track.children];

    if (!cards.length) return;

    const nearest = cards.reduce(
      (best, card, index) => {
        const distance = Math.abs(
          card.offsetLeft -
            track.scrollLeft -
            track.offsetLeft
        );

        return distance < best.distance
          ? { index, distance }
          : best;
      },
      {
        index: 0,
        distance: Infinity,
      }
    );

    setActive(nearest.index);
  };

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    track.addEventListener(
      'scroll',
      updateActive,
      { passive: true }
    );

    window.addEventListener(
      'resize',
      updateActive
    );

    updateActive();

    return () => {
      track.removeEventListener(
        'scroll',
        updateActive
      );

      window.removeEventListener(
        'resize',
        updateActive
      );
    };
  }, []);

  const goToReview = (index) => {
    const card =
      trackRef.current?.children[index];

    if (!card) return;

    card.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });

    setActive(index);
  };

  return (
    <section
      className="reviews-section"
      id="reviews"
    >
      <div className="luxe-section-head">
        <div>
          <p className="eyebrow">Client notes</p>
          <h2>
            What our <em>customers say.</em>
          </h2>
        </div>

        <p>
          Real words from women who chose LUXÉ
          for everyday confidence, special occasions
          and everything in between.
        </p>
      </div>

      <div
        className="reviews-track"
        ref={trackRef}
      >
        {reviews.map((review, index) => (
          <article
            className="review-card"
            key={review.name}
          >
            <div className="review-stars">
              {Array.from({ length: 5 }).map(
                (_, i) => (
                  <Star
                    key={i}
                    size={12}
                    fill="currentColor"
                  />
                )
              )}
            </div>

            <Quote
              className="review-quote"
              size={25}
            />

            <p>“{review.quote}”</p>

            <div className="review-author">
              <span>
                {String(index + 1).padStart(
                  2,
                  '0'
                )}
              </span>

              <div>
                <strong>{review.name}</strong>
                <small>
                  {review.city} · Verified client
                </small>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div
        className="review-pagination"
        aria-label="Testimonial slides"
      >
        {reviews.map((review, index) => (
          <button
            key={review.name}
            className={
              active === index
                ? 'is-active'
                : ''
            }
            onClick={() => goToReview(index)}
            aria-label={`Show testimonial ${index + 1}`}
            aria-current={
              active === index
                ? 'true'
                : undefined
            }
          />
        ))}
      </div>
    </section>
  );
}
