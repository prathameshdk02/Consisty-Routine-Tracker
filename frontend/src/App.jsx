import { Box, Stack, Typography, IconButton, useTheme } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { Barbell, Moon, Sun, ChartDonut } from '@phosphor-icons/react';

import Calendar from './components/Calendar';
import Routine from './components/Routine';
import Insights from './components/Insights';

import { TimeElems } from './data/TimeElems';
import useSettings from './hooks/useSettings';

const App = () => {
  const theme = useTheme();
  const { toggleTheme } = useSettings();
  return (
    <>
      <Stack sx={{ padding: 1.5 }} gap={1}>
        <Stack direction="row" sx={{ paddingInlineStart: 1 }}>
          <Stack
            sx={{ userSelect: 'none', cursor: 'pointer', flex: 1 }}
            direction="row"
            alignItems="center"
            gap={1}>
            <Barbell size={28}></Barbell>
            <Typography variant="subtitle1">Consisty - Daily Routine</Typography>
          </Stack>
          <IconButton sx={{ color: theme.palette.text.primary }} onClick={toggleTheme}>
            {theme.palette.mode == 'light' ? <Moon size={24}></Moon> : <Sun size={24}></Sun>}
          </IconButton>
        </Stack>
        <Stack direction="row" alignItems="center" gap={1.5}>
          <Calendar />
          <Routine timeElems={TimeElems} />
        </Stack>
        <Insights />
      </Stack>
    </>
  );
};

export default App;
