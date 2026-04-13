import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#00FF9F', '#47BFFF', '#FFBE0B', '#FF4757'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-elevated rounded-lg p-3 shadow-lg">
        <p className="text-small text-text-primary font-body">{payload[0].name}</p>
        <p className="text-small tabular-nums" style={{ color: payload[0].payload.fill }}>
          {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

const renderLabel = ({ name, percent }) => {
  if (percent < 0.08) return null;
  return `${name} ${(percent * 100).toFixed(0)}%`;
};

const DonutBreakdown = ({ data, nameKey = 'name', valueKey = 'weight', height = 280, colors }) => {
  const colorPalette = colors || COLORS;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={3}
          dataKey={valueKey}
          nameKey={nameKey}
          label={renderLabel}
          labelLine={{ stroke: 'var(--text-muted)', strokeWidth: 1 }}
          isAnimationActive={true}
          animationDuration={1000}
          animationEasing="ease-in-out"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colorPalette[index % colorPalette.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutBreakdown;
