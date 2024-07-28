import {Rentals, getGames, getHours, getKidAges, getWeeksValue} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export default function useRentalContainer(locationZustand,selectedGame,selectedHours) {
  const {data: getGamesData} = useQuery(
    [STORAGE_KEYS.GET_TYPE_OF_LANE],
    getGames,
    {cacheTime: 0, staleTime: 0},
  );
  const {data: getHoursData} = useQuery(
    [STORAGE_KEYS.GET_HOURS],
    getHours,
    {cacheTime: 0, staleTime: 0},
  );

  const {data: rentalData} = useQuery(
    [STORAGE_KEYS.GET_RENTAL,locationZustand,selectedGame,selectedHours],
    () => Rentals({locationZustand,selectedGame,selectedHours}),
    {cacheTime: 0, staleTime: 0},
  );

  
  return {
    getGamesData,
    getHoursData,
    rentalData
  };
}
