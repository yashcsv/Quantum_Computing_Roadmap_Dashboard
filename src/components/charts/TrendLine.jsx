import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-elevated rounded-lg p-3 shadow-lg">
        <p className="text-small text-text-primary font-body">{label}</p>
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

const TrendLine = ({ data, xKey, yKey, color = 'var(--accent-primary)', height = 280, name }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
        <defs>
          <linearGradient id={`gradient-${yKey}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.25} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border-subtle)" />
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
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey={yKey}
          stroke={color}
          strokeWidth={2}
          fill={`url(#gradient-${yKey})`}
          name={name || yKey}
          isAnimationActive={true}
          animationDuration={1000}
          animationEasing="ease-in-out"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TrendLine;
