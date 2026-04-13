import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useDashboardStore from '../../store/dashboardStore';

const navItems = [
  { id: 'hero', icon: '◈', label: 'Home' },
  { id: 'roadmap', icon: '◷', label: 'Plan' },
  { id: 'frameworks', icon: '⬡', label: 'Tools' },
  { id: 'projects', icon: '▣', label: 'Projects' },
  { id: 'contact', icon: '✶', label: 'Contact', route: '/contact' },
  { id: 'verdict', icon: '◉', label: 'Verdict' },
];

const MobileNav = () => {
  const activeSection = useDashboardStore((s) => s.activeSection);
  const navigate = useNavigate();

  const handleClick = (id, route) => {
    if (route) {
      navigate(route);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-bg-surface/95 backdrop-blur-md border-t border-border-default lg:hidden"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      aria-label="Mobile navigation"
    >
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const isContact = item.id === 'contact';
          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id, item.route)}
              className={`
                flex flex-col items-center justify-center gap-0.5 min-w-[52px] min-h-[44px] rounded-lg transition-colors
                ${isContact
                  ? 'bg-semantic-warning/20 text-semantic-warning px-2'
                  : isActive
                  ? 'text-accent-primary'
                  : 'text-text-muted'
                }
              `}
              aria-label={item.label}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-[9px] uppercase tracking-wider font-body">{item.label}</span>
              {isActive && !isContact && (
                <motion.div
                  layoutId="mobileActive"
                  className="absolute bottom-0 w-8 h-[2px] bg-accent-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default MobileNav;
