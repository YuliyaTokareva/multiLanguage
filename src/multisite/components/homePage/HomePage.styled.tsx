import React from 'react';
import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import BgBig from '../../img/sliderImage-lg.png';

export const Page = styled(Box)`
  max-width: 1170px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
export const Description = styled(Box)`
  margin: 164px 0;
`;
export const Headline = styled(Box)`
  padding: 0;
  background-image: url(${BgBig});
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Maintext = styled((props) => (
  <Typography variant="h1" color="background.paper" {...props} />
))`
  text-align: center;
`;
