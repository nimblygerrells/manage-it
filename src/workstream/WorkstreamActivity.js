import React from 'react';
import {
  Paper,
  Divider,
  Box,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
  ListSubheader,
  ListItemSecondaryAction,
  Button,
} from '@material-ui/core';
import { SentimentDissatisfied } from '@material-ui/icons';
import { formatDistanceToNow } from 'date-fns';

const ActivityListItem = ({ activity, showDivider }) => {
  const timeago = formatDistanceToNow(new Date(activity.created));
  return (
    <>
      {showDivider && <Divider variant="inset" component="li" />}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={activity.user.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={`${activity.user.name} ${timeago} ago logged ${activity.time} ${activity.timeUnit}s`}
          secondary={activity.content}
        />
      </ListItem>
      <Box textAlign="right" margin={1}>
        <Button color="primary" aria-label="reply">
          Reply
        </Button>
      </Box>
    </>
  );
};

export default ({ activity }) => {
  const hasActivity = activity.length > 0;

  if (!hasActivity) {
    return (
      <Box textAlign="center">
        <SentimentDissatisfied />
        <Typography variant="h6">No activity</Typography>
      </Box>
    );
  }

  const activityItems = activity
    .sort((a, b) => b.created - a.created)
    .map((act, i) => <ActivityListItem key={i} activity={act} showDivider={i !== 0 && i + 1 !== activity.length} />);
  return (
    <Paper>
      <List subheader={<ListSubheader component="div">Recent Activity</ListSubheader>}>{activityItems}</List>
    </Paper>
  );
};
