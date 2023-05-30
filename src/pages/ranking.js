import { requireAuthentication } from '@/lib/requireAuthentication';
import Head from 'next/head';

import { RankingCell } from '@/components/ranking/RankingCell';
import { RankingLeaderCell } from '@/components/ranking/RankingLeaderCell';
import { useAuth } from '@/contexts/authContext';
import { useRanking } from '@/hooks/useRanking';
import { MainLayout } from '@/layouts/main';
import styles from '@/styles/ranking.module.scss';
import { useEffect } from 'react';

const Ranking = () => {
  const { userToken } = useAuth();
  const { rankingLeaders, rankingItems, getRanking } = useRanking();

  useEffect(() => {
    if (userToken) getRanking({ token: userToken });
  }, [userToken]);

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
              {rankingLeaders.length > 0 &&
                rankingLeaders.map((item, index) => (
                  <RankingLeaderCell key={index} item={item} position={index} />
                ))}
            </div>

            <div className={styles.cellContainer}>
              {rankingItems.length > 0 &&
                rankingItems.map((item, index) => (
                  <RankingCell key={index} item={item} position={index} />
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
