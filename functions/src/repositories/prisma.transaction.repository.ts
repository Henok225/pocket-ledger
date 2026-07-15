import { Prisma, Transaction } from "@prisma/client";
import { prisma } from "../prisma/client";
import { CreateTransactionDTO } from "../types/transaction";
import { TransactionRepository } from "./transaction.repository";

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