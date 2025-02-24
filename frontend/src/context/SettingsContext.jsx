import { useState, createContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage.jsx';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  const [themeMode, setThemeMode] = useLocalStorage('themeMode', preferredTheme);

  const toggleTheme = () => {
    setThemeMode((prev) => (prev == 'dark' ? 'light' : 'dark'));
  };

  return <SettingsContext.Provider value={{ themeMode, toggleTheme }}>{children}</SettingsContext.Provider>;
};

export default SettingsContext;
