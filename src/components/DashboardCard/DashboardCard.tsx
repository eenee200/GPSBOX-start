import React from 'react';
import styles from './DashboardCard.module.css';
import type { MapDot, StatItem, StatusItem, RouteItem } from '../../types';

const MAP_DOTS: MapDot[] = [
  { top: '30%', left: '22%', isGreen: true },
  { top: '46%', left: '50%', isGreen: true },
  { top: '62%', left: '36%', isGreen: false },
  { top: '24%', left: '66%', isGreen: true },
  { top: '70%', left: '72%', isGreen: false },
  { top: '40%', left: '80%', isGreen: true },
  { top: '54%', left: '14%', isGreen: true },
];

const STATS: StatItem[] = [
  { label: 'Байршил', value: 'Бодит цагийн' },
  { label: 'Шатахуун', value: 'Тогтвортой' },
  { label: 'Анхааруулга', value: '3', sub: 'идэвхтэй' },
];

const STATUSES: StatusItem[] = [
  { label: 'Сэрэмжлүүлэг', value: 'Шуурхай' },
  { label: 'Төхөөрөмжийн байдал', value: 'Эрүүл' },
  { label: 'Чиг хандлага', value: 'Өсөж буй' },
];

const ROUTES: RouteItem[] = [
  { label: 'Төхөөрөмжүүд → Үйл явдал' },
  { label: 'Үйл явдал → Анхааруулга' },
  { label: 'Анхааруулга → Шийдвэр' },
];

const MapVisualization: React.FC = () => (
  <div className={styles.mapBox}>
    <div className={styles.mapGrid} />
    {MAP_DOTS.map((dot, i) => (
      <div
        key={i}
        className={`${styles.mapDot}${dot.isGreen ? ` ${styles.green}` : ''}`}
        style={{ top: dot.top, left: dot.left }}
      />
    ))}
    <span className={styles.mapLabel}>Монгол улс</span>
    <span className={styles.mapCount}>12 015 хэрэглэгч</span>
  </div>
);

const DashboardCard: React.FC = () => {
  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.title}>Үйл ажиллагааны тойм</span>
        <span className={styles.liveBadge}>
          <span className={styles.liveDot} />
          Шууд
        </span>
      </div>

      {/* Map + Routes */}
      <div className={styles.main}>
        <MapVisualization />
        <div className={styles.routePanel}>
          <div className={styles.routeLabel}>Дэлгэрэнгүй үүсгэх</div>
          {ROUTES.map((route, i) => (
            <button key={i} className={styles.routeBtn}>
              <span className={styles.routeArrow}>›</span>
              {route.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsRow}>
        {STATS.map((stat, i) => (
          <div key={i} className={styles.stat}>
            <div className={styles.statLabel}>{stat.label}</div>
            <div className={styles.statValue}>{stat.value}</div>
            {stat.sub && <div className={styles.statSub}>{stat.sub}</div>}
          </div>
        ))}
      </div>

      {/* Status rows */}
      <div className={styles.statusSection}>
        <div className={styles.statusEyebrow}>Шийдвэрлэх давхарга</div>
        {STATUSES.map((status, i) => (
          <div key={i} className={styles.statusRow}>
            <span className={styles.statusLabel}>{status.label}</span>
            <span className={styles.statusValue}>{status.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCard;
