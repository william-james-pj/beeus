import Image from 'next/image';
import styles from './welcomeSection.module.scss';

export const WelcomeSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.imageContainer}>
        <Image
          src="/image/welcomeImage.png"
          alt="Imagem de boas-vindas"
          fill
          sizes="auto"
          priority
          className={styles.image}
        />
      </div>
      <h1 className={styles.title}>Bem vindo ao Beeus!</h1>
      <p className={styles.subTitle}>
        Deixe seu artigo para a comunidade e ganhe pontos no ranking!
      </p>
    </div>
  );
};
