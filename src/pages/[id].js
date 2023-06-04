import { MainLayout } from '@/layouts/main';
import { requireAuthentication } from '@/lib/requireAuthentication';
import styles from '@/styles/documentationDetail.module.scss';
import Head from 'next/head';
import { useEffect } from 'react';

const { useAuth } = require('@/contexts/authContext');
const { useDocumentation } = require('@/hooks/useDocumentationList');
const { useRouter } = require('next/router');

const DocumentationDetail = () => {
  const router = useRouter();
  const { userToken } = useAuth();
  const id = router.asPath.substring(1);
  const { selectedDocument, getDocumentationById } = useDocumentation();

  useEffect(() => {
    if (!id || !userToken) return;
    getDocumentationById({ id, token: userToken });
  }, []);

  return (
    <>
      <Head>
        <title>Beeus | {selectedDocument?.title}</title>{' '}
      </Head>
      <main>
        <MainLayout>
          <div className={styles.container}>
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
