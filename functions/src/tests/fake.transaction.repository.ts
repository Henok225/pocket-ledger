import { Prisma, Transaction } from "@prisma/client";
import { randomUUID } from "crypto";

import { TransactionRepository } from "../repositories/transaction.repository.js";
import { CreateTransactionDTO } from "../types/transaction.js";

export function createFakeTransactionRepository(): TransactionRepository {
  const transactions: Transaction[] = [];

  return {
    async create(data: CreateTransactionDTO): Promise<Transaction> {
      const transaction: Transaction = {
        id: randomUUID(),
        description: data.description,
        amount: new Prisma.Decimal(data.amount),
        category: data.category,
        date: data.date,
      };

      transactions.push(transaction);

      return transaction;
    },

    async findAll(): Promise<Transaction[]> {
      return transactions;
    },
  };
}