import * as React from 'react';
import Box from '@mui/material/Box';

type DataNewsProps = {
  children: React.ReactNode;
};

const PageWrapper: React.FC<DataNewsProps> = ({ children }) => {
  return (
    <Box sx={{ maxWidth: 1170, margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
      {children}
    </Box>
  );
};

export default PageWrapper;
