import GoogleButton from '@/components/auth/GoogleButton';
import NavTab from '@/components/auth/NavTab';
import PrimaryButton from '@/components/auth/PrimaryButton';
import InputGroup from '@/components/auth/inputGroup';
import AuthLayout from '@/layouts/auth';
import loginSchema from '@/lib/loginSchema';
import styles from '@/styles/auth.module.scss';
import { useFormik } from 'formik';
import Head from 'next/head';
import { MdOutlineLock, MdOutlineMailOutline } from 'react-icons/md';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <>
      <Head>
        <title>Beeus</title>
      </Head>
      <main>
        <AuthLayout>
          <section className={styles.section}>
            <div className={styles.header}>
              <NavTab isLogin />
            </div>

            <form className={styles.form} onSubmit={formik.handleSubmit}>
              <InputGroup
                type="email"
                name="email"
                placeholder="E-mail"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
                touched={formik.touched.email}
                handleBlur={formik.handleBlur}
                optionIcon={<MdOutlineMailOutline size={25} />}
              />
              <InputGroup
                type="password"
                name="password"
                placeholder="Senha"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
                touched={formik.touched.password}
                handleBlur={formik.handleBlur}
                optionIcon={<MdOutlineLock size={25} />}
              />

              <PrimaryButton title="Entrar" />
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
      </main>
    </>
  );
};

export default Login;
