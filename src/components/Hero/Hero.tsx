import React from 'react';
import styles from './Hero.module.css';
import DashboardCard from '../DashboardCard';

const HERO_TAGS = [
  'Шууд хяналт',
  'Төхөөрөмжийн удирдлага',
  'Үйлдэл хийх боломжтой аналитик',
];

const PlayIcon: React.FC = () => (
  <svg
    className={styles.ctaIcon}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
);

// The Hero now accepts a callback so the parent (App.tsx) controls navigation
interface HeroProps {
  onViewDevices: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewDevices }) => {
  return (
    <section className={styles.hero}>
      {/* Left: Copy */}
      <div className={styles.content}>
        <p className={styles.eyebrow}>Тээврийн хэрэгслийн хяналтын платформ</p>

        <h1 className={styles.heading}>
          БОДИТ ЦАГИЙН ХЯНАЛТ
          <span className={styles.headingAccent}>(Real-time Visibility)</span>
        </h1>

        <p className={styles.subtext}>
          Хөрөнгийн хяналт, системийг хянах, шууд өгөгдлөөр дээр ажиллах.
        </p>

        <div className={styles.actions}>
          <button className={styles.ctaButton} onClick={onViewDevices}>
            <PlayIcon />
            Төхөөрөмжийн тухай харах
          </button>

          <div className={styles.tags}>
            {HERO_TAGS.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Dashboard preview */}
      <div className={styles.visual}>
        <DashboardCard />
      </div>
    </section>
  );
};

export default Hero;