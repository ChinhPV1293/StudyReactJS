import React from 'react';
import {Link, Typography} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            RelaMa Page <FavoriteBorderIcon />
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
    );
} 

export default Copyright;