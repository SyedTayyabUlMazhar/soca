import { getFmailyPlayers, getPlayerPerformance } from "@Api/App";
import { STORAGE_KEYS } from "@Constants/queryKeys";
import { getItem, setItem } from "@Service/storageService";
import { useBoundStore } from "@Store/index";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function useAllPerformanceContainer(playerId) {
  const year = useBoundStore(
    state => state.YearZustand,
  );
  const playerPerformanceID = useBoundStore(state => state.playerPerformanceID);
    const userData = getItem(STORAGE_KEYS.GET_PARENT_USER_DETAILS)
    console.log(year,'yearyearyearyearyearyearyear');

      const {data: getFamilyplayerData} = useQuery(
        [STORAGE_KEYS.GET_FAMILY_PLAYERS],
        () => getFmailyPlayers({playerId: userData}),
        {cacheTime: 0, staleTime: 0, enabled: userData ? true :false},
      );

    const {data: playerPerformanceData,refetch: refetchPlayerPerformanceData,isLoading} = useQuery(
        [STORAGE_KEYS.GET_ALL_PERFORMANCE,year],
        () => getPlayerPerformance({userData,year,playerId: playerId ? playerId : playerPerformanceID}),
        {cacheTime: 0, staleTime: 0, onSuccess(data) {
        },},
        
      );

      // useEffect(()=>{
      //   refetchPlayerPerformanceData()
      //  },[year])
 
return {
    playerPerformanceData,
    getFamilyplayerData,
    refetchPlayerPerformanceData,
    isLoading,
    year
}
}