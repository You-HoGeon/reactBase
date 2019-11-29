import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Intro from './pages/intro';

const App = () => (
  <Router>
    <Switch>
      <Route component={Intro} />
    </Switch>
  </Router>
);

export default App;
