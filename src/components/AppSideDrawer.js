import React, { useState } from 'react';
import AppBar from 'components/AppBar';
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Drawer,
  ListSubheader,
} from '@material-ui/core';
import { OpenInNew, Menu } from '@material-ui/icons';

const appLinks = [
  { url: '/', label: 'Home' },
  { url: '/', label: 'Active Workstreams' },
  { url: '/account', label: 'Accounts' },
  { url: '/', label: 'My Week' },
  { url: '/', label: 'Workstreams' },
  { url: '/', label: 'Activity Feed' },
];

const externalLinks = [
  { url: 'https://playbooks.kiite.ai/', label: 'Kiite' },
  { url: 'https://gonimbly.calamari.io/', label: 'Calamari' },
  { url: 'https://gonimbly.latticehq.com/', label: 'Lattice' },
  { url: 'https://www.expensify.com/', label: 'Expensify' },
  { url: 'https://roadmunk.com/', label: 'Roadmunk' },
];

const internalLinks = [
  { url: 'https://estimator.gonimbly.com/', label: 'Estimator' },
  { url: 'https://estimator.gonimbly.com/', label: '3VC.me' },
];

export default ({ title }) => {
  const [isDrawOpen, setDrawOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawOpen(!isDrawOpen);
  };

  const drawerContent = (
    <div>
      <Box width="260px" position="sticky" top="0" bgcolor="background.paper" zIndex={100}>
        <Box padding={2}>
          <Typography variant="h6">ManageIt</Typography>
        </Box>
        <Divider />
      </Box>
      <List>
        {appLinks.map((link, index) => (
          <ListItem button component="a" key={index} href={link.url}>
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
      </List>
      <List subheader={<ListSubheader>Internal Apps</ListSubheader>}>
        {internalLinks.map((link, index) => (
          <ListItem button component="a" key={index} href={link.url} target="_blank">
            <ListItemIcon>
              <OpenInNew />
            </ListItemIcon>
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List subheader={<ListSubheader>External Apps</ListSubheader>}>
        {externalLinks.map((link, index) => (
          <ListItem button component="a" key={index} href={link.url} target="_blank">
            <ListItemIcon>
              <OpenInNew />
            </ListItemIcon>
            <ListItemText primary={link.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar title={title}>
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
          <Menu />
        </IconButton>
      </AppBar>
      <nav aria-label="application navigation">
        <Drawer variant="temporary" open={isDrawOpen} onClose={handleDrawerToggle}>
          {drawerContent}
        </Drawer>
      </nav>
    </>
  );
};
