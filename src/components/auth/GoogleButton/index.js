import Image from 'next/image';
import styles from './googleButton.module.scss';

const GoogleButton = () => {
  return (
    <button type="button" className={styles.googleButton}>
      <div className={styles.imageContainer}>
        <Image
          src="/svg/google.svg"
          alt="Google icon"
          fill
          className={styles.image}
        />
      </div>
      <p>Entrar com o google</p>
    </button>
  );
};

export default GoogleButton;
