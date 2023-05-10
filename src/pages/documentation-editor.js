import { requireAuthentication } from '@/lib/requireAuthentication';
import Head from 'next/head';

import { DocumentationTitleInput } from '@/components/DocumentationEditor/DocumentationTitleInput';
import { SaveDocumentationButton } from '@/components/DocumentationEditor/SaveDocumentationButton';
import { TextEditor } from '@/components/DocumentationEditor/TextEditor';
import { useAuth } from '@/contexts/authContext';
import { useDocumentationEditor } from '@/hooks/useDocumentationEditor';
import { MainLayout } from '@/layouts/main';
import { documentationEditorSchema } from '@/lib/documentationEditorSchema';
import styles from '@/styles/documentationEditor.module.scss';
import { useFormik } from 'formik';
import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

const DocumentationEditor = () => {
  const [errorMsg, setErrorMsg] = useState('');

  const { userToken } = useAuth();
  const { isLoading, createDocumentation, closeEditor } =
    useDocumentationEditor();

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    validationSchema: documentationEditorSchema,
    onSubmit,
  });

  async function onSubmit(values) {
    if (
      !window.confirm(
        'Você tem certeza de que deseja publicar esta documentação?',
      )
    )
      return;
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

  function onClose() {
    if (
      !window.confirm('Tem certeza de que deseja descartar esta documentação?')
    )
      return;
    closeEditor();
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
              <div className={styles.closeButton} onClick={onClose}>
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
              error={formik.errors.title}
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
