import { Transaction } from "@prisma/client";
import { CreateTransactionDTO } from "../types/transaction";

export interface TransactionRepository {
    create(data: CreateTransactionDTO): Promise<Transaction>;

    findAll(): Promise<Transaction[]>;
}