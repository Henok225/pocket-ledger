import type { Transaction } from "../types/transaction";
import { formatDate } from "../services/format";
interface Props {
  transactions: Transaction[];
}

export default function TransactionTable({ transactions }: Props) {
  return (
  <table className="w-full bg-white shadow rounded-lg overflow-hidden">
      <thead className="bg-slate-100">
        <tr className="border-b">
          <th>N <u>o</u></th>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction, i) => (
          <tr className="border-b text-center"  key={transaction.id ?? `${transaction.date}-${transaction.description}`}>
            <td className="px-4 py-3">{i+1}</td>
            <td className="px-4 py-3">{formatDate(transaction.date)}</td>
            <td className="px-4 py-3">{transaction.description}</td>
            <td className="px-4 py-3">{transaction.amount}</td>
            <td className="px-4 py-3">{transaction.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}