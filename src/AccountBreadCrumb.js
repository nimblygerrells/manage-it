import React from 'react';
import { Breadcrumbs, Typography } from '@material-ui/core';
import RouterLink from './components/RouterLink';

const AccountBreadCrumb = ({ account, workstream, currentCrumbText }) => {
  let accountCrumb;
  if (account) {
    accountCrumb = (
      <RouterLink color="inherit" to={`/account/${account.id}/workstream`}>
        {account.name}
      </RouterLink>
    );
  }

  let workstreamCrumb;
  if (workstream) {
    workstreamCrumb = (
      <RouterLink
        color="inherit"
        to={`/account/${account.id}/workstream/${workstream.id}`}
      >
        {workstream.name}
      </RouterLink>
    );
  }

  let currentCrumb;
  if (currentCrumbText) {
    currentCrumb = (
      <Typography color="textPrimary">{currentCrumbText}</Typography>
    );
  }

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumbs">
      <RouterLink color="inherit" to="/accounts">
        accounts
      </RouterLink>
      {accountCrumb}
      {workstreamCrumb}
      {currentCrumb}
    </Breadcrumbs>
  );
};

export default AccountBreadCrumb;
