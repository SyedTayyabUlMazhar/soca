import { getAgeGroup, getCoachActivity, getCoachAttendanceList, getCoachBatch, getCoachInfo, updateCoachAttendanceList } from "@Api/App";
import { STORAGE_KEYS } from "@Constants/queryKeys";
import { useBoundStore } from "@Store/index";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useCoachContainer(parentId) {
  const setCoachAttendacnZustand = useBoundStore(
    (state: any) => state.setCoachAttendacnZustand,
  );

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

    //   const { data: getCoachAttendacneList, isLoading: getCoachAttendacneListLoading } = useQuery(
    //     [STORAGE_KEYS.GET_COACH_ATTENDACNE_LIST],
    //     () => getCoachAttendanceList({coachId: 2}),
    //     { cacheTime: 0, staleTime: 0 },
    // );
    const {mutate: getCoachAttendacneList} = useMutation(getCoachAttendanceList, {
      onSuccess: (data, payload) => {
        setCoachAttendacnZustand(data)
      },
    });

    const {mutate: updateCoachAttendanceListMutate, isLoading: updateCoachAttendanceListMutateLoading} = useMutation(updateCoachAttendanceList, {
      onSuccess: (data, payload) => {
        console.log(data,"updateCoachAttendanceList ON SUCCESS",payload)
        getCoachAttendacneList({coachId: 2})
        setCoachAttendacnZustand(data)
      },
    });
    
return{
    coachData,
    coachBatch,
    coachActivityData,
    getAgeGroupList,
    getCoachAttendacneList,
    updateCoachAttendanceListMutate,
}
}