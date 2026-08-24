import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import '../promo-cookie.css';

const COOKIE_KEY = 'luxe-cookie-choice';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem(COOKIE_KEY);
    if (!choice) {
      const timer = window.setTimeout(() => setVisible(true), 1200);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const choose = (choice) => {
    localStorage.setItem(COOKIE_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="luxe-cookie-banner" role="dialog" aria-label="Cookie notice">
      <div className="luxe-cookie-copy">
        <p className="eyebrow">Your privacy</p>
        <h3>We use cookies.</h3>
        <p>
          We use cookies to improve your browsing experience and understand how our website is used.
        </p>
      </div>

      <div className="luxe-cookie-actions">
        <button className="luxe-cookie-decline" onClick={() => choose('declined')}>
          Decline
        </button>
        <button className="luxe-cookie-accept" onClick={() => choose('accepted')}>
          Accept
        </button>
        <button className="luxe-cookie-close" onClick={() => choose('declined')} aria-label="Close cookie notice">
          <X size={15} />
        </button>
      </div>
    </div>
  );
}

export { COOKIE_KEY };
