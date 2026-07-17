import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell
} from "recharts";


interface Props {
  data: {
    name: string;
    value: number;
  }[];
}


const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#AA336A",
];


export default function SpendChart({ data }: Props) {

  return (
   <PieChart width={400} height={350}>

      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
        label
      >

        {data.map((entry, index) => (
          <Cell
            key={`cell-${entry.name}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}

      </Pie>


      <Tooltip />

      <Legend />

    </PieChart>
  );
}