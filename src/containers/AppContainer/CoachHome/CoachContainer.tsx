import { getAgeGroup, getCoachActivity, getCoachBatch, getCoachInfo } from "@Api/App";
import { STORAGE_KEYS } from "@Constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export default function useCoachContainer(parentId) {
    const {data: coachData} = useQuery(
        [STORAGE_KEYS.GET_COACH_INFO],
        () => getCoachInfo({parentId}),
        {cacheTime: 0, staleTime: 0},
      );
      const {data: coachBatch} = useQuery(
        [STORAGE_KEYS.COACH_BATCH],
        () => getCoachBatch({parentId}),
        {cacheTime: 0, staleTime: 0},
      );
      const {data: coachActivityData} = useQuery(
        [STORAGE_KEYS.COACH_ACTIVITY],
        () => getCoachActivity({parentId}),
        {cacheTime: 0, staleTime: 0},
      );

      const {data: getAgeGroupList} = useQuery(
        [STORAGE_KEYS.GET_AGE_GROUP],
        getAgeGroup,
        {cacheTime: 0, staleTime: 0},
      );

    
return{
    coachData,
    coachBatch,
    coachActivityData,
    getAgeGroupList
}
}