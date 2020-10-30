import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import AnotherHello from './pages/AnotherHello';
import Counter from './pages/Counter';
import PlayWithFakeAPI from './pages/PlayWithFakeAPI';

function Routes () {
  return (
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      <Route component={AnotherHello} path='/anotherhello' />
      <Route component={Counter} path='/counter' />
      <Route component={PlayWithFakeAPI} path='/playwithfakeapi' />
    </BrowserRouter>
    
  );
}

export default Routes;