import { requireAuthentication } from '@/lib/requireAuthentication';
import Head from 'next/head';

import { DocumentationTitleInput } from '@/components/DocumentationEditor/DocumentationTitleInput';
import { SaveDocumentationButton } from '@/components/DocumentationEditor/SaveDocumentationButton';
import { TagsInput } from '@/components/DocumentationEditor/TagsInput';
import { TextEditor } from '@/components/DocumentationEditor/TextEditor';
import { useAuth } from '@/contexts/authContext';
import { useDocumentationEditor } from '@/hooks/useDocumentationEditor';
import { MainLayout } from '@/layouts/main';
import { documentationEditorSchema } from '@/lib/documentationEditorSchema';
import styles from '@/styles/documentationEditor.module.scss';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

const DocumentationEditor = () => {
  const router = useRouter();
  const data = router.query
    ? router.query
    : undefined;
  const [errorMsg, setErrorMsg] = useState('');

  const { userToken } = useAuth();
  const { isLoading, createDocumentation, editDocumentation, closeEditor } =
    useDocumentationEditor();

  const formik = useFormik({
    initialValues: {
      title: data?.title ?? '',
      tags: data?.tags ?? [],
      content: data?.content ?? '',
    },
    validationSchema: documentationEditorSchema,
    onSubmit,
  });

  async function onSubmit(values) {
    if (data?.id) editDocument(values, data.id);
    else createDocument(values);
  }

  async function createDocument(values) {
    let content = values.content.replaceAll("<p>", ""); //Formik retorna conteúdo envolto de tag <p>
    content = content.replaceAll("</p>", "");

    if (
      !window.confirm(
        'Você tem certeza de que deseja publicar esta documentação?',
      )
    )
      return;
    setErrorMsg('');

    const { message } = await createDocumentation({
      title: values.title,
      content: content,
      tags: values.tags,
      token: userToken,
    });

    if (message) {
      setErrorMsg(message);
      return;
    }
  }

  async function editDocument(values, id) {
    let content = values.content.replaceAll("<p>", "");
    content = content.replaceAll("</p>", "");
    
    if (
      !window.confirm(
        'Você tem certeza de que deseja editar esta documentação?',
      )
    )
      return;
    setErrorMsg('');

    const { message } = await editDocumentation({
      id,
      title: values.title,
      content: content,
      tags: values.tags,
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

              <SaveDocumentationButton
                title={data ? 'Salvar' : 'Publicar'}
                isLoading={isLoading}
              />
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

            <TagsInput formik={formik} />

            <TextEditor
              onChange={formik.handleChange}
              value={formik.values.content}
            />
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
