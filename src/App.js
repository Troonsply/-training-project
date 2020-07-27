import React, { Component } from 'react';

import {
  Route,
  Switch,
  Redirect,
  BrowserRouter
} from "react-router-dom"

import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path='/home' component={Header} />
            <Redirect from='/' to='/home'/>
          </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
