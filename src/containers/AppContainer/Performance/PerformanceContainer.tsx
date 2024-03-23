import { getPerformance } from '@Api/App';
import { STORAGE_KEYS } from '@Constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

export default function usePerformanceContainer(PlayerID) {


  const {data: getPerformanceData, isLoading: playerLoading} = useQuery(
    [STORAGE_KEYS.GET_PERFORMANCE],
    () => getPerformance({playerId: PlayerID}),
    {cacheTime: 0, staleTime: 0},
  );

  return {
    getPerformanceData,
  };
}
