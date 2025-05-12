import { fetchTransactionHistories } from "@/services/transaction.api";
import { useQuery } from "@tanstack/react-query";

const useTransactionHistoriesQuery = (isNextPage: boolean) =>
  useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const response = await fetchTransactionHistories(isNextPage);

      return response.data;
    },
  });

export default useTransactionHistoriesQuery;
