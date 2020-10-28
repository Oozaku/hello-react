import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import TopPanel from '../components/TopPanel'
import { Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <TopPanel />

      <Grid container spacing={5} align='center'>

        <Grid item xs={12}>
          <Typography variant='h3' align='center'>Counter 0 to 5!</Typography>
          <br/> 
          <Typography variant='h3' align='center' color='primary'>Count = {count}</Typography>
        </Grid>

        <Grid container item xs={12} justify='center'>
          <Button
            color='primary'
            variant='contained'
            onClick={() => setCount((count + 1) % 6)}>
            <AddCircleIcon style={{ fontSize:  48}}/>
          </Button>
        </Grid>

        <Grid container item xs={12} justify='center'> {/*check if count is a odd or even number*/}
          {
            count % 2 == 0? (
              <Typography variant='h3'>Count is a even number!</Typography>
            ):(
              <Typography variant='h3'>Count is a odd number!</Typography>
            )
          }
        </Grid>

      </Grid>
    </div>
    
  );

}

export default Counter;