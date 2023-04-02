import GoogleButton from '@/components/auth/GoogleButton';
import InputGroup from '@/components/auth/InputGroup';
import NavTab from '@/components/auth/NavTab';
import PrimaryButton from '@/components/auth/PrimaryButton';
import { useAuth } from '@/contexts/authContext';
import AuthLayout from '@/layouts/auth';
import signupSchema from '@/lib/signupSchema';
import styles from '@/styles/auth.module.scss';
import { useFormik } from 'formik';
import Head from 'next/head';
import { useState } from 'react';
import {
  MdOutlineLock,
  MdOutlineMailOutline,
  MdOutlinePersonOutline,
} from 'react-icons/md';

const SignUp = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const { signUp, isLoading } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: signupSchema,
    onSubmit,
  });

  async function onSubmit(values, { resetForm }) {
    setErrorMsg('');

    let { message } = await signUp({
      name: values.name,
      email: values.email,
      password: values.password,
    });

    if (message) {
      setErrorMsg(message);
      return;
    }

    resetForm({ values: '' });
  }

  return (
    <>
      <Head>
        <title>Tela de cadastro | Beeus</title>
      </Head>
      <main>
        <AuthLayout>
          <section className={styles.section}>
            <div className={styles.header}>
              <NavTab />
            </div>

            <form className={styles.form} onSubmit={formik.handleSubmit}>
              <InputGroup
                type="text"
                name="name"
                placeholder="Nome"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.errors.name}
                touched={formik.touched.name}
                handleBlur={formik.handleBlur}
                optionIcon={<MdOutlinePersonOutline size={25} />}
              />
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

              {errorMsg && <span className={styles.errorMsg}>{errorMsg}</span>}

              <PrimaryButton title="Cadastrar" isLoading={isLoading} />
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

export default SignUp;
