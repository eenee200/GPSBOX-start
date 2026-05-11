import React from 'react';
import styles from './Footer.module.css';

const FOOTER_LINKS = [
  { label: 'Технологи', href: '#about' },
  { label: 'Платформ', href: '#tech' },
  { label: 'Холбоо барих', href: '#contact' },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>

      {/* Left: GPSBOX logo */}
      <a href="#" className={styles.brandLink}>
        <img
          src="/logos/logo.png"
          alt="GPSBOX"
          className={styles.brandLogo}
        />
      </a>

      {/* Center: copyright */}
      <p className={styles.copyright}>
        <strong>© {year} GPSBOX</strong> — Бүх эрх хуулиар хамгаалагдсан
      </p>

      

    </footer>
  );
};

export default Footer;