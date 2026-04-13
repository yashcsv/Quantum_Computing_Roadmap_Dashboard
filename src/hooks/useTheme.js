import { useEffect } from 'react';
import useDashboardStore from '../store/dashboardStore';

const useTheme = () => {
  const { theme, toggleTheme } = useDashboardStore();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return { theme, toggleTheme, isDark: theme === 'dark' };
};

export default useTheme;
