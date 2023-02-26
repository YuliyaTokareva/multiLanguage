import * as React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import * as Styled from './Spinner.styled';
const Spinner = () => {
  return (
    <Styled.SpinnerBody>
      <CircularProgress disableShrink />
    </Styled.SpinnerBody>
  );
};

export default Spinner;
