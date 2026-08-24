import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import bg1 from "../assets/bg1.JPG"
import bg2 from "../assets/bg2.png"
import bg3 from "../assets/bg3.JPG"

const slides = [
  {
    image:  bg3  ,
    label: 'LUXÉ PRIVATE COLLECTION · 01',
    title: 'Luxury,',
    emphasis: 'made personal.',
    copy: 'Couture human hair with exceptional movement, refined finishes and the confidence of a perfect fit.',
  },
  {
    image: bg1 ,
    label: 'SIGNATURE TEXTURES · 02',
    title: 'Your hair,',
    emphasis: 'your signature.',
    copy: 'From sleek bone straight to soft waves, discover elevated textures designed to feel unmistakably yours.',
  },
  {
    image: bg2 ,
    label: 'THE LUXÉ EDIT · 03',
    title: 'Wear the',
    emphasis: 'moment.',
    copy: 'Statement-making wigs, thoughtfully selected for women who want their beauty to arrive before they do.',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="hero" id="top">
      <div
        className="hero__slides"
        aria-label="LUXÉ Hair featured collection"
      >
        {slides.map((item, index) => (
          <div
            key={item.image}
            className={`hero__slide ${
              index === currentSlide ? 'is-active' : ''
            }`}
            style={{ backgroundImage: `url(${item.image})` }}
            aria-hidden={index !== currentSlide}
          />
        ))}
      </div>

      <div className="hero__veil" />
      <div className="hero__grain" />

      <div className="hero__content" key={currentSlide}>
        <motion.div
          className="hero__rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7 }}
        />

        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          {slide.label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.7 }}
        >
          {slide.title}
          <br />
          <em>{slide.emphasis}</em>
        </motion.h1>

        <motion.p
          className="hero__copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.55 }}
        >
          {slide.copy}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.55 }}
        >
          <a className="hero__button" href="#collection">
            Explore LUXÉ
            <ArrowRight size={16} />
          </a>

          <a className="hero__secondary" href="#why-luxe">
            Discover our story
          </a>
        </motion.div>
      </div>

      <div className="hero__controls">
        <div
          className="hero__dots"
          role="tablist"
          aria-label="Choose hero slide"
        >
          {slides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              className={`hero__dot ${
                index === currentSlide ? 'is-active' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={
                index === currentSlide ? 'true' : 'false'
              }
            />
          ))}
        </div>

        <span className="hero__counter">
          0{currentSlide + 1}
          <i />
          0{slides.length}
        </span>
      </div>

      <div className="hero__scroll">
        Scroll to explore <span>↓</span>
      </div>
    </section>
  );
}
