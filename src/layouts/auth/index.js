import WelcomeSection from '@/components/auth/welcomeSection';
import Image from 'next/image';
import styles from './authLayout.module.scss';

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.nav__content}>
            <Image
              src="/image/logo.png"
              alt="Logo"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </nav>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.content__left}>{children}</div>
          <div className={styles.content__right}>
            <WelcomeSection />
          </div>
        </div>

        <div className={styles.contentTest}>
          <div className={styles.contentTest__left} />
          <div className={styles.contentTest__right} />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
