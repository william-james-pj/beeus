import Link from 'next/link';
import styles from './documentationCard.module.scss';

export const DocumentationCard = ({ data }) => {
  return (
    <div className={styles.documentationCard}>
      <Link href={`${data.id}`} className={styles.cardLink}>
        <span className={styles.textTitle}>{data.title}</span>
        <div className={styles.contentContainer}>
          <span className={styles.textContent}>{data.content}</span>
        </div>
      </Link>
    </div>
  );
};
