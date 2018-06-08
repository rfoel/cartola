import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import history from './history'

import DefaultLayout from '../views/layouts/DefaultLayout'
import IndexView from '../views/IndexView'
import ErrorView from '../views/ErrorView'

class Routing extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <DefaultLayout>
              <IndexView />
            </DefaultLayout>
          </Route>
          <Route component={ErrorView} />
        </Switch>
      </Router>
    )
  }
}

export default Routing
