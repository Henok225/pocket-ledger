import { onRequest } from "firebase-functions/v2/https";
import { transactionService } from "../container.js";

export const addTransaction = onRequest(async (req, res) => {
    try {
        if (req.method !== "POST") {
            res.status(405).json({
                error: "Method not allowed",
            });
            return;
        }

        if (!req.is("application/json")) {
            res.status(400).json({
                error: "Content-Type must be application/json",
            });
            return;
        }

        if (!req.body) {
            res.status(400).json({
                error: "Request body is required",
            });
            return;
        }

        const {
            description,
            amount,
            category,
            date,
        } = req.body;

        const transaction = await transactionService.addTransaction({
            description,
            amount: Number(amount),
            category,
            date: new Date(date),
        });

        res.status(201).json(transaction);
    } catch (error) {
    console.error(error);

    if (error instanceof Error) {
        res.status(400).json({
            error: error.message
        });
        return;
    }

    res.status(500).json({
        error: "Internal server error"
    });
}
});