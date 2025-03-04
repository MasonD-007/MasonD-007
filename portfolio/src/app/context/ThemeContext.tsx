'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Provide default values to avoid the undefined error
const defaultThemeContext: ThemeContextType = {
  theme: 'system',
  setTheme: () => null, // No-op function as default
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  // Update theme when it changes
  useEffect(() => {
    setMounted(true);
    try {
      const storedTheme = localStorage.getItem('theme') as Theme | null;
      if (storedTheme && ['light', 'dark', 'system'].includes(storedTheme)) {
        setTheme(storedTheme);
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
  }, []);

  // Apply theme changes with transition
  useEffect(() => {
    if (!mounted) return;

    try {
      const root = window.document.documentElement;
      
      // Add transition class
      root.classList.add('transition');
      
      // Remove existing theme classes
      root.classList.remove('light', 'dark');

      // Apply the appropriate theme
      if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        root.classList.add(systemTheme);
      } else {
        root.classList.add(theme);
      }

      localStorage.setItem('theme', theme);
      
      // Remove transition class after transition completes
      setTimeout(() => {
        root.classList.remove('transition');
      }, 300);
    } catch (error) {
      console.error('Error applying theme:', error);
    }
  }, [theme, mounted]);

  const value = {
    theme,
    setTheme,
  };

  // Avoid hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <>{children}</>;
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
} 