import React, { useState } from 'react';
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Button,
  InputAdornment,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Grid,
  Box,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import AccountBreadCrumb from 'AccountBreadCrumb';
import AppSideDrawer from 'components/AppSideDrawer';
import PageContainer from 'components/PageContainer';
import PageContent from 'components/PageContent';
import { addAccount } from 'dataStore';

export default () => {
  const history = useHistory();
  const [act, setAccount] = useState({
    name: '',
    budget: 0,
    hours: 0,
    serviceLine: '',
  });
  const handleChange = field => event => {
    setAccount({ ...act, [field]: event.target.value });
  };

  const submit = event => {
    event.preventDefault();
    addAccount(act);
    history.push('/accounts');
  };

  return (
    <PageContainer>
      <AppSideDrawer title="New Account" />
      <PageContent>
        <Box mb={2}>
          <AccountBreadCrumb currentCrumbText="New Account" />
        </Box>
        <Card>
          <CardContent>
            <Box marginBottom={2}>
              <Typography variant="h6">Account Information</Typography>
            </Box>
            <form autoComplete="off" onSubmit={submit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={act.name}
                    autoFocus
                    label="Account Name"
                    variant="outlined"
                    fullWidth
                    required={true}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleChange('name')}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={act.budget}
                    type="number"
                    label="Budget"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange('budget')}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={act.hours}
                    type="number"
                    label="Hours"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange('hours')}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="service-line-label">Service Line</InputLabel>
                    <Select
                      labelId="service-line-label"
                      id="service-line-select"
                      onChange={handleChange('serviceLine')}
                      labelWidth={92}
                      value={act.serviceLine}
                    >
                      <MenuItem value={'OnDemand'}>OnDemand</MenuItem>
                      <MenuItem value={'Impact'}>Impact</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </PageContent>
    </PageContainer>
  );
};
