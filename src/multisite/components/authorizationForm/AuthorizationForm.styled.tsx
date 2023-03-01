import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const Page = styled(Box)`
  max-width: 1170px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(0.8)};
  margin: ${({ theme }) => theme.spacing(0, 'auto')};
  ${(theme) => theme.theme.breakpoints.up('tablet')} {
    padding: ${({ theme }) => theme.spacing(6)};
  }
`;
export const FormBlock = styled((props) => (
  <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' }
    }}
    noValidate
    autoComplete="off"
    {...props}
  />
))`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: ${({ theme }) => theme.spacing(3)};
  width: 100%;

  ${(theme) => theme.theme.breakpoints.up('tablet')} {
    max-width: 450px;
  }
`;
export const FormButton = styled((props) => (
  <Button variant="contained" type="submit" size="small" {...props} />
))``;
export const ButtonBlock = styled(Box)`
  margin-top: ${({ theme }) => theme.spacing(3)};
  display: flex;
  justify-content: center;
`;
