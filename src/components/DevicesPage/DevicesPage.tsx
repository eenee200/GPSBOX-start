import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './DevicesPage.module.css';

type BadgeType = 'cellular' | 'satellite' | 'camera' | 'wearable';

interface DeviceFeature {
  icon: string;
  label: string;
}

interface Device {
  id: string;
  model: string;
  emoji: string;
  gradientFrom: string;
  gradientTo: string;
  badges: BadgeType[];
  shortDesc: string;
  fullDesc: string;
  features: DeviceFeature[];
  category: 'vehicle' | 'satellite' | 'camera' | 'personal';
}

const DEVICES: Device[] = [
  {
    id: 'fmb125', model: 'FMB125', emoji: '📡',
    gradientFrom: '#2255cc', gradientTo: '#4f7ef8',
    badges: ['cellular'],
    shortDesc: 'Тээврийн хэрэгслийг газрын зураг дээр харан хянах зориулалттай.',
    fullDesc: 'Үүрэн холбооны сүлжээгээр ажиллана. Тээврийн хэрэгслийг газрын зураг дээр харан хянах зориулалттай. Түлш мэдрэгч болон бусад нэмэлт мэдрэгчүүд холбогдох боломжтой.',
    features: [
      { icon: '🗺️', label: 'GPS байршил хяналт' },
      { icon: '⛽', label: 'Түлш мэдрэгч холбогдоно' },
      { icon: '🔌', label: 'Нэмэлт мэдрэгч холбогдоно' },
      { icon: '📶', label: 'Үүрэн холбооны сүлжээ' },
    ],
    category: 'vehicle',
  },
  {
    id: 'fmb920', model: 'FMB920', emoji: '🛰️',
    gradientFrom: '#3a6bc7', gradientTo: '#6ec6f5',
    badges: ['cellular'],
    shortDesc: 'Хамгийн энгийн төхөөрөмж. Тээврийн хэрэгслийг газрын зураг дээр хянах.',
    fullDesc: 'Үүрэн холбооны сүлжээгээр ажиллана. Хамгийн энгийн төхөөрөмж бөгөөд тээврийн хэрэгслийг газрын зураг дээр харан хянах зориулалттай. Суурилуулалт хялбар, хэрэглэхэд энгийн.',
    features: [
      { icon: '🗺️', label: 'GPS байршил хяналт' },
      { icon: '📶', label: 'Үүрэн холбооны сүлжээ' },
      { icon: '⚡', label: 'Хялбар суурилуулалт' },
      { icon: '💡', label: 'Эхлэгчдэд тохиромжтой' },
    ],
    category: 'vehicle',
  },
  {
    id: 'fmb640', model: 'FMB640', emoji: '⛽',
    gradientFrom: '#1a3f9e', gradientTo: '#4f7ef8',
    badges: ['cellular'],
    shortDesc: '2 түлш мэдрэгч болон нэмэлт мэдрэгчүүд холбогдох боломжтой.',
    fullDesc: 'Үүрэн холбооны сүлжээгээр ажиллана. Тээврийн хэрэгслийг газрын зураг дээр харан хянах зориулалттай. 2 түлш мэдрэгч болон бусад нэмэлт мэдрэгчүүд холбогдох боломжтой.',
    features: [
      { icon: '🗺️', label: 'GPS байршил хяналт' },
      { icon: '⛽', label: '2 түлш мэдрэгч холбогдоно' },
      { icon: '🔌', label: 'Олон нэмэлт мэдрэгч' },
      { icon: '📶', label: 'Үүрэн холбооны сүлжээ' },
    ],
    category: 'vehicle',
  },
  {
    id: 'tsm232', model: 'TSM232', emoji: '🌐',
    gradientFrom: '#0d2a6e', gradientTo: '#2255cc',
    badges: ['cellular', 'satellite'],
    shortDesc: 'Үүрэн болон хиймэл дагуулын сүлжээ хосолсон. Сүлжээгүй газарт Iridium ашиглана.',
    fullDesc: 'Үүрэн холбоо болон Хиймэл дагуулын сүлжээ хосолсон төхөөрөмж. Сүлжээгүй газарт зорчсон тохиолдолд Iridium SATELLITE ашиглан газрын зураг дээр хянах боломжтой.',
    features: [
      { icon: '📶', label: 'Үүрэн холбооны сүлжээ' },
      { icon: '🛰️', label: 'Iridium Satellite сүлжээ' },
      { icon: '🏔️', label: 'Алслагдсан газарт ажиллана' },
      { icon: '🗺️', label: 'GPS байршил хяналт' },
    ],
    category: 'satellite',
  },
  {
    id: 'jc200', model: 'JC200', emoji: '📷',
    gradientFrom: '#7a3500', gradientTo: '#cc6620',
    badges: ['cellular', 'camera'],
    shortDesc: 'GPS + Камер хосолсон машины хар хайрцаг. Дуу, дүрстэй бичлэг хийнэ.',
    fullDesc: 'Үүрэн холбооны сүлжээгээр ажиллана. GPS болон Камер хосолсон машины хар хайрцаг. Дуу, дүрстэй бичлэг хийнэ. Яаралтай тохиолдолд дуудлага хийж, гаднаас дуудлага хүлээн авч ярих боломжтой.',
    features: [
      { icon: '📹', label: 'Дуу дүрстэй бичлэг' },
      { icon: '🗺️', label: 'GPS байршил хяналт' },
      { icon: '📞', label: 'Яаралтай дуудлага хийх' },
      { icon: '📶', label: 'Үүрэн холбооны сүлжээ' },
    ],
    category: 'camera',
  },
  {
    id: 'tmt250', model: 'TMT250', emoji: '⌚',
    gradientFrom: '#1a6e3a', gradientTo: '#22aa55',
    badges: ['cellular', 'wearable'],
    shortDesc: 'Хувь хүний хяналтын цахим бугуйвч. Байршил болон зөвшөөрөлгүй салгасан үед мэдэгдэл.',
    fullDesc: 'Үүрэн холбооны сүлжээгээр ажиллана. Хувь хүний хяналтын зориулалттай цахим бугуйвч. Тухайн хүний байршлыг заана. Зөвшөөрөлгүй биеэс салгасан тохиолдолд мэдээлэл илгээнэ.',
    features: [
      { icon: '📍', label: 'Хүний байршил хяналт' },
      { icon: '🔔', label: 'Зөвшөөрөлгүй салгасан үед мэдэгдэл' },
      { icon: '📶', label: 'Үүрэн холбооны сүлжээ' },
      { icon: '🛡️', label: 'Аюулгүй байдлын хяналт' },
    ],
    category: 'personal',
  },
];

