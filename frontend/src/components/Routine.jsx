import React, { useState } from 'react';

import { Box, Stack, Typography, Button, useTheme } from '@mui/material';
import {
  Timer,
  LineSegments,
  PlusSquare,
  Plus,
  QuestionMark,
  SunHorizon,
  BookOpenText,
  FunnelX,
} from '@phosphor-icons/react';

import useRoutine from '../hooks/useRoutine';
import dayjs from 'dayjs';
import AddItem from './AddItem';
import { TASK_ICON_MAP } from '../data/TaskTypes';

const ROUTINE_CARD_MIN_WIDTH = 168;

const RoutineNoData = ({ bgPaper, calendarHeight }) => {
  return (
    <Stack
      sx={{
        backgroundColor: bgPaper,
        borderRadius: 4,
        minWidth: `${ROUTINE_CARD_MIN_WIDTH}px`,
        height: `calc(${calendarHeight}px - 24px)`,
      }}
      gap={0.5}
      justifyContent="center"
      alignItems="center">
      <FunnelX size="32"></FunnelX>
      <Typography variant="subtitle2">No Data Found</Typography>
    </Stack>
  );
};

const RoutineCard = ({ startHour, endHour, task, bgColor, primaryBg }) => {
  let renderIcon = React.cloneElement(TASK_ICON_MAP[`${task}`], { size: '23' });
  startHour = startHour.split(' ')[1];
  endHour = endHour.split(' ')[1];
  return (
    <Stack
      sx={{
        backgroundColor: bgColor,
        padding: '0.5rem 1rem 0.5rem 0.8rem',
        borderRadius: 4,
        minWidth: `${ROUTINE_CARD_MIN_WIDTH}px`,
      }}
      gap={1.5}
      justifyContent={'space-between'}
      direction="row">
      <Stack gap={0.6}>
        <Stack direction="row" alignItems="center" gap={0.3}>
          <Timer size={18} />
          <Typography sx={{ paddingTop: '1px', whiteSpace: 'nowrap' }} variant="caption">
            {startHour + ' - ' + endHour}
          </Typography>
        </Stack>
        <Typography sx={{ paddingInlineStart: 0.4 }} variant="subtitle2">
          {task}
        </Typography>
      </Stack>
      <Stack justifyContent={'center'}>
        <Stack
          sx={{ backgroundColor: primaryBg, borderRadius: 2, width: '32px', height: '32px', color: '#fff' }}
          justifyContent="center"
          alignItems={'center'}>
          {renderIcon}
        </Stack>
      </Stack>
    </Stack>
  );
};

const Routine = () => {
  const { routine, selectedDateIsToday } = useRoutine();
  const [addItemIsOpen, setAddItemIsOpen] = useState(false);

  const theme = useTheme();
  const calendarHeight = 336;
  return (
    <>
      {addItemIsOpen && (
        <AddItem closeModal={() => setAddItemIsOpen(false)} noItems={(routine?.length || 0) === 0} />
      )}
      <Stack
        gap={0.5}
        sx={{
          flex: 1,
          maxHeight: calendarHeight,
        }}>
        <Stack direction="row" gap={1} alignItems={'center'}>
          <LineSegments size="20" />
          <Typography>Routine</Typography>
        </Stack>
        <Stack
          gap={1}
          sx={{
            height: `calc(${calendarHeight}px - 24px)`,
            overflowY: 'scroll',
            scrollbarWidth: '2px',
            '&::-webkit-scrollbar': { width: '2px', color: theme.palette.background.paper },
          }}>
          {!routine && (
            <RoutineNoData bgPaper={theme.palette.background.paper} calendarHeight={calendarHeight} />
          )}
          {routine?.map((el, i) => (
            <RoutineCard
              key={i}
              bgColor={theme.palette.background.paper}
              primaryBg={theme.palette.primary.main}
              {...el}
            />
          ))}
          {selectedDateIsToday && (
            <Button
              onClick={() => setAddItemIsOpen(true)}
              sx={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: 4,
                '& .MuiStack-root': {
                  textTransform: 'none',
                  color: theme.palette.text.primary,
                },
              }}>
              <Stack
                direction="row"
                justifyContent={'center'}
                alignItems="center"
                gap={1}
                sx={{ padding: 1 }}>
                <Typography variant="subtitle2">Add Item</Typography>
                <PlusSquare size="24"></PlusSquare>
              </Stack>
            </Button>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default Routine;
