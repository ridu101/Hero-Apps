import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RatingsChart = ({ ratings = [] }) => {
  const chartData = Array.isArray(ratings)
    ? [...ratings].reverse()
    : [];

  const formatNumber = (number) => {
    return new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(Number(number));
  };

  if (chartData.length === 0) {
    return (
      <p className="mt-6 text-[#627382]">
        No rating data available.
      </p>
    );
  }

  return (
    <div className="mt-6 h-80 w-full sm:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{
            top: 10,
            right: 30,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={false}
            stroke="#E5E7EB"
          />

          <XAxis
            type="number"
            tickFormatter={formatNumber}
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#627382",
              fontSize: 12,
            }}
          />

          <YAxis
            type="category"
            dataKey="name"
            width={65}
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#627382",
              fontSize: 12,
            }}
          />

          <Tooltip
            formatter={(value) => [
              formatNumber(value),
              "Reviews",
            ]}
            cursor={{
              fill: "#F1EDFF",
            }}
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
            }}
          />

          <Bar
            dataKey="count"
            fill="#F97316"
            barSize={24}
            radius={[0, 6, 6, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;