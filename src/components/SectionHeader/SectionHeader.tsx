import React from 'react';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title }) => (
  <div className={styles.wrapper}>
    <p className={styles.eyebrow}>{eyebrow}</p>
    <h2 className={styles.title}>{title}</h2>
  </div>
);

export default SectionHeader;
