import { HallOfFame } from "@Api/App";
import { STORAGE_KEYS } from "@Constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export default function useHallOfFameContainer(type){
    
    const {data: hallOfFameData, isLoading: hallOfFameLoading,refetch} = useQuery(
        [STORAGE_KEYS.HALL_OF_FAME,type],
        () => HallOfFame({type:type}),
        {cacheTime: 0, staleTime: 0},
      );
    
    return{
        hallOfFameData,
        refetch,
        hallOfFameLoading
    }
}