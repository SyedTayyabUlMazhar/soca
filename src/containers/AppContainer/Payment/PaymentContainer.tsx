import { getPayment } from '@Api/App';
import { STORAGE_KEYS } from '@Constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

export default function usePaymentContainer(PlayerID) {
  const {data: getPaymentData, isLoading} = useQuery(
    [STORAGE_KEYS.GET_PAYMENT],
    () => getPayment({playerId: PlayerID}),
    {cacheTime: 0, staleTime: 0},
  );

  return {
    getPaymentData,
    isLoading,
  };
}
