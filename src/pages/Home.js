import React from 'react';
// import images and styles
import logo from '../logo.svg';
import '../App.css';
// import used components
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
      </header>
    </div> 
  ); 
}

export default Home;