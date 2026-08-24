import { useEffect, useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const links = [
  ['Collection', '#collection'],
  ['Narrative', '#narrative'],
  ['The Atelier', '#atelier'],
  ['Bespoke Fitting', '#contact'],
];

export default function Navbar({ bagCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="announcement">PRIVATE ATELIER APPOINTMENTS · NOW ACCEPTING BOOKINGS</div>
      <header className={`navbar ${scrolled ? 'navbar--solid' : ''}`}>
        <a className="brand" href="#top" onClick={closeMenu}>LUXÉ <span>HAIR</span></a>
        <nav className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          <div className="mobile-menu-head">
            <span>Menu</span>
            <button onClick={closeMenu} aria-label="Close menu"><X size={22} /></button>
          </div>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a href="#collection" className="nav-mobile-cta" onClick={closeMenu}>Shop the Collection</a>
        </nav>
        <div className="nav-actions">
          <a className="bag" href="#collection" aria-label={`Shopping bag with ${bagCount} items`}>
            <span>Bag</span>
            <ShoppingBag size={18} strokeWidth={1.5} />
            <b>{String(bagCount).padStart(2, '0')}</b>
          </a>
          <button className="menu-toggle" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={23} /></button>
        </div>
      </header>
    </>
  );
}
