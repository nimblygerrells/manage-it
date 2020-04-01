import React from 'react';
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

export default props => <Link {...props} component={RouterLink} />;
