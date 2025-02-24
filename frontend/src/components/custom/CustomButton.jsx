import { Button, styled } from '@mui/material';

const CustomButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  '&.MuiButtonBase-root': {
    textTransform: 'none',
    color: theme.palette.text.primary,
  },
}));

export default CustomButton;
