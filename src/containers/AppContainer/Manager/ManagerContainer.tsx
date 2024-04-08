import {
  getAgeGroup,
  getDate,
  getDivision,
  getFieldingSession,
  getManager,
  getOpponent,
  getPlayer,
  getTeam,
  getTeamAllocation,
  getTournament,
  updateFieldingSession,
} from '@Api/App';
import { queryClient } from '@Api/Client';
import { STORAGE_KEYS } from '@Constants/queryKeys';
import { getItem } from '@Service/storageService';
import { useBoundStore } from '@Store/index';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export default function useManagerContainer(
  selectedTourney: string | undefined,
  selectedDivision: string | undefined,
  selectedTeam: string | undefined,
  selectedOpponent: string | undefined,
  selectedDate: any,
) {

  const setFieldingZustand = useBoundStore(
    (state: any) => state.setFieldingZustand,
  );
  const userData = getItem(STORAGE_KEYS.GET_PARENT_USER_DETAILS);
  const [updateSession, setUpdateSession] = useState();
  const { data: managerData } = useQuery([STORAGE_KEYS.GET_MANAGER], () => getManager({}), { cacheTime: 0, staleTime: 0 });

  const { data: getTournamentData } = useQuery([STORAGE_KEYS.GET_TOURNAMENT], getTournament, { cacheTime: 0, staleTime: 0 });

  const { data: getDivisionData } = useQuery([STORAGE_KEYS.GET_DIVISION], getDivision, { cacheTime: 0, staleTime: 0 });
  const { data: getOpponentData } = useQuery([STORAGE_KEYS.GET_OPPONENT], getOpponent, { cacheTime: 0, staleTime: 0 });

   
  const { data: getTeamData } = useQuery([STORAGE_KEYS.GET_TEAMS], getTeam, { cacheTime: 0, staleTime: 0 });
  const managerFilterZustand = useBoundStore(
    (state: any) => state.managerFilterZustand,
  );
  const { data: getDateData, refetch: getDateRefetch } = useQuery([STORAGE_KEYS.GET_DATE], () =>
    selectedTourney && selectedDivision && selectedTeam && selectedOpponent ?
      getDate({ selectedTourney, selectedDivision, selectedTeam, selectedOpponent, userData }) : null,
    { cacheTime: 0, staleTime: 0 });

  const { data: getAllocationData, refetch: AllocationRefetch,isLoading } = useQuery([STORAGE_KEYS.GET_ALLOCATION], () =>
    selectedDate && selectedTourney && selectedDivision && selectedTeam && selectedOpponent &&
      getTeamAllocation({ selectedDate, selectedTourney, selectedDivision, selectedTeam, selectedOpponent, userData }),
    { cacheTime: 0, staleTime: 0 },
 
    );



  const { mutate: updateFieldingSessionMutate } = useMutation(updateFieldingSession, {
    onSuccess: (data, payload) => {
      console.log('payloadpayloadpayload',data);
      setFieldingZustand(data);
   
      // queryClient.invalidateQueries([STORAGE_KEYS.GET_ALLOCATION]);
    },
  });

  useEffect(()=>{
    setFieldingZustand()
  },[getAllocationData])


  return {
    managerData,
    getTournamentData,
    getDivisionData,
    getTeamData,
    getDateData,
    getAllocationData,
    updateFieldingSessionMutate,
    updateSession,
    AllocationRefetch,
    getDateRefetch,
    getOpponentData,
    isLoading
  };
}
