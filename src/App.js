import logo from './logo.svg';
import './App.css';
import Catalogue from './Pages/Catalogue'
import Confirm from './Pages/Confirm'
import ThankYou from './Pages/ThankYou'
import { makeStyles } from '@material-ui/core/styles';
import headerImg from './asserts/images/Header.png'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function App() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div className= "App-header-c">
            <div>
              <img src={headerImg}></img>
            </div>
            <div>
              <span style={{ float: 'right' }}>3000</span>
            </div>
          </div>

        </Toolbar>
      </AppBar>
      <Router>
        <div>
          <Switch>
            <Route path="/product/:productId">
              <Confirm />
            </Route>
            <Route path="/ok">
              <Confirm />
            </Route>
            <Route path="/">
              <Catalogue />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>

  );
}
