import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';

import Contract  from "./Contract";
import Organization from "./Organization";
import Projects  from "./Projects";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div 
      style={{
      margin: '20px'}} className={classes.root}>
      <Router>
        <Paper className={classes.paper}>
          <MenuList>
            <MenuItem>
              <NavLink to="/contract" style={{ textDecoration: 'none', color: 'black' }} activeStyle={{ color: 'blue' }} >Договор</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/organization" style={{ textDecoration: 'none', color: 'black' }} activeStyle={{ color: 'blue' }}>Организация</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/projects" style={{ textDecoration: 'none', color: 'black' }} activeStyle={{ color: 'blue' }}>Проекты</NavLink>
            </MenuItem>
          </MenuList>
        </Paper>
        <Switch>
          <Route path="/contract" component={Contract}>
            <Contract />
          </Route>
          <Route path="/organization" component={Organization }>
            <Organization />
          </Route>
          <Route path="/projects" component={Projects }>
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
// export default Header;
