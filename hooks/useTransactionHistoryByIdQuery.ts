import { fetchTransactionHistoryById } from "@/services/transaction.api";
import { useQuery } from "@tanstack/react-query";

const useTransactionHistoryByIdQuery = (id: string) =>
  useQuery({
    queryKey: ["transaction", id],
    queryFn: async () => {
      const response = await fetchTransactionHistoryById(id);

      return response.data;
    },
  });

export default useTransactionHistoryByIdQuery;
