import React, { Fragment } from 'react';
import {Link, Typography} from '@material-ui/core';

function Copyright() {
    return (
      <Fragment>
        <hr/>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            RelaMa Page
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Fragment>
        
    );
}    

export default Copyright;