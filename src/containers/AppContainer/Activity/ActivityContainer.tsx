import { getActivity } from '@Api/App';
import { STORAGE_KEYS } from '@Constants/queryKeys';
import { getItem } from '@Service/storageService';
import { useQuery } from '@tanstack/react-query';

export default function useActivityContainer() {
  const userData = getItem(STORAGE_KEYS.GET_PARENT_USER_DETAILS)
  
  const {data: getActivityData, isLoading} = useQuery(
    [STORAGE_KEYS.GET_ACTIVITY],
    () => getActivity({userData}),
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
