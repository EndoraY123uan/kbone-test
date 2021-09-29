import React from 'react'
import { BrowserRouter as Router, Route, Redirect, useHistory, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";
import routeConfig from '../config/route.config'

import Home from '../src/pages/home'
import Mine from '../src/pages/mine'
import TabLayout from './layouts/TabLayout'
import Test from './pages/test'
import './App.css';

const history = createBrowserHistory();
function App() {
  const History = useHistory();

  return (
    <Router>
      <Redirect from='/' to='/index/home' />
      <Route path='/test' extra component={Test} />
      <Route path='/index' component={TabLayout} />
    </Router>
  );
}

export default App;
