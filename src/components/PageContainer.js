import React from 'react';
import { Box } from '@material-ui/core';

export const PageContainer = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {children}
    </Box>
  );
};

export default PageContainer;
