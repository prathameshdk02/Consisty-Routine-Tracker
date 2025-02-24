import CalendarContext from '../context/CalendarContext';
import { useContext } from 'react';

const useCalendar = () => useContext(CalendarContext);

export default useCalendar;
