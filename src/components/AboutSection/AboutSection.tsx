import React from 'react';
import styles from './AboutSection.module.css';
import SectionHeader from '../SectionHeader';
import type { AboutCard } from '../../types';

const ABOUT_CARDS: AboutCard[] = [
  {
    icon: '👁',
    badge: '01',
    title: 'Хяналт',
    description:
      'Байршил, түлш, температур, чийгшил, төхөөрөмжийн төлөв болон AI камерын мэдээллийг бодит цагт хянаж харах',
  },
  {
    icon: '⚙️',
    badge: '02',
    title: 'Удирдлага',
    description:
      'Төхөөрөмж, хэрэглэгчийн эрх, дохиолол, системийн тохиргоо болон үйл ажиллагааны хяналтыг төвлөрсөн байдлаар удирдах',
  },
  {
    icon: '💡',
    badge: '03',
    title: 'Оновчлох',
    description:
      'Өгөгдөл, сэрэмжлүүлэг, тайлан, аналитикийг ашиглан үйл ажиллагааны үр ашиг, аюулгүй байдал, шийдвэр гаргалтыг сайжруулах.',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className={styles.section} id="about">
      <SectionHeader
        eyebrow="Үндсэн үнэ цэнэ"
        title="GPSBOX юу хийдэг"
      />
      <div className={styles.grid}>
        {ABOUT_CARDS.map((card) => (
          <div key={card.badge} className={styles.card}>
            <div className={styles.iconWrapper}>{card.icon}</div>
            <span className={styles.badge}>{card.badge}</span>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
