import React from 'react';
import styled from 'styled-components';
import { Box, Button, Container, Tab, Tabs, Grid, Menu, MenuItem } from '@mui/material';

export const Page = styled(Box)`
  max-width: 1170px;
  padding: ${({ theme }) => theme.spacing(2)};
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
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
  padding: 20px;
`;
