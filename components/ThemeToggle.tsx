import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className="p-2 cursor-pointer hover:bg-gruvbox-bg2 active:bg-gruvbox-bg4 text-gruvbox-fg3 hover:opacity-90"
      aria-label={`Switch to ${theme === 'theme-dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'theme-dark' ? '🌞' : '🌙'}
    </button>
  );
}
