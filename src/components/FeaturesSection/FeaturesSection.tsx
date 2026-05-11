import React from 'react';
import styles from './FeaturesSection.module.css';
import SectionHeader from '../SectionHeader';
import type { FeatureCard } from '../../types';

const FEATURES: FeatureCard[] = [
  {
    icon: '🗺️',
    badge: 'Бодит цагийн',
    title: 'Live байршил',
    items: [
      'Явсан замын түүх',
      'Явсан км-ээр түлшний зарцуулалт',
      'Шаардлагатай нэмэлт мэдээлэл',
      'Бүрэн хяналтын мэдэгдэл',
    ],
  },
  {
    icon: '📊',
    badge: 'Олон мэдрэгч',
    title: 'Мэдрэгч бa түйш',
    items: [
      'Температур, түлш, хүчдэл болон чийгшил хэмжих',
      'Даралт болон хурдны хяналт',
      'Төхөөрөмжийн хяналт ба удирдлага',
      'Түлшний алдагдал илрүүлэх',
    ],
  },
  {
    icon: '🤖',
    badge: 'Хиймэл оюун ухаанаар ажилладаг',
    title: 'AI камер',
    items: [
      'Жолоочийн анхаарал сарнил илрүүлэх',
      'Видео бичлэг хадгалах, шалгах',
      'Замын нөцөл, аюултай үйлдэл илрүүлэх',
      'Зөрчил, ослын үед бичлэг хадгалах',
    ],
  },
  {
    icon: '☁️',
    badge: 'Шуурхай',
    title: 'Үүлэн платформ',
    items: [
      'Өгөгдлийг аюулгүй хадгалах, нөөцлөх',
      'Вэб болон мобайл хандалт',
      'Хаанаас ч системд хандах боломж',
      'Өргөтгөх боломжтой үүлэн дэд бүтэц',
    ],
  },
  {
    icon: '🔔',
    badge: 'Шуурхай',
    title: 'Ухаалаг сэрэмжлүүлэг',
    items: [
      'Дэлхийн хэмжээний мэдэгдлийн хяналт',
      'Хэрэглэгчийн хувьд тохиргоотой мессеж',
      'Тусгай ухаалаг дохиолол',
      'Утас, имэйл, үүлэн мэдэгдэл',
    ],
  },
  {
    icon: '📈',
    badge: 'Мэдээлэлд тулгуурласан',
    title: 'Аналитик бa тайлан',
    items: [
      'Өгөгдлийг график, тайлан хэлбэрээр харах',
      'Түүхэн өгөгдөл дээр суурилсан шинжилгээ',
      'Зардал, үр ашгийн дүн шинжилгээ',
      'Гүйцэтгэлийн, ашиглалтын үнэлгээ',
    ],
  },
];

const getBadgeClass = (badge: string): string => {
  if (badge === 'Популяр') return styles.popular;
  if (badge === 'AI') return styles.ai;
  return '';
};

const FeaturesSection: React.FC = () => {
  return (
    <section className={styles.section} id="features">
      <SectionHeader
        eyebrow="Бид юу санал болгож байна"
        title="Зургаан онцлог"
      />
      <div className={styles.grid}>
        {FEATURES.map((feature) => (
          <div key={feature.title} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <span className={`${styles.badge} ${getBadgeClass(feature.badge)}`}>
                {feature.badge}
              </span>
            </div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <ul className={styles.featureList}>
              {feature.items.map((item, i) => (
                <li key={i} className={styles.featureItem}>
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

export default FeaturesSection;
