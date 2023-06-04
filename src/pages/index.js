import { requireAuthentication } from '@/lib/requireAuthentication';
import Head from 'next/head';

import { DocumentationList } from '@/components/List/DocumentationList';
import { MainLayout } from '@/layouts/main';

const Home = () => {

  return (
    <>
      <Head>
        <title>Beeus</title>
      </Head>
      <main>
        <MainLayout>
          <DocumentationList/>
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

export default Home;
