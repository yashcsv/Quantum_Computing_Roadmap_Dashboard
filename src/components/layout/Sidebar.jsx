import { motion } from 'framer-motion';
import { Sun, Moon, Atom } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import useTheme from '../../hooks/useTheme';
import useDashboardStore from '../../store/dashboardStore';

const sections = [
  { id: 'hero', label: 'Overview', icon: '◈' },
  { id: 'roadmap', label: 'Timeline', icon: '◷' },
  { id: 'knowledge', label: 'Knowledge', icon: '◆' },
  { id: 'frameworks', label: 'Frameworks', icon: '⬡' },
  { id: 'projects', label: 'Projects', icon: '▣' },
  { id: 'applications', label: 'QML Apps', icon: '◎' },
  { id: 'careers', label: 'Careers', icon: '↗' },
  { id: 'verdict', label: 'Verdict', icon: '◉' },
];

const Sidebar = () => {
  const { toggleTheme, isDark } = useTheme();
  const activeSection = useDashboardStore((s) => s.activeSection);
  const navigate = useNavigate();

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.aside
      className="fixed left-0 top-0 bottom-0 w-[240px] bg-bg-surface border-r border-border-default z-40 hidden lg:flex flex-col"
      initial={{ x: -240 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Logo */}
      <div className="p-6 border-b border-border-default">
        <div className="flex items-center gap-3">
          <Atom className="text-accent-primary" size={24} />
          <div>
            <h1 className="font-display text-lg tracking-tight text-text-primary">
              QC ROADMAP
            </h1>
            <p className="text-label text-text-muted uppercase tracking-widest">
              Dashboard
            </p>
          </div>
        </div>
      </div>

      {/* Nav items */}
      <nav className="flex-1 py-4 overflow-y-auto" aria-label="Dashboard navigation">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className={`
              w-full flex items-center gap-3 px-6 py-3 text-left transition-all duration-200 relative
              ${activeSection === section.id
                ? 'text-accent-primary bg-accent-primary/8'
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated/50'
              }
            `}
            aria-current={activeSection === section.id ? 'true' : undefined}
          >
            {activeSection === section.id && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent-primary"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
            <span className="text-body w-5 text-center opacity-60">{section.icon}</span>
            <span className="text-small font-body">{section.label}</span>
          </button>
        ))}

        <div className="px-4 pt-4">
          <button
            onClick={() => navigate('/contact')}
            className="w-full flex items-center justify-center gap-2 rounded-lg border border-semantic-warning/40 bg-semantic-warning/20 px-4 py-2 text-small font-body uppercase tracking-wider text-semantic-warning hover:bg-semantic-warning/30 transition-colors"
          >
            ✶ Contact Us
          </button>
        </div>
      </nav>

      {/* Theme toggle */}
      <div className="p-4 border-t border-border-default">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-4 py-2 w-full rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-elevated/50 transition-colors"
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
          <span className="text-small font-body">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
