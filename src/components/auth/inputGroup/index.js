import styles from './inputGroup.module.scss';

const InputGroup = ({
  type,
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
      {error && touched ? <span>{error}</span> : <></>}
    </div>
  );
};

export default InputGroup;
