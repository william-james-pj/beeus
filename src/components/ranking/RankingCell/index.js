import styles from './rankingCell.module.scss';

export const RankingCell = () => {
  return (
    <div className={styles.rankingCell}>
      <div className={styles.nameContainer}>
        <span className={styles.textPosition}>4</span>
        <span className={styles.textName}>James</span>
      </div>
      <span className={styles.points}>90pts</span>
    </div>
  );
};
