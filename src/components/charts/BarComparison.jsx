import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-elevated rounded-lg p-3 shadow-lg">
        <p className="text-small text-text-primary font-body">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-small tabular-nums" style={{ color: entry.color || entry.fill }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const BarComparison = ({
  data,
  xKey,
  yKey,
  colors,
  height = 280,
  layout = 'vertical',
  name,
  barSize = 20,
}) => {
  const defaultColors = [
    '#00FF9F', '#47BFFF', '#FFBE0B', '#FF4757', '#A855F7', '#00CC7F', '#FF6B81', '#2ED573',
  ];
  const colorPalette = colors || defaultColors;

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={data}
        layout={layout}
        margin={{ top: 5, right: 20, left: layout === 'vertical' ? 120 : 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
        {layout === 'vertical' ? (
          <>
            <XAxis
              type="number"
              stroke="var(--text-muted)"
              tick={{ fill: 'var(--text-muted)', fontSize: 11, fontFamily: 'DM Mono' }}
              axisLine={{ stroke: 'var(--border-default)' }}
            />
            <YAxis
              type="category"
              dataKey={xKey}
              stroke="var(--text-muted)"
              tick={{ fill: 'var(--text-secondary)', fontSize: 12, fontFamily: 'DM Mono' }}
              axisLine={{ stroke: 'var(--border-default)' }}
              width={110}
            />
          </>
        ) : (
          <>
            <XAxis
              dataKey={xKey}
              stroke="var(--text-muted)"
              tick={{ fill: 'var(--text-muted)', fontSize: 11, fontFamily: 'DM Mono' }}
              axisLine={{ stroke: 'var(--border-default)' }}
            />
            <YAxis
              stroke="var(--text-muted)"
              tick={{ fill: 'var(--text-muted)', fontSize: 11, fontFamily: 'DM Mono' }}
              axisLine={{ stroke: 'var(--border-default)' }}
            />
          </>
        )}
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--border-subtle)' }} />
        <Bar
          dataKey={yKey}
          name={name || yKey}
          barSize={barSize}
          radius={[0, 4, 4, 0]}
          isAnimationActive={true}
          animationDuration={1000}
          animationEasing="ease-in-out"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colorPalette[index % colorPalette.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarComparison;
