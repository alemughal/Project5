import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import '../App.css'

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
  heading: {
      fontSize: 25,
      marginLeft: 30,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
         <Typography variant="h6" className="heading" className={classes.heading}>Portfolio</Typography>
         <ul className="lists">
          <li className="list"><Link to="/" className="links">Home</Link></li>
          <li className="list"><Link to="/about" className="links">About</Link></li>
          <li className="list"><Link to="/projects" className="links">Projects</Link></li>
          <li className="list"><Link to="/contact" className="links">Contact Us</Link></li>
        </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
}