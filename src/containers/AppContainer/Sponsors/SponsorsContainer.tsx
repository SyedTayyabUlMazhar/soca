import {getSponsors, getTier} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export default function useSponsorsContainer() {
  const {data: getSponsorsData, isLoading} = useQuery(
    [STORAGE_KEYS.GET_SPONSORS],
    getSponsors,
    {
      cacheTime: 0,
      staleTime: 0,
    },
  );

  return {
    getSponsorsData,
    isLoading,
  };
}
