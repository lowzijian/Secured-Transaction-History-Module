import { fetchTransactionHistories } from "@/services/transaction.api";
import { useQuery } from "@tanstack/react-query";

const useTransactionHistoriesQuery = () =>
  useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const response = await fetchTransactionHistories();

      return response.data;
    },
  });

export default useTransactionHistoriesQuery;
