import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import styled from 'styled-components';

export const Layout = styled(Box)`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
export const Title = styled((props) => <Typography variant="h1" {...props} />)`
  text-align: center;
`;
