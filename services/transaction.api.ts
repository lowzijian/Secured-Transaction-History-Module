import { mockTransactions } from "@/mocks/transaction.mock";
import { ApiResponse } from "@/models/api.model";
import { Transaction } from "@/models/transaction.model";

export const fetchTransactionHistories = async (
  isError = false,
  duration = 3000
) => {
  return new Promise<ApiResponse<Transaction[]>>((resolve, reject) => {
    setTimeout(() => {
      const successResponse: ApiResponse<Transaction[]> = {
        code: 200,
        status: "success",
        description: "Transactions fetched successfully",
        data: mockTransactions,
      };

      const errorResponse: ApiResponse<null> = {
        code: 500,
        status: "error",
        description: "Failed to fetch transactions",
        data: null,
      };

      if (isError) {
        return reject(errorResponse);
      }
      resolve(successResponse);
    }, duration);
  });
};

export const fetchTransactionHistoryById = async (
  id: string,
  isError = false,
  duration = 3000
) => {
  return new Promise<ApiResponse<Transaction>>((resolve, reject) => {
    setTimeout(() => {
      const errorResponse: ApiResponse<null> = {
        code: 500,
        status: "error",
        description: "Failed to fetch transaction",
        data: null,
      };

      if (isError) {
        return reject(errorResponse);
      }

      const transaction = mockTransactions.find((item) => item.id === id);

      if (!transaction) {
        return reject({
          code: 404,
          status: "error",
          description: "Transaction not found",
          data: null,
        });
      }

      const successResponse: ApiResponse<Transaction> = {
        code: 200,
        status: "success",
        description: "Transaction fetched successfully",
        data: transaction,
      };

      resolve(successResponse);
    }, duration);
  });
};
