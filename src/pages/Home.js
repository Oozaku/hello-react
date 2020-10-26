import React from 'react';
import '../App.css';
import Grid from '@material-ui/core/Grid';
import TopPanel from '../components/TopPanel'
import NewCard from '../components/NewCard';

function Home () {
  return (
    <div>
      <TopPanel />
      <Grid container spacing={5} justify='center'>
        <Grid item xs={12} sm={3} >
          <NewCard />
        </Grid>
        <Grid item xs={12} sm={3} >
          <NewCard />
        </Grid>
      </Grid>
    </div> 
  ); 
}

export default Home;