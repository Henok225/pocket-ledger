import TransactionTable from "../components/TransactionTable";
import AddTransactionForm from "../components/AddTransactionForm";
import { useTransactions } from "../hooks/useTransactions";
import UploadStatement from "../components/UploadStatement";

export default function Transactions() {

  const {
    transactions,
    loading,
    createTransaction,
    uploadFile
  } = useTransactions();


  if (loading)
    return <h2>Loading...</h2>;


  return (
  <div className="space-y-8">

    <h1 className="text-3xl font-bold">
      Transactions
    </h1>


    <div className="grid md:grid-cols-2 gap-6">

      <UploadStatement
        onUpload={uploadFile}
      />


      <AddTransactionForm
        onAdd={createTransaction}
      />

    </div>


    <TransactionTable
      transactions={transactions}
    />

  </div>
);
}