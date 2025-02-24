import React from 'react';

import { Stack, Typography } from '@mui/material';

const IconHeading = ({ icon, variant, text, gap = 0.8 }) => {
  return (
    <Stack direction="row" gap={gap} alignItems={'center'}>
      {icon}
      <Typography sx={{marginTop: 0.23}} variant={variant}>{text}</Typography>
    </Stack>
  );
};

export default IconHeading;
