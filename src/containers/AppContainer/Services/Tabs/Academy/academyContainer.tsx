import {getKidAges, getWeeksValue} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export default function useAcademyContainer() {
  const {data: getKidAge} = useQuery(
    [STORAGE_KEYS.GET_ACADEMY_KID_AGE],
    getKidAges,
    {cacheTime: 0, staleTime: 0},
  );
  const {data: getTimesPerWeek} = useQuery(
    [STORAGE_KEYS.GET_TIMES_PER_WEEK],
    getWeeksValue,
    {cacheTime: 0, staleTime: 0},
  );
  return {
    getKidAge,
    getTimesPerWeek
  };
}
