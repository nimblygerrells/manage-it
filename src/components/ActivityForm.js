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
import { AccountCircle, Message } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import AccountBreadCrumb from 'AccountBreadCrumb';
import AppSideDrawer from 'components/AppSideDrawer';
import PageContainer from 'components/PageContainer';
import PageContent from 'components/PageContent';
import { addAccount } from 'dataStore';

export default ({ onCreateActivity }) => {
  const history = useHistory();
  const [activity, setActivity] = useState({
    content: '',
    time: 0,
    timeUnit: 'hour',
    assignee: false,
    replies: [],
  });
  const handleChange = field => event => {
    setActivity({ ...activity, [field]: event.target.value });
  };

  const submit = event => {
    event.preventDefault();
    onCreateActivity(activity);
  };

  return (
    <Card>
      <CardContent>
        <Box marginBottom={2}>
          <Typography variant="h6">Activity</Typography>
        </Box>
        <form autoComplete="off" onSubmit={submit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                value={activity.content}
                autoFocus
                label="Activity"
                variant="outlined"
                fullWidth
                multiline
                helperText="...BPR practice run..."
                required={true}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Message />
                    </InputAdornment>
                  ),
                }}
                onChange={handleChange('content')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={activity.time}
                required
                type="number"
                label="Time"
                variant="outlined"
                fullWidth
                onChange={handleChange('time')}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
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
                  value={activity.assignee}
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
  );
};
