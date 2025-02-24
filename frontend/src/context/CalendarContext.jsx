import dayjs from 'dayjs';
import { createContext, useState } from 'react';

const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const [selectedDate, setDate] = useState(dayjs());

  const setSelectedDate = (newDate) => {
    setDate(newDate);
  };

  return <CalendarContext.Provider value={{ selectedDate, setSelectedDate }}>{children}</CalendarContext.Provider>;
};

export default CalendarContext;
