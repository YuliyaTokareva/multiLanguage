import * as React from 'react';

import { styled } from '@mui/material/styles';
import { CardHeader, Typography, Card } from '@mui/material/';

export const BodyCard = styled((props) => <Card sx={{ m: 2 }} {...props} />)``;

export const CardStyled = styled((props) => <CardHeader {...props} />)``;

export const CardTitle = styled((props) => <Typography variant="h2" {...props} />)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const CardNameAutor = styled((props) => <Typography variant="h4" {...props} />)``;
