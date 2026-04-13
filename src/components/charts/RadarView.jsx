import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, Tooltip } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-elevated rounded-lg p-3 shadow-lg">
        {payload.map((entry, index) => (
          <p key={index} className="text-small tabular-nums" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const COLORS = ['#00FF9F', '#47BFFF', '#FF4757'];

const RadarView = ({ data, categories, height = 320 }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid stroke="var(--border-default)" />
        <PolarAngleAxis
          dataKey="axis"
          tick={{ fill: 'var(--text-secondary)', fontSize: 11, fontFamily: 'DM Mono' }}
        />
        <PolarRadiusAxis
          angle={30}
          domain={[0, 100]}
          tick={{ fill: 'var(--text-muted)', fontSize: 10, fontFamily: 'DM Mono' }}
        />
        <Tooltip content={<CustomTooltip />} />
        {categories.map((cat, index) => (
          <Radar
            key={cat}
            name={cat}
            dataKey={cat}
            stroke={COLORS[index % COLORS.length]}
            fill={COLORS[index % COLORS.length]}
            fillOpacity={0.15}
            strokeWidth={2}
            isAnimationActive={true}
            animationDuration={1000}
            animationEasing="ease-in-out"
          />
        ))}
        <Legend
          wrapperStyle={{ fontSize: 12, fontFamily: 'DM Mono' }}
          iconType="circle"
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarView;
