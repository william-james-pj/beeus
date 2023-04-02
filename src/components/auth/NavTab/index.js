import Link from 'next/link';
import styles from './navTab.module.scss';

export const NavTab = ({ isLogin }) => {
  return (
    <div className={styles.navTab}>
      <Link
        href={'/login'}
        className={isLogin ? styles.item__active : styles.item}
      >
        <h5 className={isLogin ? styles.title__active : styles.title}>Login</h5>
      </Link>

      <Link
        href={'/signup'}
        className={!isLogin ? styles.item__active : styles.item}
      >
        <h5 className={!isLogin ? styles.title__active : styles.title}>
          Cadastre-se
        </h5>
      </Link>
    </div>
  );
};
