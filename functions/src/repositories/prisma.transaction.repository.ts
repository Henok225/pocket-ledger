import { Prisma, Transaction } from "@prisma/client";
import { prisma } from "../prisma/client.js";
import { CreateTransactionDTO } from "../types/transaction.js";
import { TransactionRepository } from "./transaction.repository.js";

export function createPrismaTransactionRepository(): TransactionRepository {
  return {
    async create(data: CreateTransactionDTO): Promise<Transaction> {
      return prisma.transaction.create({
        data: {
          description: data.description,
          amount: new Prisma.Decimal(data.amount),
          category: data.category,
          date: data.date,
        },
      });
    },

    async findAll(): Promise<Transaction[]> {
      return prisma.transaction.findMany({
        orderBy: {
          date: "desc",
        },
      });
    },
  };
}