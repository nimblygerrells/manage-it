import React, { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import { useHistory, useParams, useRouteMatch, Route } from 'react-router-dom';
import { format, differenceInBusinessDays } from 'date-fns';
import WorkstreamBottomNav from 'workstream/WorkstreamBottomNav';
import PageContainer from 'components/PageContainer';
import AppBar from 'components/AppBar';
import AppSideDrawer from 'components/AppSideDrawer';
import AccountBreadCrumb from 'AccountBreadCrumb';
import { fetchAccount, fetchWorkstream, fetchWorkstreamTasks, fetchWorkstreamActivity } from 'dataStore';
import PageContent from 'components/PageContent';
import WorkstreamTasks from 'workstream/WorkstreamTasks';
import WorkstreamActivity from 'workstream/WorkstreamActivity';

const WorkstreamMetrics = () => {
  return 'metrics';
};

export default () => {
  const history = useHistory();
  const matchTabRoute = useRouteMatch('/account/:accountId/workstream/:workstreamId/:tab');
  const { accountId, workstreamId } = useParams();
  const [data, setData] = useState();
  const [navValue, setNavValue] = useState(0);

  if (!accountId || !matchTabRoute) {
    history.push('/');
  }

  useEffect(() => {
    setNavValue(matchTabRoute.params.tab);
  }, [matchTabRoute]);

  useEffect(() => {
    setData({
      account: fetchAccount(accountId),
      workstream: fetchWorkstream(workstreamId),
      tasks: fetchWorkstreamTasks(workstreamId),
      activity: fetchWorkstreamActivity(workstreamId),
    });
  }, [accountId, workstreamId]);

  if (!data) {
    return null;
  }

  const { account, workstream, tasks, activity } = data;
  return (
    <PageContainer>
      <AppSideDrawer title={account.name} />
      <PageContent>
        <Box mb={2}>
          <AccountBreadCrumb account={account} currentCrumbText={workstream.name} />
        </Box>
        <Route path="/account/:accountId/workstream/:workstreamId/tasks">
          <WorkstreamTasks tasks={tasks} />
        </Route>
        <Route path="/account/:accountId/workstream/:workstreamId/activity">
          <WorkstreamActivity activity={activity} />
        </Route>
        <Route path="/account/:accountId/workstream/:workstreamId/metrics">
          <WorkstreamMetrics tasks={tasks} />
        </Route>
      </PageContent>
      <WorkstreamBottomNav
        onNavChange={val => {
          setNavValue(val);
          history.push(`/account/${account.id}/workstream/${workstream.id}/${val}`);
        }}
        navValue={navValue}
      />
    </PageContainer>
  );
};
