import React from 'react';

import { Stack, Typography } from '@mui/material';
import { ChartDonut, ImageBroken } from '@phosphor-icons/react';
import { BarChart } from '@mui/x-charts';
import { useTheme } from '@mui/material';

import useRoutine from '../hooks/useRoutine';
import { getInsightData } from '../util/generateRoutine';

const DATASET = [
  { task: 'Homework', mins: 60 },
  { task: 'Sleep', mins: 70 },
  { task: 'Coding', mins: 60 },
  { task: 'Gaming', mins: 90 },
  { task: 'Mobile', mins: 60 },
  { task: 'Outdoors', mins: 70 },
  { task: 'Deve..', mins: 240 },
  { task: 'Outdoors', mins: 70 },
];

const Insights = () => {
  const { routine } = useRoutine();

  // No Routine, No Insights.
  if (routine == null || routine.length == 0) {
    return <></>;
  }

  const theme = useTheme();
  const insightData = getInsightData(routine);

  const { minValue, maxValue } = insightData.reduce(
    (acc, ele) => {
      acc.minValue = Math.min(acc.minValue, ele.mins);
      acc.maxValue = Math.max(acc.maxValue, ele.mins);
      return acc;
    },
    { minValue: insightData[0].mins, maxValue: insightData[0].mins }
  );

  return (
    <>
      <Stack direction="row" gap={1} alignItems={'center'} sx={{ marginLeft: 1, marginTop: 1 }}>
        <ChartDonut size="20" />
        <Typography>Insights</Typography>
      </Stack>

      {/* {!routine && (
        <Stack
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: 8,
            width: '500px',
            height: '300px',
          }}
          gap={0.5}
          justifyContent="center"
          alignItems="center">
          <ImageBroken size="42"></ImageBroken>
          <Typography variant="subtitle2">No Insights Available</Typography>
        </Stack>
      )} */}

      {routine && (
        <BarChart
          sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 8 }}
          dataset={insightData}
          xAxis={[
            {
              scaleType: 'band',
              dataKey: 'task',
              disableTicks: true,
              categoryGapRatio: 0.3,
            },
          ]}
          yAxis={[
            {
              colorMap: {
                type: 'continuous',
                min: minValue,
                max: maxValue,
                color: [theme.palette.primary.light, theme.palette.primary.dark],
              },
            },
          ]}
          series={[{ dataKey: 'mins' }]}
          width={500}
          height={300}
        />
      )}
    </>
  );
};

export default Insights;
