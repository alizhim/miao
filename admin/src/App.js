import React, { Component } from 'react'
import Home from './page/home'
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'
import Layout from './components/layout'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout>
            <Router exact path="/" component={Home} />
            <Redirect from="*" to="/" />
          </Layout>
        </Switch>
      </Router>
    )
  }
}

