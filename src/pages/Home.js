import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header';

function Home () {
  return (
    <div className="App">
      <header className="App-header">
        <Header title="Hi, I'm a component!"/>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello World!
        </h1>
        
        <Link to='/anotherhello'
              className="App-link">
                  Dummie-Page
        </Link>
      </header>
    </div> 
  ); 
}

export default Home;