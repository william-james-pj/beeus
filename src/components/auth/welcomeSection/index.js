import Image from 'next/image';
import styles from './welcomeSection.module.scss';

const WelcomeSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.imageContainer}>
        <Image
          src="/image/welcomeImage.png"
          alt="Welcome Image"
          fill
          sizes="auto"
          priority
          className={styles.image}
        />
      </div>
      <h2 className={styles.title}>Bem vindo ao Beeus!</h2>
      <p className={styles.subTitle}>
        Deixe seu artigo para a comunidade e ganhe pontos no ranking!
      </p>
    </div>
  );
};

export default WelcomeSection;
