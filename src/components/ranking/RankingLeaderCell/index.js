import { FaCrown } from 'react-icons/fa';
import styles from './rankingLeaderCell.module.scss';

export const RankingLeaderCell = ({ item, position }) => {
  return (
    <div className={styles.rankingLeaderCell}>
      {position === 0 ? (
        <FaCrown size={48} />
      ) : (
        <span className={styles.textPosition}>{position === 1 ? 2 : 3}</span>
      )}
      <span className={styles.textName}>{item.name}</span>
      <span className={styles.points}>{item.points}</span>
    </div>
  );
};
