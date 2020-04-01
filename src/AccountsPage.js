import React from 'react';
import { CardActions, Card, CardContent, Typography, Button, Box } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import PageContainer from 'components/PageContainer';
import PageContent from 'components/PageContent';
import FabPageAction from 'components/FabPageAction';
import AppSideDrawer from 'components/AppSideDrawer';
import { fetchAccounts } from 'dataStore';

const AccountCard = ({ account }) => {
  const history = useHistory();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {account.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="primary" onClick={() => history.push(`/account/${account.id}/workstream`)}>
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default () => {
  const history = useHistory();
  const accounts = fetchAccounts();

  return (
    <PageContainer>
      <AppSideDrawer title="Nimbly" />
      <PageContent>
        {accounts.map((act, i) => (
          <Box key={i} marginBottom={2}>
            <AccountCard account={act} />
          </Box>
        ))}
      </PageContent>
      <FabPageAction color="primary" aria-label="create account" onClick={() => history.push('/account/new')}>
        <Add />
      </FabPageAction>
    </PageContainer>
  );
};
