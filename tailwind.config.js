/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-base': 'var(--bg-base)',
        'bg-surface': 'var(--bg-surface)',
        'bg-elevated': 'var(--bg-elevated)',
        'bg-overlay': 'var(--bg-overlay)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'text-disabled': 'var(--text-disabled)',
        'accent-primary': 'var(--accent-primary)',
        'accent-secondary': 'var(--accent-secondary)',
        'accent-tertiary': 'var(--accent-tertiary)',
        'semantic-positive': 'var(--semantic-positive)',
        'semantic-negative': 'var(--semantic-negative)',
        'semantic-warning': 'var(--semantic-warning)',
        'semantic-neutral': 'var(--semantic-neutral)',
        'border-default': 'var(--border-default)',
        'border-subtle': 'var(--border-subtle)',
        'border-strong': 'var(--border-strong)',
      },
      fontSize: {
        'display': 'clamp(56px, 8vw, 120px)',
        'h1': 'clamp(36px, 5vw, 64px)',
        'h2': 'clamp(24px, 3vw, 40px)',
        'h3': 'clamp(18px, 2.5vw, 28px)',
        'body': 'clamp(14px, 1.5vw, 16px)',
        'small': 'clamp(12px, 1.2vw, 13px)',
        'label': ['11px', { letterSpacing: '0.15em' }],
        'mono': ['14px', { lineHeight: '1.6' }],
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['DM Mono', 'monospace'],
        mono: ['DM Mono', 'monospace'],
      },
      letterSpacing: {
        'tighter': '-0.04em',
        'tight': '-0.02em',
        'widest': '0.2em',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'glow': 'var(--shadow-glow)',
      },
      maxWidth: {
        'content': '1280px',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite alternate',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate(0, 0)' },
          '33%': { transform: 'translate(-10px, 8px)' },
          '66%': { transform: 'translate(8px, -6px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
    },
  },
  plugins: [],
}
