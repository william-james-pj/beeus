import Image from 'next/image';
import styles from './googleButton.module.scss';

const GoogleButton = () => {
  return (
    <a className={styles.googleButton}>
      <div className={styles.imageContainer}>
        <Image
          src="/svg/google.svg"
          alt="Ícone do Google"
          fill
          sizes="auto"
          className={styles.image}
        />
      </div>
      <span>Entrar com o google</span>
    </a>
  );
};

export default GoogleButton;
