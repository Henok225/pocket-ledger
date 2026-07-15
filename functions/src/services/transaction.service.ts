import { TransactionRepository } from "../repositories/transaction.repository";
import { CreateTransactionDTO } from "../types/transaction";

export function createTransactionService(
  repository: TransactionRepository
) {
  return {
    async addTransaction(data: CreateTransactionDTO) {
      // Validation
      if (!data.description.trim()) {
        throw new Error("Description is required.");
      }

      if (data.amount <= 0) {
        throw new Error("Amount must be greater than 0.");
      }

      if (!data.category.trim()) {
        throw new Error("Category is required.");
      }

      if (!(data.date instanceof Date) || isNaN(data.date.getTime())) {
        throw new Error("Invalid date.");
      }

      return repository.create(data);
    },

    async listTransactions() {
      return repository.findAll();
    },
  };
}