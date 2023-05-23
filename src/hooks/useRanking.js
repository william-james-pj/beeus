import { useState } from 'react';

export function useRanking() {
  const [rankingLeaders, setRankingLeaders] = useState([]);
  const [rankingItems, setRankingItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getRanking() {}

  return { isLoading, rankingLeaders, rankingItems, getRanking };
}
