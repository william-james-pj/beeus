import Image from 'next/image';
import styles from './mainLayout.module.scss';

import { useAuth } from '@/contexts/authContext';
import { MdLogout } from 'react-icons/md';

export const MainLayout = ({ children }) => {
  const { logout } = useAuth();

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

            <button onClick={() => logout()}>
              <MdLogout size={25} />
            </button>
          </div>
        </nav>
      </header>
      <div className={styles.content}>
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
};
