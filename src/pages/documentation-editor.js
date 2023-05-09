import { requireAuthentication } from '@/lib/requireAuthentication';
import Head from 'next/head';

import { DocumentationTitleInput } from '@/components/DocumentationEditor/DocumentationTitleInput';
import { SaveDocumentationButton } from '@/components/DocumentationEditor/SaveDocumentationButton';
import { TextEditor } from '@/components/DocumentationEditor/TextEditor';
import { useAuth } from '@/contexts/authContext';
import { useDocumentationEditor } from '@/contexts/documentationEditorContext';
import { MainLayout } from '@/layouts/main';
import styles from '@/styles/documentationEditor.module.scss';
import { useFormik } from 'formik';
import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

const DocumentationEditor = () => {
  const [errorMsg, setErrorMsg] = useState('');

  const { userToken } = useAuth();
  const { isLoading, createDocumentation } = useDocumentationEditor();

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    onSubmit,
  });

  async function onSubmit(values) {
    setErrorMsg('');

    const { message } = await createDocumentation({
      title: values.title,
      content: values.content,
      token: userToken,
    });

    if (message) {
      setErrorMsg(message);
      return;
    }
  }

  return (
    <>
      <Head>
        <title>Beeus | Edição de Documento</title>
      </Head>
      <main>
        <MainLayout>
          <form
            className={styles.documentEditor}
            onSubmit={formik.handleSubmit}
          >
            <div className={styles.header}>
              <div className={styles.closeButton} onClick={() => {}}>
                <MdOutlineClose size={28} />
              </div>

              <SaveDocumentationButton title="Publicar" isLoading={isLoading} />
            </div>

            {errorMsg && (
              <div className={styles.errorContainer}>
                <span className={styles.errorMsg}>{errorMsg}</span>
              </div>
            )}

            <DocumentationTitleInput
              placeholder="Título do documento aqui..."
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              touched={formik.touched.title}
              handleBlur={formik.handleBlur}
            />

            <TextEditor onChange={formik.handleChange} />
          </form>
        </MainLayout>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  return requireAuthentication(context, () => {
    return {
      props: {},
    };
  });
}

export default DocumentationEditor;
