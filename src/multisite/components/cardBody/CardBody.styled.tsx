import * as React from 'react';
import Card from '@mui/material/Card';
import styled from 'styled-components';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
export const BodyCard = styled((props) => <Card sx={{ m: 2 }} {...props} />)``;

export const CardStyled = styled((props) => <CardHeader {...props} />)``;

export const CardTitle = styled((props) => <Typography variant="h2" {...props} />)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const CardNameAutor = styled((props) => <Typography variant="h4" {...props} />)``;
