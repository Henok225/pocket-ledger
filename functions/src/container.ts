import { createPrismaTransactionRepository } from "./repositories/prisma.transaction.repository";
import { createTransactionService } from "./services/transaction.service";

const repository = createPrismaTransactionRepository();

export const transactionService =
    createTransactionService(repository);