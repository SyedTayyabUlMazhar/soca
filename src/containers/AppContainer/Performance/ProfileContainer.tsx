import { getPlayerProfile } from '@Api/App';
import { STORAGE_KEYS } from '@Constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

export default function useProfileContainer(player_reg_no: any) {




  const {data: getProfileData} = useQuery(
    [STORAGE_KEYS.GET_PROFILE],
    () => getPlayerProfile({playerId: player_reg_no}),
    {cacheTime: 0, staleTime: 0},
  );


  return {
    getProfileData
  };
}
