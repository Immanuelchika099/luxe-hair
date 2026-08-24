import {
  MessageCircle,
  Mail,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

const columns = [
  {
    title: 'Help Center',
    links: [
      'Order Tracking',
      'Delivery & Returns',
      'Payment FAQs',
      'Sizing & Fit',
      'Care Guide',
    ],
  },
  {
    title: 'Shop By',
    links: [
      'Wigs',
      'New In',
      'Best Sellers',
      'Raw Virgin',
      'HD Lace',
      'Silk Top',
    ],
  },
  {
    title: 'About Us',
    links: [
      'Our Story',
      'The Atelier',
      'Virtual Fitting',
      'Concierge',
      'Journal',
    ],
  },
  {
    title: 'Work With Us',
    links: [
      'Become an Affiliate',
      'Brand Ambassador',
      'Stylist Program',
      'Wholesale',
    ],
  },
  {
    title: 'Our Policies',
    links: [
      'Terms & Conditions',
      'Privacy Policy',
      'Returns',
      'Safety & Quality',
    ],
  },
];

export default function Footer() {
  return (
    <footer className="lux-footer" id="footer">
      <div className="lux-footer-newsletter">
        <div>
          <p className="eyebrow">
            LUXÉ PRIVATE LIST
          </p>

          <h2>
            Stay close to the <em>atelier.</em>
          </h2>

          <p>
            Receive first access to new units,
            private appointments and considered
            hair care notes.
          </p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
            required
          />

          <button type="submit">
            Sign me up
            <ArrowUpRight size={15} />
          </button>
        </form>
      </div>

      <div className="lux-footer-links">
        {columns.map((column) => (
          <div key={column.title}>
            <span className="footer-label">
              {column.title}
            </span>

            {column.links.map((link) => (
              <a
                href="#collection"
                key={link}
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="lux-footer-contact">
        <div>
          <span>
            Need help with an order, style or fit?
          </span>

          <a
            href="https://wa.me/2348000000000"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={15} />
            Chat with us
          </a>
        </div>

        <div>
          <span>No time to chat?</span>

          <a href="mailto:hello@luxehair.example">
            <Mail size={15} />
            hello@luxehair.example
          </a>
        </div>

        <div>
          <span>Visit the atelier</span>

          <span>
            <MapPin size={15} />
            Lagos, Nigeria · By appointment
          </span>
        </div>
      </div>

      <div className="lux-footer-payment">
        <span>Secure checkout</span>
        <b>VISA</b>
        <b>MASTERCARD</b>
        <b>VERVE</b>
        <b>PAYSTACK</b>
        <b>APPLE PAY</b>
      </div>

      <div className="lux-footer-bottom">
        <span>
          © 2026 LUXÉ Hair. All rights reserved.
        </span>

        <span>
          100% Human Hair · Couture Wigs · Lagos
        </span>

        <div>
          <a href="#footer">Instagram</a>
          <a href="#footer">TikTok</a>
          <a href="#footer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
