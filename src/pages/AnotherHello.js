import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import Header from '../components/Header'

function AnotherHello () {
  return (
    <div className="App">
      <div className="App-header">
        <Header title="I'm another page!" />
        <Link to='/'
              className='App-link'>
            HOME
        </Link>
      </div>
       <p>I'm out of App-header</p>
    </div>
  );
}

export default AnotherHello;