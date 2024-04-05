import { getAgeGroup, getCoachActivity, getCoachAttendanceList, getCoachBatch, getCoachInfo, updateCoachAttendanceList } from "@Api/App";
import { STORAGE_KEYS } from "@Constants/queryKeys";
import { getItem } from "@Service/storageService";
import { useBoundStore } from "@Store/index";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function useCoachContainer(parentId: any) {
  const userData = getItem(STORAGE_KEYS.GET_COACH_ID)
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
        () => getCoachBatch({userData}),
        {cacheTime: 0, staleTime: 0},
      );
      const {data: coachActivityData} = useQuery(
        [STORAGE_KEYS.COACH_ACTIVITY],
        () => getCoachActivity({userData}),
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
        console.log(payload,'payloadpayloadpayloadpayloadpayload');
        
        setCoachAttendacnZustand(data)
      },
    });

    const {mutate: updateCoachAttendanceListMutate, isLoading: updateCoachAttendanceListMutateLoading} = useMutation(updateCoachAttendanceList, {
      onSuccess: (data, payload) => {
        console.log(data,"datadatadatadatadata ON SUCCESS")
        getCoachAttendacneList({coachId: userData})
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