import { createContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';

import useCalendar from '../hooks/useCalendar';
import useLocalStorage from '../hooks/useLocalStorage';

const RoutineContext = createContext();

export const RoutineProvider = ({ children }) => {
  const { selectedDate } = useCalendar();
  const selectedDateIsToday = selectedDate.diff(dayjs(),'day') == 0;
  const routineKey = 'routine_' + selectedDate.format('YYMMDD');

  const initialRoutine =
    selectedDate.format('YY:MM:DD') === dayjs().format('YY:MM:DD')
      ? []
      : null;

  const [routine, setRoutineState] = useLocalStorage(routineKey, initialRoutine);

  useEffect(() => {
    setRoutine(JSON.parse(localStorage.getItem(routineKey)) || initialRoutine);
  }, [routineKey]);

  const setRoutine = (newRoutine) => {
    setRoutineState(newRoutine);
  };

  return <RoutineContext.Provider value={{ routine, setRoutine, selectedDateIsToday }}>{children}</RoutineContext.Provider>;
};

export default RoutineContext;
