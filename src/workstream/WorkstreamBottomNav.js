import React from 'react';
import styled from 'styled-components';
import { BottomNavigationAction, BottomNavigation } from '@material-ui/core';
import { Restore, List, BarChart } from '@material-ui/icons';

const BottomNav = styled(BottomNavigation)`
  position: sticky;
  bottom: 0;
`;

const WorkstreamBottomNav = ({ onNavChange, navValue }) => {
  return (
    <BottomNav
      value={navValue}
      onChange={(event, newValue) => {
        onNavChange(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        value="activity"
        label="Activity"
        icon={<Restore />}
      />
      <BottomNavigationAction value="tasks" label="Tasks" icon={<List />} />
      <BottomNavigationAction
        value="metrics"
        label="Metrics"
        icon={<BarChart />}
      />
    </BottomNav>
  );
};

export default WorkstreamBottomNav;
