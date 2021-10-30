import React from "react";
import { Switch, Route, withRouter } from 'react-router-dom'
import Login from './pages/Login/index.js'
import Coding from './pages/Coding/index.js'

const RouteViews = ({ auth }) => (
  <Switch>
    <Route exact path="/"
      render={ props => <Login {...props} /> }
    />
    <Route exact path="/coding"
      render={ props => <Coding {...props} /> }
    />
  </Switch>
);


export default withRouter(RouteViews);