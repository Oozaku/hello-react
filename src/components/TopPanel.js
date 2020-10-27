import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

function TopPanel() {

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Link href='/' color='inherit'>
                HOME
          </Link>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default TopPanel;