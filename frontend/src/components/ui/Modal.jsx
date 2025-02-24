import React from 'react';
import { createPortal } from 'react-dom';

import { X } from '@phosphor-icons/react';
import { Box, Typography, Stack, IconButton, useTheme } from '@mui/material';

const Modal = ({ title, children, closeModal, padding, top = 40 }) => {
  const theme = useTheme();
  return createPortal(
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          width: '70%',
          position: 'absolute',
          top: `${top}%`,
          left: '50%',
          transform: 'translate(-50%,-50%)',
          padding: padding,
          borderRadius: 4,
          zIndex: 10,
          boxShadow: 12,
        }}>
        <Stack direction="row" alignItems="center">
          <Typography variant="subtitle1" sx={{ flex: 1, paddingLeft: 1 }}>
            {title}
          </Typography>
          <IconButton sx={{ color: theme.palette.text.primary }} onClick={closeModal}>
            <X size="24"></X>
          </IconButton>
        </Stack>
        <Stack sx={{ paddingLeft: 0.5, marginTop: 1 }} gap={1}>
          {children}
        </Stack>
      </Box>
      <Box
        onClick={closeModal}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '530px',
          height: '100%',
          bgcolor: 'black',
          zIndex: 9,
          opacity: 0.5,
        }}></Box>
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
