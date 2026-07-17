import { createPrismaTransactionRepository } from "./repositories/prisma.transaction.repository.js";
import { createTransactionService } from "./services/transaction.service.js";

const repository = createPrismaTransactionRepository();

export const transactionService =
    createTransactionService(repository);