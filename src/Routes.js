import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import AnotherHello from './pages/AnotherHello';
import Counter from './pages/Counter';

function Routes () {
  return (
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      <Route component={AnotherHello} path='/anotherhello' />
      <Route component={Counter} path='/counter' />
    </BrowserRouter>
    
  );
}

export default Routes;