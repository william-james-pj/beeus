import styles from './documentationTitleInput.module.scss';

export const DocumentationTitleInput = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  error,
  touched,
  handleBlur,
}) => {
  return (
    <div className={styles.inputGroup}>
      <div className={styles.container}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={styles.inputText}
          onBlur={handleBlur}
        />
      </div>
      {error && touched && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
