import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import {
  MailIcon,
  Home,
  ArrowDropDownCircle,
  Code,
  Work
} from "@material-ui/icons";
import InboxIcon from "@material-ui/icons/InboxOutlined";
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
import resume from "./resume/resume";
import Project from "./project/project";
import Profile from "./profile/profile";
import Contact from "./Contact/Contact";

import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import AccountTreeIcon from "@material-ui/icons/AccountTree";

import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import DescriptionIcon from "@material-ui/icons/Description";
import project from "./project/project";

// const pdf = require("../assets/JithilprakashPJ-Resume.pdf");

const hist = createBrowserHistory();
// const routes = () => (

// );

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#fff",
    color: "#000"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  }
}));

function SideBar() {
  const [pageindex, setPageindex] = useState(0);
  const classes = useStyles();

  const handleClick = text => {
    console.log("clicked", text);
    setPageindex(text);
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
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={classes.appBar}
        style={{ backgroundColor: "#1976D2" }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap>
            SimpleTerms
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper
        }}
        anchor='left'
      >
        {/* <div className={classes.toolbar}>
            Jithilprakash
        </div> */}
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
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {/* <Profile /> */}
        {content()}
        {/* <Contact /> */}
      </main>
    </div>
  );
}

export default withRouter(SideBar);
