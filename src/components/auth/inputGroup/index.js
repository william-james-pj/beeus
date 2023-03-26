import styles from './inputGroup.module.scss';

const InputGrup = ({ type, name, placeholder }) => {
  return (
    <div className={styles.container}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.inputText}
      />
    </div>
  );
};

export default InputGrup;
