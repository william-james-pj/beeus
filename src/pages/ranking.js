import { requireAuthentication } from '@/lib/requireAuthentication';
import Head from 'next/head';

import { RankingCell } from '@/components/ranking/RankingCell';
import { RankingLeaderCell } from '@/components/ranking/RankingLeaderCell';
import { MainLayout } from '@/layouts/main';
import styles from '@/styles/ranking.module.scss';

const Ranking = () => {
  return (
    <>
      <Head>
        <title>Beeus - Ranking</title>
      </Head>
      <main>
        <MainLayout>
          <div className={styles.ranking}>
            <span className={styles.pageTitle}>Ranking</span>

            <div className={styles.leaderCellContainer}>
              <RankingLeaderCell />
              <RankingLeaderCell />
              <RankingLeaderCell />
            </div>

            <div className={styles.cellContainer}>
              <RankingCell />
              <RankingCell />
              <RankingCell />
            </div>
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

export default Ranking;
