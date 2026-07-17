import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell
} from "recharts";


interface Props {
  data: {
    month: string;
    total: number;
  }[];
}


const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AA336A",
];


export default function MonthlyChart({ data }: Props) {

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
    >

      <CartesianGrid />

      <XAxis dataKey="month" />

      <YAxis />

      <Tooltip />


      <Bar
        dataKey="total"
        name="Spent"
      >

        {data.map((entry, index) => (
          <Cell
            key={`cell-${entry.month}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}

      </Bar>


    </BarChart>
  );
}