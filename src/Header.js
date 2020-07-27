import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Contract  from "./Contract";
import Organization from "./Organization";
import Button from '@material-ui/core/Button';

class Header extends Component {
  
  render() {
    return (
      <div 
        style={{
        margin: '20px'}}>
        <Router>
          <Button variant="contained" style={{ margin: '0 10px' }}>
            <NavLink to="/contract" style={{ textDecoration: 'none', color: 'black' }} activeStyle={{ color: 'blue' }} >Договор</NavLink>
          </Button>
          <Button variant="contained" >
            <NavLink to="/organization" style={{ textDecoration: 'none', color: 'black' }} activeStyle={{ color: 'blue' }}>Организация</NavLink>
          </Button>

          <Switch>
            <Route path="/contract" component={Contract}>
              <Contract />
            </Route>
            <Route path="/organization" component={Organization }>
              <Organization />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default Header;
