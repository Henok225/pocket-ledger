import type { Transaction } from "../types/transaction";
import { formatDate } from "./format";

export function spendingByCategory(
  transactions: Transaction[]
) {

  const result: Record<string, number> = {};


  for (const transaction of transactions) {

    if (!result[transaction.category]) {
      result[transaction.category] = 0;
    }

    result[transaction.category] += Number(transaction.amount);
  }


  return Object.entries(result).map(
    ([name, value]) => ({
      name,
      value: Number(value.toFixed(2))
    })
  );
}



export function spendingByMonth(
  transactions: Transaction[]
) {

  const result: Record<string, number> = {};


  for (const transaction of transactions) {

const month = formatDate(transaction.date);


    result[month] =
      (result[month] || 0) +
      Number(transaction.amount);
  }


  return Object.entries(result).map(
    ([month, total]) => ({
      month,
      total: Number(total.toFixed(2))
    })
  );
}