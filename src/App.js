import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import theme from './theme';
import './styles.css';
import AccountsPage from './AccountsPage';
import AccountCreatePage from './AccountCreatePage';
import { WorkstreamsPage, WorkstreamPage } from 'workstream';

export default function App() {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <AccountsPage />
            </Route>
            <Route exact path="/accounts">
              <AccountsPage />
            </Route>
            <Route exact path="/account/new">
              <AccountCreatePage />
            </Route>
            <Route exact path="/account/:accountId/workstream">
              <WorkstreamsPage />
            </Route>
            <Route path="/account/:accountId/workstream/:workstreamId">
              <WorkstreamPage />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </CssBaseline>
  );
}

///
/*
account {
  workstreams: [
    {
      id:
      name: ''
      startDate
      endDate
      tasks: [
        title:
        desc:
        deps: [

        ]
        activity: [
          created
          updated
          timeentry: {
            created
            updated
            startTime,
            endTime,
          }
        ]
      ]
    }
  ]
}



*/
