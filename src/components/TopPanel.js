import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import '../App.css';

function TopPanel() {

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Link href='/' color='inherit'>
                HOME
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopPanel;