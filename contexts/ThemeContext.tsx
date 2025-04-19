import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Theme = 'theme-dark' | 'theme-white';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('theme-dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'theme-dark' || savedTheme === 'theme-white')) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.classList.remove('theme-dark', 'theme-white');
    htmlElement.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'theme-dark' ? 'theme-white' : 'theme-dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
