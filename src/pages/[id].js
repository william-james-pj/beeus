import { useDocumentationEditor } from '@/hooks/useDocumentationEditor';
import { MainLayout } from '@/layouts/main';
import { requireAuthentication } from '@/lib/requireAuthentication';
import styles from '@/styles/documentationDetail.module.scss';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { MdDelete, MdEditSquare } from 'react-icons/md';

const { useAuth } = require('@/contexts/authContext');
const { useDocumentation } = require('@/hooks/useDocumentationList');
const { useRouter } = require('next/router');

const DocumentationDetail = () => {
  const router = useRouter();
  const { userToken } = useAuth();
  const id = router.asPath.substring(1);
  const { selectedDocument, getDocumentationById } = useDocumentation();
  const { deleteDocumentation } = useDocumentationEditor();

  useEffect(() => {
    if (!id || !userToken) return;
    getDocumentationById({ id, token: userToken });
  }, []);

  async function onDelete() {
    if (
        !window.confirm(
            'Você tem certeza de que deseja excluir esta documentação?',
        )
    )
        return;

    const { message } = await deleteDocumentation({
        id,
        token: userToken,
    });

    if (message) {
        return;
    }
  }

  return (
    <>
      <Head>
        <title>Beeus | {selectedDocument?.title}</title>{' '}
      </Head>
      <main>
        <MainLayout>
          <div className={styles.container}>
            <div className={styles.icons}>
                <Link href={{ pathname: 'documentation-editor', query: selectedDocument }}>
                    <MdEditSquare></MdEditSquare>
                </Link>
                    <MdDelete style={{cursor: 'pointer'}} onClick={onDelete}></MdDelete>
            </div>
            <span className={styles.info}>
              Publicado {selectedDocument?.created_at.substring(8, 10)}/
              {selectedDocument?.created_at.substring(5, 7)}/
              {selectedDocument?.created_at.substring(0, 4)} por{' '}
              {selectedDocument?.author.name}
            </span>
            <h1 className={styles.title}>{selectedDocument?.title}</h1>
            <p className={styles.content}>{selectedDocument?.content}</p>
          </div>
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

export default DocumentationDetail;
