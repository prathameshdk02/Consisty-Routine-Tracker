import React, { useState } from 'react';

import { Box, Stack, Typography, IconButton, Button, useTheme } from '@mui/material';
import { MobileTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Clock, TagChevron, Code } from '@phosphor-icons/react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import minMax from 'dayjs/plugin/minMax';

import CustomButton from './custom/CustomButton.jsx';
import Modal from './ui/Modal';
import IconHeading from './ui/IconHeading';
import IconPillButton from './ui/IconPillButton';

import TASK_TYPES, { TASK_ICON_MAP } from '../data/TaskTypes.jsx';
import useRoutine from '../hooks/useRoutine.jsx';

dayjs.extend(minMax);

const AddItem = ({ closeModal, noItems }) => {
  const theme = useTheme();

  const currentTime = dayjs();
  const [startHour, setStartHour] = useState(
    dayjs.max(currentTime.startOf('day'), currentTime.add(-1, 'hour'))
  );
  const [endHour, setEndHour] = useState(currentTime);
  const [selectedTask, setSelectedTask] = useState(0);

  const isValidDelta = endHour.isAfter(startHour);

  const { routine, setRoutine } = useRoutine();

  const addItemToRoutine = () => {
    const newItem = {
      startHour: startHour.format('YYYY-MM-DD HH:mm'),
      endHour: endHour.format('YYYY-MM-DD HH:mm'),
      task: TASK_TYPES[selectedTask],
    };

    if (routine) {
      setRoutine([...routine, newItem]);
      return;
    }
    setRoutine([newItem]);
  };
  return (
    <Modal title="Add Item" padding={2} closeModal={closeModal} top={noItems ? 90 : 40}>
      <Stack gap={2.5} sx={{ padding: 0.1 }}>
        {/* Choose Time Row */}
        <Stack direction={'row'} gap={2}>
          {/* Start Time */}
          <Stack gap={0.8}>
            <IconHeading icon={<Clock size={22} />} text="Start Time" variant="subtitle2" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileTimePicker
                sx={{
                  '& .MuiInputBase-input': {
                    padding: '8px 0px 8px 12px',
                  },
                  '& .MuiPaper-root': {
                    backgroundColor: theme.palette.background.paper,
                  },
                }}
                onError={() => {}}
                value={startHour}
                maxTime={endHour}
                onChange={(value) => setStartHour(value)}
                slotProps={{ textField: { placeholder: 'Start Time' } }}
              />
            </LocalizationProvider>
          </Stack>

          {/* End Time */}
          <Stack gap={0.8}>
            <IconHeading icon={<Clock size={22} />} text="End Time" variant="subtitle2" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileTimePicker
                sx={{
                  '& .MuiInputBase-input': {
                    padding: '8px 0px 8px 12px',
                  },
                  '& .MuiPaper-root': {
                    backgroundColor: theme.palette.background.paper,
                  },
                }}
                minTime={startHour.add(1, 'minute')}
                value={endHour}
                onChange={(value) => setEndHour(value)}
                slotProps={{ textField: { placeholder: 'End Time' } }}
              />
            </LocalizationProvider>
          </Stack>
        </Stack>

        {/* Choose Task Row */}
        <Stack gap={1}>
          <IconHeading icon={<TagChevron size={22} />} text="Choose Task" variant="subtitle2" />
          <Stack direction={'row'} gap={0.5} flexWrap={'wrap'}>
            {/* Coding pill */}
            {TASK_TYPES.map((task, index) => (
              <IconPillButton
                key={index}
                icon={TASK_ICON_MAP[`${task}`]}
                text={task}
                onClick={() => setSelectedTask(index)}
                isSelected={selectedTask === index}
              />
            ))}
          </Stack>
        </Stack>

        {/* Button Row */}
        <Stack direction="row" gap={1}>
          <CustomButton
            onClick={addItemToRoutine}
            disabled={!isValidDelta}
            sx={{ width: '100%', paddingBlock: 1, backgroundColor: theme.palette.primary.main }}>
            <Typography variant="body2" sx={{ color: '#fff' }}>
              Add Item
            </Typography>
          </CustomButton>
          <CustomButton
            onClick={closeModal}
            sx={{ width: '100%', paddingBlock: 1, backgroundColor: theme.palette.background.paper }}>
            <Typography variant="body2">Cancel</Typography>
          </CustomButton>
        </Stack>
      </Stack>
    </Modal>
  );
};

export default AddItem;
