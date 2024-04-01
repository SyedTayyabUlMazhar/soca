import { getFmailyPlayers, getPlayerPerformance } from "@Api/App";
import { STORAGE_KEYS } from "@Constants/queryKeys";
import { getItem, setItem } from "@Service/storageService";
import { useBoundStore } from "@Store/index";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function useAllPerformanceContainer(playerId) {
  console.log(playerId,'playerIdplayerIdplayerIdplayerId');
  
  const playerPerformanceID = useBoundStore(state => state.playerPerformanceID);
    const userData = getItem(STORAGE_KEYS.GET_PARENT_USER_DETAILS)
    console.log(playerPerformanceID,'playerPerformanceIDplayerPerformanceIDplayerPerformanceID');

      const {data: getFamilyplayerData} = useQuery(
        [STORAGE_KEYS.GET_FAMILY_PLAYERS],
        () => getFmailyPlayers({playerId: userData}),
        {cacheTime: 0, staleTime: 0, enabled: userData ? true :false},
      );

    const {data: playerPerformanceData,refetch: refetchPlayerPerformanceData} = useQuery(
        [STORAGE_KEYS.GET_ALL_PERFORMANCE],
        () => getPlayerPerformance({playerId: playerId ? playerId : playerPerformanceID}),
        {cacheTime: 0, staleTime: 0, onSuccess(data) {
        },},
        
      );

   
 
return {
    playerPerformanceData,
    getFamilyplayerData,
    refetchPlayerPerformanceData
}
}