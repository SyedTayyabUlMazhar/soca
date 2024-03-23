import { getManager, getPlayer } from "@Api/App";
import { STORAGE_KEYS } from "@Constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export default function useManagerContainer(PlayerID) {
    const {data: managerData} = useQuery(
        [STORAGE_KEYS.GET_MANAGER],
        () => getManager({}),
        {cacheTime: 0, staleTime: 0},
      );
return{
    managerData
}
}