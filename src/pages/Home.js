import React from 'react';
import Grid from '@material-ui/core/Grid';
import TopPanel from '../components/TopPanel'
import NewCard from '../components/NewCard';

function Home () {
  return (
    <div>
      <TopPanel />
      <br/><br/>
      <Grid container spacing={5} justify='center'>
        <Grid item xs={12} sm={3} >
          <NewCard title='Another Hello' description='Using grid!' src='/anotherhello'/>
        </Grid>
        <Grid item xs={12} sm={3} >
          <NewCard title='Counter 0 to 5' description='Using useState!' src='/counter'/>
        </Grid>
      </Grid>
    </div> 
  ); 
}

export default Home;