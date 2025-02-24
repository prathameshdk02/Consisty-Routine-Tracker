import dayjs from 'dayjs';

export const getInsightData = (routine) => {
  const taskMap = new Map();

  routine.forEach((ele) => {
    const key = ele.task;
    const startHour = dayjs(ele.startHour, 'YYYY-MM-DD HH:mm');
    const endHour = dayjs(ele.endHour, 'YYYY-MM-DD HH:mm');
    const deltaMins = endHour.diff(startHour, 'minute');

    if (taskMap.has(key)) {
      taskMap.set(key, taskMap.get(key) + deltaMins);
    } else {
      taskMap.set(key, deltaMins);
    }
  });

  const insightData = [];

  for (let [key, value] of taskMap) {
    insightData.push({ task: key, mins: value });
  }

  return insightData;
};
