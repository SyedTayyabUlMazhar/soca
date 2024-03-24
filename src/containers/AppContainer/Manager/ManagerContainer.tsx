import { getAgeGroup, getDate, getDivision, getManager, getPlayer, getTeam, getTeamAllocation, getTournament } from "@Api/App";
import { STORAGE_KEYS } from "@Constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export default function useManagerContainer(selectedTourney: string | undefined,selectedDivision: string | undefined,selectedTeam: string | undefined,selectedOpponent: string | undefined,selectedDate:any) {
    const {data: managerData} = useQuery(
        [STORAGE_KEYS.GET_MANAGER],
        () => getManager({}),
        {cacheTime: 0, staleTime: 0},
      );

      const { data: getTournamentData } = useQuery(
        [STORAGE_KEYS.GET_TOURNAMENT],
        getTournament,
        { cacheTime: 0, staleTime: 0 },
    );

    const { data: getDivisionData } = useQuery(
        [STORAGE_KEYS.GET_DIVISION],
        getDivision,
        { cacheTime: 0, staleTime: 0 },
    );

    const { data: getTeamData } = useQuery(
        [STORAGE_KEYS.GET_TEAMS],
        getTeam,
        { cacheTime: 0, staleTime: 0 },
    );

    const { data: getDateData } = useQuery(
        [STORAGE_KEYS.GET_DATE],
       ()=>getDate({selectedTourney,selectedDivision,selectedTeam,selectedOpponent}),
        { cacheTime: 0, staleTime: 0 },
    );

    const { data: getAllocationData } = useQuery(
        [STORAGE_KEYS.GET_ALLOCATION],
       ()=>getTeamAllocation({selectedDate,selectedTourney,selectedDivision,selectedTeam,selectedOpponent}),
        { cacheTime: 0, staleTime: 0 },
    );

return{
    managerData,
    getTournamentData,
    getDivisionData,
    getTeamData,
    getDateData,
    getAllocationData
}
}