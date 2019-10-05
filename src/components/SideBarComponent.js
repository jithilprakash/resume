import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Icon, Button } from "@material-ui/core";
import {
  Router,
  Route,
  Switch,
  Redirect,
  Link,
  withRouter
} from "react-router-dom";
import { createBrowserHistory } from "history";

import Main from "./main/main";

import Project from "./project/project";
import Profile from "./profile/profile";
import Contact from "./Contact/Contact";

import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AccountTreeIcon from "@material-ui/icons/AccountTree";

import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import DescriptionIcon from "@material-ui/icons/Description";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function SideBarComponent(props) {
  const [pageindex, setPageindex] = useState(0);
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const content = () => {
    if (pageindex == 0) {
      return <Main />;
    } else if (pageindex == 1) {
      return <Profile />;
    } else if (pageindex == 2) {
      return <Contact />;
    } else if (pageindex == 3) {
      return <Project />;
    }
  };

  const getIcon = index => {
    if (index == 0) {
      return <HomeIcon />;
    } else if (index == 1) {
      return <FaceIcon />;
    } else if (index == 2) {
      return <ContactMailIcon />;
    } else if (index == 3) {
      return <AccountTreeIcon />;
    } else if (index == 4) {
      return <DeveloperModeIcon />;
    } else if (index == 5) {
      return <DescriptionIcon />;
    }
  };

  const handleClick = text => {
    console.log("clicked", text);
    setPageindex(text);
  };

  const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}
      <Divider />
      <List>
        {["Home", "Profile", "Contact Me", "Projects", "Git Page"].map(
          (text, index) => (
            <>
              <ListItem button key={text} onClick={() => handleClick(index)}>
                <ListItemIcon color='primary'>{getIcon(index)}</ListItemIcon>
                {/* <Link to='/profile'>Home</Link> */}

                <ListItemText primary={text} />
              </ListItem>
              {index == 3 ? <Divider /> : ""}
            </>
          )
        )}
        <div
          style={{
            width: "100%",
            padding: 15,
            height: 40,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <>
            <Button variant='contained' color='primary'>
              <DescriptionIcon />
              <Link
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  padding: 5,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                to='/JithilprakashPJ-Resume.pdf'
                target='_blank'
                download
              >
                Download Resume
              </Link>
            </Button>
          </>
        </div>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Jithilprakash P J
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            container={container}
            variant='temporary'
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {content()}
      </main>
    </div>
  );
}

SideBarComponent.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default SideBarComponent;
