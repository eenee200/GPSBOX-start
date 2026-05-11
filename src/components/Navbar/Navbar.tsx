import React, { useEffect, useRef } from 'react';
import styles from './Navbar.module.css';

// Each link maps to a section id on the home page
const NAV_LINKS = [
  { label: 'Технологи',    sectionId: 'about'   },
  { label: 'Платформ',   sectionId: 'tech'    },
  { label: 'Холбоо барих', sectionId: 'contact' },
];

interface NavbarProps {
  onNavLink: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavLink }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      if (window.scrollY > 20) {
        wrapperRef.current.classList.add(styles.scrolled);
      } else {
        wrapperRef.current.classList.remove(styles.scrolled);
      }
    };

    handleScroll(); // set correct state on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={wrapperRef} className={styles.navbarWrapper}>
      <nav className={styles.navbar}>

        {/* Left: GPSBOX logo */}
        <a
          href="#"
          className={styles.logoLink}
          onClick={(e) => {
            e.preventDefault();
            onNavLink('hero'); // scroll to top / home
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src="/logos/logo.png"
            alt="GPSBOX"
            className={styles.logoImg}
          />
        </a>

        {/* Center: nav links — use buttons styled as links */}
        <div className={styles.links}>
          {NAV_LINKS.map((link) => (
            <button
              key={link.sectionId}
              className={styles.link}
              onClick={() => onNavLink(link.sectionId)}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right: TT Tools logo */}
        <div className={styles.actions}>
          <a
            href="https://tttools.mn"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ttLogoLink}
          >
            <img
              src="/logos/tttools-logo.png"
              alt="TT Tools"
              className={styles.ttLogoImg}
            />
          </a>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;