const ConfidencePill = ({ level }) => {
  const config = {
    high: { emoji: '🟢', label: 'High', color: 'text-semantic-positive' },
    medium: { emoji: '🟡', label: 'Medium', color: 'text-semantic-warning' },
    low: { emoji: '🔴', label: 'Low', color: 'text-semantic-negative' },
  };

  const { emoji, label, color } = config[level] || config.medium;

  return (
    <span className={`inline-flex items-center gap-1 text-label font-body ${color}`}>
      <span>{emoji}</span>
      <span className="uppercase tracking-wider">{label}</span>
    </span>
  );
};

export default ConfidencePill;
