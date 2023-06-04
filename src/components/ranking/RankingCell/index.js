import styles from './rankingCell.module.scss';

export const RankingCell = ({ item, position }) => {
  return (
    <div className={styles.rankingCell}>
      <div className={styles.nameContainer}>
        <span className={styles.textPosition}>{position + 4}</span>
        <span className={styles.textName}>{item.name}</span>
      </div>
      <span className={styles.points}>{item.points}</span>
    </div>
  );
};
