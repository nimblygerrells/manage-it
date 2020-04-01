import React from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button } from '@material-ui/core';
import { SentimentDissatisfied } from '@material-ui/icons';

const TaskCard = ({ task }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h3">
          {task.name}
        </Typography>
        <Box mb={3}>
          <Typography color="textSecondary">Status - {task.status || 'not started'}</Typography>
        </Box>
        <Typography variant="body2" component="p">
          {task.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="primary">
          Add Activity
        </Button>
        <Button variant="outlined" color="primary">
          Finish task
        </Button>
      </CardActions>
    </Card>
  );
};

export default ({ tasks }) => {
  const hasTasks = tasks.length > 0;
  if (!hasTasks) {
    return (
      <Box textAlign="center">
        <SentimentDissatisfied />
        <Typography variant="h6">No Tasks</Typography>
      </Box>
    );
  }
  return tasks.map((task, i) => (
    <Box key={i} marginBottom={2}>
      <TaskCard task={task} />
    </Box>
  ));
};
