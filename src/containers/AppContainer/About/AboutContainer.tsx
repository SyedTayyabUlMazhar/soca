import { About, getAllFaqs } from '@Api/App';
import { STORAGE_KEYS } from '@Constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

export default function useAboutContainer() {

  const {data: getAboutData, isLoading: getAboutLoading} = useQuery(
    [STORAGE_KEYS.GET_ABOUT_US],
    () => About(),
    {cacheTime: 0, staleTime: 0},
  );

  return {
    getAboutData,
    getAboutLoading
  };
}
