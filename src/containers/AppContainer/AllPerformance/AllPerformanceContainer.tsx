import { getPlayerPerformance } from "@Api/App";
import { STORAGE_KEYS } from "@Constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export default function useAllPerformanceContainer() {
    const {data: playerPerformanceData} = useQuery(
        [STORAGE_KEYS.GET_ALL_PERFORMANCE],
        () => getPlayerPerformance({}),
        {cacheTime: 0, staleTime: 0},
      );
return {
    playerPerformanceData
}
}