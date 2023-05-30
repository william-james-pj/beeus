import { getRankingRequest } from '@/services/rankingService';
import { useState } from 'react';

export function useRanking() {
  const [rankingLeaders, setRankingLeaders] = useState([]);
  const [rankingItems, setRankingItems] = useState([]);

  async function getRanking({ token }) {
    const { status, data } = await getRankingRequest({ token });

    if (status && !data) return;

    const firstElements = data.filter((_, index) => index >= 0 && index < 3);

    const leaders = [];
    firstElements.forEach((item, index) => {
      if (index % 2 === 1) leaders.unshift(item);
      else leaders.push(item);
    });

    data.splice(0, 3);

    setRankingLeaders(leaders);
    setRankingItems(data);
  }

  return { rankingLeaders, rankingItems, getRanking };
}
