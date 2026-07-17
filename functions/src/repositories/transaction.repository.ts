import { Transaction } from "@prisma/client";
import { CreateTransactionDTO } from "../types/transaction.js";

export interface TransactionRepository {
    create(data: CreateTransactionDTO): Promise<Transaction>;

    findAll(): Promise<Transaction[]>;
}