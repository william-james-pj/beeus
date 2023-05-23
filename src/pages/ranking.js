import { requireAuthentication } from '@/lib/requireAuthentication';
import Head from 'next/head';

import { RankingCell } from '@/components/ranking/RankingCell';
import { RankingLeaderCell } from '@/components/ranking/RankingLeaderCell';
import { useRanking } from '@/hooks/useRanking';
import { MainLayout } from '@/layouts/main';
import styles from '@/styles/ranking.module.scss';

const Ranking = () => {
  const { rankingLeaders, rankingItems } = useRanking();

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
              {rankingLeaders.length > 0 ??
                rankingLeaders.map((ranking, index) => (
                  <RankingLeaderCell key={index} />
                ))}
            </div>

            <div className={styles.cellContainer}>
              {rankingItems.length > 0 ??
                rankingItems.map((rankingItem, index) => (
                  <RankingCell key={index} />
                ))}
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
