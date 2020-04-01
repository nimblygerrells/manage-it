import React, { useState, useEffect } from 'react';
import { TextField, Card, CardContent, Typography, Button, InputAdornment, Grid, Box } from '@material-ui/core';
import { Alarm, Message } from '@material-ui/icons';

const defaultFormState = {
  content: '',
  time: false,
  timeUnit: 'hour',
  replies: [],
};
const stateStorageKey = 'mit-activityForm';
const loadState = () => JSON.parse(localStorage.getItem(stateStorageKey)) || { ...defaultFormState };

export default ({ onCreateActivity }) => {
  const [activity, setActivity] = useState(loadState());
  useEffect(() => {
    localStorage.setItem(stateStorageKey, JSON.stringify(activity));
  }, [activity]);

  const handleChange = field => event => {
    setActivity({ ...activity, [field]: event.target.value });
  };
  const submit = event => {
    event.preventDefault();
    onCreateActivity && onCreateActivity(activity);
    setActivity(defaultFormState);
  };

  return (
    <Card>
      <CardContent>
        <Box marginBottom={2}>
          <Typography variant="h6">Activity</Typography>
        </Box>
        <form autoComplete="off" onSubmit={submit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                value={activity.content}
                autoFocus
                label="Activity"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                helperText="What did I do?"
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
            <Grid item xs={12}>
              <TextField
                value={activity.time}
                required={true}
                type="number"
                label="Time (hours)"
                variant="outlined"
                helperText="How long did it take?"
                fullWidth
                onChange={handleChange('time')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Alarm />
                    </InputAdornment>
                  ),
                }}
              />
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
