import React from 'react';
import Typography from '@material-ui/core/Typography';

function Header(prop) {
  return (
  <Typography variant='h1'>{prop.title}</Typography>
  );
}

export default Header;