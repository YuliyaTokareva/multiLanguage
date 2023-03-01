import * as React from 'react';

import { Typography, Box } from '@mui/material';

import { styled } from '@mui/material/styles';

export const Layout = styled(Box)`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const Title = styled((props) => <Typography variant="h1" {...props} />)`
  text-align: center;
`;