const FILTERS: { label: string; value: 'all' | Device['category'] }[] = [
  { label: 'Бүгд', value: 'all' },
  { label: 'Тээврийн хэрэгсэл', value: 'vehicle' },
  { label: 'Хиймэл дагуул', value: 'satellite' },
  { label: 'Камертай', value: 'camera' },
  { label: 'Хувийн хяналт', value: 'personal' },
];

const BADGE_LABELS: Record<BadgeType, string> = {
  cellular: 'Үүрэн сүлжээ',
  satellite: 'Satellite',
  camera: 'Камер',
  wearable: 'Wearable',
};

const BadgeTag: React.FC<{ type: BadgeType }> = ({ type }) => {
  const cls = {
    cellular:  styles.badgeCellular,
    satellite: styles.badgeSatellite,
    camera:    styles.badgeCamera,
    wearable:  styles.badgeWearable,
  }[type];
  return <span className={`${styles.badge} ${cls}`}>{BADGE_LABELS[type]}</span>;
};

const DeviceCard: React.FC<{ device: Device; onClick: () => void }> = ({ device, onClick }) => (
  <div className={styles.card} onClick={onClick} role="button" tabIndex={0}
    onKeyDown={(e) => e.key === 'Enter' && onClick()}>
    <div className={styles.cardImageArea}>
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${device.gradientFrom}, ${device.gradientTo})` }} />
      <span className={styles.cardEmoji}>{device.emoji}</span>
      <div className={styles.cardBadgeRow}>
        {device.badges.map((b) => <BadgeTag key={b} type={b} />)}
      </div>
    </div>
    <div className={styles.cardBody}>
      <div className={styles.modelName}>{device.model}</div>
      <p className={styles.description}>{device.shortDesc}</p>
      <div className={styles.featurePills}>
        {device.features.slice(0, 3).map((f) => (
          <span key={f.label} className={styles.pill}>
            <span className={styles.pillIcon}>{f.icon}</span>
            {f.label}
          </span>
        ))}
      </div>
      <div className={styles.cardCta}>
        <span className={styles.ctaLabel}>Дэлгэрэнгүй харах</span>
        <span className={styles.ctaArrow}>→</span>
      </div>
    </div>
  </div>
);

interface DeviceModalProps {
  device: Device;
  onClose: () => void;
}

const DeviceModal: React.FC<DeviceModalProps> = ({ device, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  // Render into document.body — completely outside #app-root
  // so it is never affected by the blur on #app-root
  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} role="dialog" aria-modal="true">
        <div className={styles.modalImageArea}
          style={{ background: `linear-gradient(135deg, ${device.gradientFrom}, ${device.gradientTo})` }}>
          <span className={styles.modalEmoji}>{device.emoji}</span>
          <button className={styles.modalCloseBtn} onClick={onClose} aria-label="Хаах">×</button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalModel}>{device.model}</div>
          <div className={styles.modalBadgeRow}>
            {device.badges.map((b) => <BadgeTag key={b} type={b} />)}
          </div>
          <p className={styles.modalDescription}>{device.fullDesc}</p>
          <div className={styles.modalSection}>
            <div className={styles.modalSectionTitle}>Онцлог шинж чанарууд</div>
            <ul className={styles.modalFeatureList}>
              {device.features.map((f) => (
                <li key={f.label} className={styles.modalFeatureItem}>
                  <span className={styles.featureCheck}>✓</span>
                  {f.label}
                </li>
              ))}
            </ul>
          </div>
          <button className={styles.modalContactBtn}
            onClick={() => {
              onClose();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
            Энэ төхөөрөмжийн талаар лавлах
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

interface DevicesPageProps {
  onBack: () => void;
  onModalChange: (open: boolean) => void;
}

const DevicesPage: React.FC<DevicesPageProps> = ({ onBack, onModalChange }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | Device['category']>('all');
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);

  const openModal = (device: Device) => {
    setSelectedDevice(device);
    onModalChange(true);   // tell App to blur #app-root
  };

  const closeModal = () => {
    setSelectedDevice(null);
    onModalChange(false);  // tell App to unblur
  };

  const filtered = activeFilter === 'all'
    ? DEVICES
    : DEVICES.filter((d) => d.category === activeFilter);

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div className={styles.headerText}>
          <button className={styles.backBtn} onClick={onBack}>← Буцах</button>
          <p className={styles.eyebrow}>Бүтээгдэхүүний каталог</p>
          <h1 className={styles.heading}>
            Манай <span className={styles.headingAccent}>Төхөөрөмжүүд</span>
          </h1>
          <p className={styles.subtext}>
            Тээврийн хэрэгслийн хяналт, хувийн хяналт болон хиймэл дагуулын технологи бүхий GPS шийдлүүд.
          </p>
        </div>
      </div>

      <div className={styles.filterBar}>
        {FILTERS.map((f) => (
          <button key={f.value}
            className={`${styles.filterBtn}${activeFilter === f.value ? ` ${styles.active}` : ''}`}
            onClick={() => setActiveFilter(f.value)}>
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.map((device) => (
          <DeviceCard key={device.id} device={device} onClick={() => openModal(device)} />
        ))}
      </div>

      {selectedDevice && (
        <DeviceModal device={selectedDevice} onClose={closeModal} />
      )}
    </div>
  );
};

export default DevicesPage;