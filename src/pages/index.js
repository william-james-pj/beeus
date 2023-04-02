import { requireAuthentication } from '@/lib/requireAuthentication';
import Head from 'next/head';

import { MainLayout } from '@/layouts/main';

const Home = () => {
  return (
    <>
      <Head>
        <title>Beeus</title>
      </Head>
      <main>
        <MainLayout></MainLayout>
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
