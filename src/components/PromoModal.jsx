import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import '../promo-cookie.css';

export default function PromoModal({ open, onClose, image }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="luxe-promo-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            className="luxe-promo-modal"
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="luxe-promo-title"
          >
            <button className="luxe-promo-close" onClick={onClose} aria-label="Close promotion">
              <X size={19} />
            </button>

            <div className="luxe-promo-image">
              <img src={image} alt="LUXÉ Hair new collection" />
            </div>

            <div className="luxe-promo-copy">
              <p className="eyebrow">The New Collection</p>
              <h2 id="luxe-promo-title">A new chapter in luxury.</h2>
              <p>
                Discover our latest collection of handcrafted wigs, designed for effortless
                elegance and made to feel entirely yours.
              </p>
              <a className="luxe-promo-cta" href="#collection" onClick={onClose}>
                Explore the collection <ChevronRight size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
