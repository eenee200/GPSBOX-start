import React from 'react';
import styles from './WhySection.module.css';
import SectionHeader from '../SectionHeader';
import type { WhyCard } from '../../types';

const WHY_CARDS: WhyCard[] = [
  {
    title: 'Шууд харагдах байдал',
    description:
      'Хөрөнгө, маршрут, статусыг нэг харагдацаас харна уу',
  },
  {
    title: 'Ухаалаг сэрэмжлүүлэг',
    description:
      'Анхаарал хандуулаых шаардлагатай үйл явдалд хурдан хариу үйлдэл үзүүлэх',
  },
  {
    title: 'Аналитик бa тайлан',
    description:
      'Гүйцэтгэлийг хэмжиж, шийдвэрээ сайжруулах',
  },
];

const WhySection: React.FC = () => {
  return (
    <section className={styles.section}>
      <SectionHeader
        eyebrow="Чадвар"
        title="Яагаад багууд өдөр бүр ашигладаг вэ?"
      />
      <div className={styles.grid}>
        {WHY_CARDS.map((card) => (
          <div key={card.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySection;
