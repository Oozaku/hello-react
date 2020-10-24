import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import AnotherHello from './pages/AnotherHello';

function Routes () {
  return (
    <BrowserRouter>
      <Route component={Home} path='/' exact />
      <Route component={AnotherHello} path='/anotherhello' />
    </BrowserRouter>
    
  );
}

export default Routes;