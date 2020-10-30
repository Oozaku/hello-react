import React from 'react';
import Grid from '@material-ui/core/Grid';
import TopPanel from '../components/TopPanel'
import NewCard from '../components/NewCard';

const cardsInfo = [
  {
    title: 'Another Hello',
    description: 'Using grid!',
    link: '/anotherhello',
  },
  {
    title: 'Counter 0 to 5',
    description: 'Using useState!',
    link: '/counter',
  },
  {
    title: 'Playing with Fake API',
    description: 'Using axios to get an fake API and practicing useEffect and useState',
    link: '/playwithfakeapi',
  }
];

function Home () {
  return (
    <div>
      <TopPanel />
      <br/><br/>
      <Grid container spacing={5} justify='center'>
        {cardsInfo.map((card) => {
          return (
            <Grid item xs={12} sm={3}>
              <NewCard {...card} />
            </Grid>
          );
        })};        
      </Grid>
    </div> 
  ); 
}

export default Home;