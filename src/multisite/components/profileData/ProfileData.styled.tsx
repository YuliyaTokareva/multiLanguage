import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

export const Name = styled((props) => <Typography variant="h3" {...props} />)`
  text-align: center;
`;
export const UserAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(3, 'auto')
}));
