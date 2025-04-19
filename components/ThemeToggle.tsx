import { useTheme } from '@/contexts/ThemeContext';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 cursor-pointer text-gruvbox-fg3 hover:drop-shadow-[0_0_10px_var(--color-gruvbox-fg)]"
      aria-label={`Switch to ${theme === 'theme-dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'theme-dark' ? <SunIcon size={30} /> : <MoonIcon size={30} />}
    </button>
  );
}
