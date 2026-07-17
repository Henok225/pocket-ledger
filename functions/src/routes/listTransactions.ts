import { onRequest } from "firebase-functions/v2/https";
import { transactionService } from "../container.js";

export const listTransactions = onRequest(async (req, res) => {
  try {
    if (req.method !== "GET") {
      res.status(405).json({
        error: "Method not allowed",
      });
      return;
    }

    const transactions = await transactionService.listTransactions();

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});