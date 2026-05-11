import React from 'react';
import styles from './TechSection.module.css';
import SectionHeader from '../SectionHeader';
import type { TechCard } from '../../types';

const TECH_CARDS: TechCard[] = [
  {
    icon: '📡',
    title: 'IoT төхөөрөмжүүд',
    items: [
      'GPS болон мэдрэгчүүдээс мэдээлэл цуглуулах',
      'Темпратур чийгшил мэдрэгч',
      'Мэдрэгчийн оролтууд',
    ],
  },
  {
    icon: '⚡',
    title: 'Бодит цагийн боловсруулалт',
    items: [
      'Өгөгдлийг шууд үйл явдал болгон хувиргах',
      'Үйл явдлын хөдөлгүүр',
      'Анхааруулах логик',
    ],
  },
  {
    icon: '☁️',
    title: 'Үүлэн платформ',
    items: [
      'Аюулгүй хяналтын самбар болон өргөтгөх боломжтой дэд бүтэц',
      'Аюулгүй хандалт',
      'Хэмжилтүүдийн найдвартай хадгалалт',
      'Өргөтгөх боломжтой стек',
    ],
  },
];

const TechSection: React.FC = () => {
  return (
    <section className={styles.section} id="tech">
      <SectionHeader
        eyebrow="Технологи"
        title="Платформын гурван үндсэн давхарга"
      />
      <div className={styles.grid}>
        {TECH_CARDS.map((card) => (
          <div key={card.title} className={styles.card}>
            <div className={styles.iconWrapper}>{card.icon}</div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <ul className={styles.itemList}>
              {card.items.map((item, i) => (
                <li key={i} className={styles.item}>
                  <span className={styles.bullet}>›</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSection;
