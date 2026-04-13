import { create } from 'zustand';

const useDashboardStore = create((set) => ({
  theme: localStorage.getItem('qc-theme') || 'dark',
  activeSection: 'hero',
  projectFilter: 'all',
  
  setTheme: (theme) => {
    localStorage.setItem('qc-theme', theme);
    set({ theme });
  },
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('qc-theme', newTheme);
      document.documentElement.className = newTheme;
      return { theme: newTheme };
    });
  },
  setActiveSection: (activeSection) => set({ activeSection }),
  setProjectFilter: (projectFilter) => set({ projectFilter }),
}));

export default useDashboardStore;
