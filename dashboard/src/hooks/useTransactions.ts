import { useEffect, useState } from "react";
import { getTransactions, addTransaction, parseStatement } from "../api/transactionApi";
import type { Transaction } from "../types/transaction";

export function useTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadTransactions() {
    try {
      const data = await getTransactions();
      setTransactions(data);
    } finally {
      setLoading(false);
    }
  }

  async function createTransaction(transaction: Transaction) {
    await addTransaction(transaction);
    await loadTransactions();
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  async function uploadFile(file: File) {

  const parsedTransactions =
    await parseStatement(file);


  for (const transaction of parsedTransactions) {

    await addTransaction({
      description: transaction.description,
      amount: Number(transaction.amount),
      category: transaction.category,
      date: transaction.date
    });

  }


  await loadTransactions();
}

  return {
    transactions,
    loading,
    reload: loadTransactions,
    createTransaction,
    uploadFile
  };
}