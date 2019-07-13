import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './components/Main'
import PageNotFound from './components/PageNotFound'

import './assets/css/index.css'

const app = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
)


export default app