import { useState } from "react";
import type { Transaction } from "../types/transaction";

interface Props {
  onAdd: (transaction: Transaction) => Promise<void>;
}

export default function AddTransactionForm({ onAdd }: Props) {

  const [form, setForm] = useState<Transaction>({
    description: "",
    amount: 0,
    category: "",
    date: new Date().toISOString(),
  });


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await onAdd(form);

    setForm({
      description: "",
      amount: 0,
      category: "",
      date: new Date().toISOString(),
    });
  }


  return (
    <form
  onSubmit={handleSubmit}
  className="bg-white shadow rounded-lg p-6 flex flex-wrap gap-4"
>

      <input
      className="border rounded px-3 py-2"
        type="date"
        value={form.date.substring(0,10)}
        onChange={(e)=>
          setForm({
            ...form,
            date: new Date(e.target.value).toISOString()
          })
        }
      />


      <input
      className="border rounded px-3 py-2"
        placeholder="Description"
        value={form.description}
        onChange={(e)=>
          setForm({
            ...form,
            description:e.target.value
          })
        }
      />


      <input
      className="border rounded px-3 py-2"
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e)=>
          setForm({
            ...form,
            amount:Number(e.target.value)
          })
        }
      />


      <input
      className="border rounded px-3 py-2"
        placeholder="Category"
        value={form.category}
        onChange={(e)=>
          setForm({
            ...form,
            category:e.target.value
          })
        }
      />


      <button
 className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
>
 Add Transaction
</button>

    </form>
  );
}