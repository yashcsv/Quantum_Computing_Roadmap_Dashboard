const Badge = ({ variant = 'neutral', children, size = 'sm' }) => {
  const variants = {
    positive: 'bg-semantic-positive/15 text-semantic-positive border-semantic-positive/20',
    negative: 'bg-semantic-negative/15 text-semantic-negative border-semantic-negative/20',
    warning: 'bg-semantic-warning/15 text-semantic-warning border-semantic-warning/20',
    neutral: 'bg-semantic-neutral/15 text-semantic-neutral border-semantic-neutral/20',
    accent: 'bg-accent-primary/15 text-accent-primary border-accent-primary/20',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-label',
    md: 'px-3 py-1 text-small',
    lg: 'px-4 py-1.5 text-body',
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full border font-body uppercase tracking-wider
        ${variants[variant] || variants.neutral}
        ${sizes[size] || sizes.sm}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;
