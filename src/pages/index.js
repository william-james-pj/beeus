import { requireAuthentication } from '@/lib/requireAuthentication';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Beeus</title>
      </Head>
      <main></main>
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
