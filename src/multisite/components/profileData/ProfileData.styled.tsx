import * as React from 'react';
import { Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));
export const InfoPanel = styled(Box)`
  display: flex;
  flex-direction: column;
  align-self: center;
`;
