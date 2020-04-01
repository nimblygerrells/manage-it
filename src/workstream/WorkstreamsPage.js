import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@material-ui/core';
import { Add, SentimentSatisfied } from '@material-ui/icons';
import { useHistory, useParams } from 'react-router-dom';
import PageContainer from 'components/PageContainer';
import FabPageAction from 'components/FabPageAction';
import AppBar from 'components/AppBar';
import WorkstreamCard from 'workstream/WorkstreamCard';
import AccountBreadCrumb from 'AccountBreadCrumb';
import { fetchAccount, fetchAccountWorkstreams } from 'dataStore';
import PageContent from 'components/PageContent';
import AppSideDrawer from 'components/AppSideDrawer';

export default () => {
  const history = useHistory();
  const { accountId } = useParams();
  const [data, setData] = useState();

  if (!accountId) {
    history.push('/');
  }

  useEffect(() => {
    setData({
      account: fetchAccount(accountId),
      workstreams: fetchAccountWorkstreams(accountId),
    });
  }, [accountId]);

  if (!data) {
    return null;
  }
  const { account, workstreams } = data;

  return (
    <PageContainer>
      <AppSideDrawer title={account.name} />
      <PageContent>
        <Box mb={2}>
          <AccountBreadCrumb account={account} currentCrumbText="workstreams" />
        </Box>
        {workstreams.length === 0 && (
          <Box textAlign="center">
            <SentimentSatisfied />
            <Typography variant="h6">No Workstreams</Typography>
          </Box>
        )}
        {workstreams.map((ws, i) => (
          <Box key={i} marginBottom={2}>
            <WorkstreamCard workstreamId={ws.id} />
          </Box>
        ))}
      </PageContent>
      {/* <FabPageAction
        color="primary"
        aria-label="create account"
        onClick={() => history.push(`/account/${account.id}/workstream/new`)}
      >
        <Add />
      </FabPageAction> */}
    </PageContainer>
  );
};
