import { getActivity } from '@Api/App';
import { STORAGE_KEYS } from '@Constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

export default function useActivityContainer(player_reg_no: any) {
  const {data: getActivityData, isLoading} = useQuery(
    [STORAGE_KEYS.GET_ACTIVITY],
    () => getActivity({playerId: player_reg_no}),
    {
      cacheTime: 0,
      staleTime: 0,
    },
  );

  return {
    getActivityData,
    isLoading,
  };
}
