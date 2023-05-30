import styles from './rankingLeaderCell.module.scss';

export const RankingLeaderCell = ({ item, position }) => {
  return (
    <div className={styles.rankingLeaderCell}>
      <span className={styles.textPosition}>
        {position === 0 ? 2 : position === 2 ? 3 : 1}
      </span>
      <span className={styles.textName}>{item.name}</span>
      <span className={styles.points}>{item.points}</span>
    </div>
  );
};
