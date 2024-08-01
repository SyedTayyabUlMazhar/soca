import { getKidAges, getKidAgeSession, getSessionType } from '@Api/App';
import { STORAGE_KEYS } from '@Constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

export default function usePrivateContainer() {
  const {data: getSessionTypeData} = useQuery(
    [STORAGE_KEYS.GET_SESSION_TYPE],
    getSessionType,
    {cacheTime: 0, staleTime: 0},
  );
  const {data: getKidAgeSessionData} = useQuery(
    [STORAGE_KEYS.GET_TIMES_PER_WEEK],
    getKidAgeSession,
    {cacheTime: 0, staleTime: 0},
  );
  const {data: getKidAge} = useQuery(
    [STORAGE_KEYS.GET_ACADEMY_KID_AGE],
    getKidAges,
    {cacheTime: 0, staleTime: 0},
  );
  return {
    getSessionTypeData,
    getKidAgeSessionData,
    getKidAge
  };
}
