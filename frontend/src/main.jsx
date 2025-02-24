import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import CustomThemeProvider from './theme/theme.jsx';
import { SettingsProvider } from './context/SettingsContext.jsx';
import { CalendarProvider } from './context/CalendarContext.jsx';
import { RoutineProvider } from './context/RoutineContext.jsx';

import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SettingsProvider>
      <CustomThemeProvider>
        <CalendarProvider>
          <RoutineProvider>
            <App />
          </RoutineProvider>
        </CalendarProvider>
      </CustomThemeProvider>
    </SettingsProvider>
  </StrictMode>
);
