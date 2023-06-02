import { getRankingRequest } from '@/services/rankingService';
import { useState } from 'react';

export function useRanking() {
  const [rankingLeaders, setRankingLeaders] = useState([]);
  const [rankingItems, setRankingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getRanking({ token }) {

    const { status, data } = await getRankingRequest({ token });

    if (status && !data) return;

    const firstElements = data.filter((_, index) => index >= 0 && index < 3);

    data.splice(0, firstElements.length);

    setRankingLeaders(firstElements);
    setRankingItems(data);
    setIsLoading(false);
  }

  return { isLoading, rankingLeaders, rankingItems, getRanking };
}
