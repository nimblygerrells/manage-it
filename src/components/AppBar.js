import React from 'react';
import { AppBar as AppBarMui, Toolbar, Typography } from '@material-ui/core';

const AppBar = ({ title, children }) => {
  return (
    <AppBarMui position="sticky">
      <Toolbar>
        {children}
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </AppBarMui>
  );
};

export default AppBar;
