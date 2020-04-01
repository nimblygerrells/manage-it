import React from 'react';
import { Box, Container } from '@material-ui/core';

export const PageContent = ({ children }) => {
  return (
    <Box paddingY={2} maxWidth="768px" marginX="auto" flex="1" width="100%">
      <Container>{children}</Container>
    </Box>
  );
};

export default PageContent;
