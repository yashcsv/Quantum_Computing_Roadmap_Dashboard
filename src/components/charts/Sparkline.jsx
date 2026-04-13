import { ResponsiveContainer, LineChart, Line } from 'recharts';

const Sparkline = ({ data, color = 'var(--accent-primary)', height = 32 }) => {
  const chartData = data.map((value, index) => ({ index, value }));

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={chartData}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={1.5}
          dot={false}
          isAnimationActive={true}
          animationDuration={1000}
          animationEasing="ease-in-out"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Sparkline;
