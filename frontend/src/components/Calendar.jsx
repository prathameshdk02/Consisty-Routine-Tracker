import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import { useTheme } from '@mui/material';
import useCalendar from '../hooks/useCalendar';

const Calendar = () => {
  const { selectedDate, setSelectedDate } = useCalendar();
  const theme = useTheme();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        sx={{
          borderRadius: 8,
          '&': {
            backgroundColor: theme.palette.background.paper,
            marginInline: 0,
          },
          '& .MuiButtonBase-root': {
            color: theme.palette.text.primary,
          },
        }}
        disableFuture={true}
        value={selectedDate}
        onChange={setSelectedDate}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
