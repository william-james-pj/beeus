import styles from './inputGroup.module.scss';

export const InputGroup = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  error,
  touched,
  handleBlur,
  optionIcon,
}) => {
  return (
    <div className={styles.inputGroup}>
      <div className={styles.container}>
        <span>{optionIcon}</span>
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
