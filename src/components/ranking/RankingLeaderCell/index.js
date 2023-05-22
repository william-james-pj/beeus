import styles from './rankingLeaderCell.module.scss';

export const RankingLeaderCell = () => {
  return (
    <div className={styles.rankingLeaderCell}>
      <span className={styles.textPosition}>4</span>
      <span className={styles.textName}>James</span>
      <span className={styles.points}>90pts</span>
    </div>
  );
};
