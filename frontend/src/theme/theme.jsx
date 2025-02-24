import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

import { typography } from './typography';
import { palette } from './palette';
import useSettings from '../hooks/useSettings';
import { useMemo } from 'react';

const CustomThemeProvider = ({ children }) => {
  const { themeMode } = useSettings();

  const themeObj = useMemo(
    () => ({
      typography,
      palette: themeMode == 'light' ? palette.light : palette.dark,
    }),
    [themeMode]
  );

  const theme = createTheme(themeObj);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
