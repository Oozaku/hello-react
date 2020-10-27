import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import TopPanel from '../components/TopPanel'
import { Typography } from '@material-ui/core';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <TopPanel />

      <Grid container spacing={5} align='center'>

        <Grid item xs={12}>
          <Typography variant='h3' align='center'>Counter 0 to 5!</Typography>
          <Typography variant='h3' align='center' color='primary'>{count}</Typography>
        </Grid>

        <Grid container item xs={12} justify='center'>
          <Button
            color='primary'
            variant='outlined'
            onClick={() => setCount((count + 1) % 6)}>
            Increment it!
          </Button>
        </Grid>
      
      </Grid>
    </div>
    
  );

}

export default Counter;