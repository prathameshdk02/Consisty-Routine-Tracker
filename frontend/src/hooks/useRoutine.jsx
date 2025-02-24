import RoutineContext from "../context/RoutineContext";
import { useContext } from "react";

const useRoutine = () => useContext(RoutineContext);

export default useRoutine;