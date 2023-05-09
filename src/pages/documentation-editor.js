import { requireAuthentication } from '@/lib/requireAuthentication';
import Head from 'next/head';

import { DocumentationTitleInput } from '@/components/DocumentationEditor/DocumentationTitleInput';
import { SaveDocumentationButton } from '@/components/DocumentationEditor/SaveDocumentationButton';
import { TextEditor } from '@/components/DocumentationEditor/TextEditor';
import { MainLayout } from '@/layouts/main';
import styles from '@/styles/documentationEditor.module.scss';
import { useFormik } from 'formik';
import { MdOutlineClose } from 'react-icons/md';

const DocumentationEditor = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    onSubmit,
  });

  async function onSubmit(values) {}

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

              <SaveDocumentationButton title="Publicar" isLoading={false} />
            </div>

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
