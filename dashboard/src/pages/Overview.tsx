import SpendChart from "../components/SpendChart";
import MonthlyChart from "../components/MonthlyChart";
import {useTransactions} from "../hooks/useTransactions";
import { formatAmount } from "../services/format";
import {
 spendingByCategory,
 spendingByMonth
} from "../services/aggregation";


export default function Overview(){

const {
 transactions
}=useTransactions();


const chartData =
spendingByCategory(transactions);

const monthlyData =
  spendingByMonth(transactions);

const total =
transactions.reduce(
(sum,t)=>sum+Number(t.amount),
0
);


return (
  <div className="space-y-8">

    <h1 className="text-3xl font-bold">
      Overview
    </h1>


    {/* Total Card */}
    <div className="bg-white shadow rounded-lg p-6">

      <p className="text-gray-500">
        Total spent
      </p>

      <h2 className="text-4xl font-bold mt-2">
        €{formatAmount(total)}
      </h2>

    </div>


    {/* Charts */}
    <div className="grid md:grid-cols-2 gap-8">


      <div className="bg-white shadow rounded-lg p-6">

        <h2 className="text-xl font-semibold mb-4">
          Spending by Category
        </h2>


        <SpendChart
          data={chartData}
        />

      </div>



      <div className="bg-white shadow rounded-lg p-6">

        <h2 className="text-xl font-semibold mb-4">
          Monthly Spending
        </h2>


        <MonthlyChart
          data={monthlyData}
        />

      </div>


    </div>

  </div>
);

}