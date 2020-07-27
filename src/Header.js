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
import WorkTwoToneIcon from '@material-ui/icons/WorkTwoTone';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import AccountTreeTwoToneIcon from '@material-ui/icons/AccountTreeTwoTone';

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
  menu: {
    height: '100vh',
  }
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Paper className={classes.paper}>
          <MenuList className={classes.menu}>
            <MenuItem>
              <ListItemIcon>
                <WorkTwoToneIcon fontSize="medium" />
              </ListItemIcon>
              <NavLink to="/contract" 
                style={{ textDecoration: 'none', color: 'black' }} 
                activeStyle={{ color: '#1976D2' }} >
              Договор
              </NavLink>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <AccountBalanceTwoToneIcon fontSize="medium" />
              </ListItemIcon>
              <NavLink to="/organization" 
                style={{ textDecoration: 'none', color: 'black' }} 
                activeStyle={{ color: 'blue' }}>
                  Организация
              </NavLink>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <AccountTreeTwoToneIcon fontSize="medium" />
              </ListItemIcon>
              <NavLink to="/projects" 
                style={{ textDecoration: 'none', color: 'black' }} 
                activeStyle={{ color: 'blue' }}>
                  Проекты
              </NavLink>
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
