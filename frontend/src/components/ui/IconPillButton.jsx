import React from 'react';

import { Button, Stack, Typography, useTheme } from '@mui/material';

const IconPillButton = ({ icon, text, gap = 1, onClick, isSelected = true }) => {
  const theme = useTheme();
  icon = React.cloneElement(icon, { size: '18' });
  return (
    <Button
      onClick={onClick}
      sx={{
        bgcolor: theme.palette.background.paper,
        opacity: isSelected ? 1 : 0.4,
        border: isSelected ? `2px solid ${theme.palette.primary.main}` : 'none',
        borderRadius: 2,
        paddingRight: 1.5,
        '&.MuiButtonBase-root': {
          textTransform: 'none',
          color: theme.palette.text.primary,
        },
      }}>
      <Stack direction={'row'} gap={gap} alignItems={'center'} sx={{ width: '100%' }}>
        <Stack
          justifyContent="center"
          alignItems={'center'}
          sx={{
            height: 24,
            width: 24,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
            color: '#fff',
          }}>
          {icon}
        </Stack>
        <Typography variant="caption" sx={{ marginTop: 0.25 }}>
          {text}
        </Typography>
      </Stack>
    </Button>
  );
};

export default IconPillButton;
