import GoogleButton from '@/components/auth/GoogleButton';
import NavTab from '@/components/auth/NavTab';
import PrimaryButton from '@/components/auth/PrimaryButton';
import InputGrup from '@/components/auth/inputGroup';
import AuthLayout from '@/layouts/auth';
import styles from '@/styles/auth.module.scss';

const SignUp = () => {
  return (
    <AuthLayout>
      <section className={styles.section}>
        <div className={styles.header}>
          <NavTab />
        </div>

        <form className={styles.form}>
          <InputGrup type="text" name="name" placeholder="Nome" />
          <InputGrup type="email" name="email" placeholder="E-mail" />
          <InputGrup type="password" name="password" placeholder="Senha" />

          <PrimaryButton title="Cadastrar" />
        </form>

        <div className={styles.footer}>
          <div className={styles.row}>
            <div className={styles.line} />
            <p>Ou</p>
            <div className={styles.line} />
          </div>
          <GoogleButton />
        </div>
      </section>
    </AuthLayout>
  );
};

export default SignUp;
