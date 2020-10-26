import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header';
import TopPanel from '../components/TopPanel'

function Home () {
  return (
    <div>
      <TopPanel />
      <Typography variant='h1'>Hello World!</Typography>
      <Link href='/anotherhello'>
        <Typography  color='primary'>Another Hello</Typography>
      </Link>
    </div> 
  ); 
}

export default Home;