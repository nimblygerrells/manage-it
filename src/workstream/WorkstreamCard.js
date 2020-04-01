import React from 'react';
import { CardActions, Card, CardContent, Typography, Button, Box, Grid } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { format, differenceInBusinessDays } from 'date-fns';
import { fetchWorkstreamMetaData, fetchWorkstream } from 'dataStore';

const WorkstreamCard = ({ workstreamId }) => {
  const history = useHistory();
  const { accountId } = useParams();
  const workstream = fetchWorkstream(workstreamId);
  const meta = fetchWorkstreamMetaData(workstreamId);
  const daysLeft = Math.max(0, differenceInBusinessDays(workstream.endDate, new Date()));

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{workstream.name}</Typography>
        <Box mb={2}>
          <Typography color="textSecondary">{format(workstream.startDate, `'Start' Mo MMMM`)}</Typography>
          <Typography color="textSecondary">{`${daysLeft} days left`}</Typography>
        </Box>
        <Box color="primary.main">
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="body1">
                {meta.completedTasks} / {meta.totalTasks} tasks completed
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">{meta.rollupEstTotal} hours budget</Typography>
            </Grid>
            <Grid item xs={6}>
              <Box color="warning.main">
                <Typography variant="body1">{meta.rollupTimeWorked} hours spent</Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" color="error">
                {meta.rollupAdhocTimeWorked} ad-hoc hours spent
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box mt={2}>
          <Typography variant="body1" color="textSecondary" align="center">
            last updated on Jan 1st
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="outlined"
          color="primary"
          onClick={() => history.push(`/account/${accountId}/workstream/${workstream.id}/activity`)}
        >
          View Activity
        </Button>
      </CardActions>
    </Card>
  );
};

export default WorkstreamCard;
