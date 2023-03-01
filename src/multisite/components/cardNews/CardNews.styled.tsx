import * as React from 'react';

import { Typography, CardHeader, Box, Button, Card } from '@mui/material/';
import { styled } from '@mui/material/styles';

export const BodyCard = styled((props) => <Card sx={{ m: 2 }} {...props} />)``;

export const CardStyled = styled((props) => <CardHeader {...props} />)``;

export const CardTitle = styled((props) => <Typography variant="h2" {...props} />)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const CardNameAutor = styled((props) => <Typography variant="h4" {...props} />)``;
export const ButtonBlock = styled(Box)`
  margin: ${({ theme }) => theme.spacing(3, 'auto', 6)};
`;
export const ButtonNews = styled((props) => <Button variant="contained" {...props} />)`
  width: 200px;
`;
