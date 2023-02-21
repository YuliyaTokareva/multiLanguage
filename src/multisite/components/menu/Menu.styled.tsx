import { Box, Button, Container, Tab, Tabs, Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

export const Header = styled((props) => <Box component="header" {...props} />)`
  background-color: ${({ theme }) => theme.palette.secondary.light};
`;
