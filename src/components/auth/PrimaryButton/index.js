import { FaSpinner } from 'react-icons/fa';
import styles from './primaryButton.module.scss';

const PrimaryButton = ({ title, isLoading = false }) => {
  return (
    <button type="submit" className={styles.primaryButton} disabled={isLoading}>
      {!isLoading ? (
        <span>{title}</span>
      ) : (
        <FaSpinner className={styles.spinner} size={18} />
      )}
    </button>
  );
};

export default PrimaryButton;
