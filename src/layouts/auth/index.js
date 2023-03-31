import WelcomeSection from '@/components/auth/WelcomeSection';
import Image from 'next/image';
import styles from './authLayout.module.scss';

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.nav}>
        <nav className={styles.container}>
          <div className={styles.nav__content}>
            <Image
              src="/image/logo.png"
              alt="Logo"
              fill
              sizes="auto"
              className={styles.image}
            />
          </div>
        </nav>
      </header>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.content__left}>{children}</div>
          <div className={styles.content__right}>
            <WelcomeSection />
          </div>
        </div>

        <div className={styles.backgroundAux}>
          <div className={styles.backgroundAux__left} />
          <div className={styles.backgroundAux__right} />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
