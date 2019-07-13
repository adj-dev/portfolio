import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SplashPage from './components/SplashPage'

import './assets/css/index.css'

const app = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={SplashPage} />
    </Switch>
  </Router>
)


export default app