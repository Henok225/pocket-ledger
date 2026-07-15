import { describe, expect, it } from "vitest";

import { createFakeTransactionRepository } from "./fake.transaction.repository";
import { createTransactionService } from "../services/transaction.service";

describe("TransactionService", () => {
  it("creates a transaction", async () => {
    const repository = createFakeTransactionRepository();

    const service = createTransactionService(repository);

    const transaction = await service.addTransaction({
      description: "Coffee",
      amount: 5.5,
      category: "Food",
      date: new Date(), 
    });

    expect(transaction.description).toBe("Coffee");
    expect(Number(transaction.amount)).toBe(5.5);
  });
});
