import { FaSpinner } from 'react-icons/fa';
import styles from './saveDocumentationButton.module.scss';

export const SaveDocumentationButton = ({ title, isLoading = false }) => {
  return (
    <button
      type="submit"
      className={styles.saveDocumentationButton}
      disabled={isLoading}
    >
      {!isLoading ? (
        <span>{title}</span>
      ) : (
        <FaSpinner className={styles.spinner} size={18} />
      )}
    </button>
  );
};
