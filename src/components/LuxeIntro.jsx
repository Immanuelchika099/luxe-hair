import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './LuxeIntro.css';

export default function LuxeIntro() {
  const [visible, setVisible] = useState(() => sessionStorage.getItem('luxe-intro-seen') !== 'true');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) return undefined;
    let value = 0;
    const timer = window.setInterval(() => {
      value += value < 72 ? 4 : value < 94 ? 2 : 1;
      if (value >= 100) {
        value = 100;
        window.clearInterval(timer);
        window.setTimeout(() => {
          sessionStorage.setItem('luxe-intro-seen', 'true');
          setVisible(false);
        }, 520);
      }
      setProgress(value);
    }, 28);
    return () => window.clearInterval(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="luxe-intro"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      aria-label="Loading LUXÉ Hair"
    >
      <div className="luxe-intro-glow" />
      <div className="luxe-intro-center">
        <motion.img
          className="luxe-intro-logo"
          src="/brand/luxe-logo-white.svg"
          alt="LUXÉ Hair"
          initial={{ opacity: 0, y: 16, scale: .97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.p
          className="luxe-intro-caption"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .38, duration: .55 }}
        >
          COUTURE WIGS · HUMAN HAIR · PRIVATE ATELIER
        </motion.p>
      </div>
      <div className="luxe-intro-bottom">
        <span>THE ART OF BEAUTY</span>
        <div className="luxe-intro-progress"><i style={{ width: `${progress}%` }} /></div>
        <strong>{String(progress).padStart(3, '0')}</strong>
      </div>
      <motion.div
        className="luxe-intro-panel luxe-intro-panel-left"
        initial={{ scaleY: 1 }}
        animate={progress === 100 ? { scaleY: 0 } : { scaleY: 1 }}
        transition={{ duration: .75, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        className="luxe-intro-panel luxe-intro-panel-right"
        initial={{ scaleY: 1 }}
        animate={progress === 100 ? { scaleY: 0 } : { scaleY: 1 }}
        transition={{ duration: .75, delay: .04, ease: [0.76, 0, 0.24, 1] }}
      />
    </motion.div>
  );
}
