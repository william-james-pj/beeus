import styles from './primaryButton.module.scss';

const PrimaryButton = ({ title }) => {
  return (
    <button type="submit" className={styles.primaryButton}>
      <p>{title}</p>
    </button>
  );
};

export default PrimaryButton;
