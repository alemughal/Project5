import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

function NavBar() {
  const classes = useStyles();
  const [mobileMenuEl, setmobileMenuEl] = useState(null);
  const ismobileMenuOpen = Boolean(mobileMenuEl);
  
  const openMobileMenu = (event) => {
      setmobileMenuEl(event.currentTarget)
  }

  const closeMobileMenu = () => {
      setmobileMenuEl(null)
}

  

  const mobileMenu = (
    <Menu
      anchorEl={mobileMenuEl}
      id="mobile-menu"
      keepMounted
      open={ismobileMenuOpen}
    >
      <MenuItem component={Link} onClick={closeMobileMenu} to="/">
        Home
      </MenuItem>
      <MenuItem component={Link} onClick={closeMobileMenu} to="/about">
        About
      </MenuItem>
      <MenuItem component={Link} onClick={closeMobileMenu} to="/projects">
        Projects
      </MenuItem>
      <MenuItem component={Link} onClick={closeMobileMenu} to="/contact">
        Contact
      </MenuItem>
    </Menu>
  );

  return (
    <Container disableGutters={true} maxWidth="xl">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          <div className={classes.sectionDesktop}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/projects">
              Projects
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </div>
          <IconButton color="inherit" onClick={openMobileMenu}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {mobileMenu}
    </Container>
  );
}

export default NavBar;
