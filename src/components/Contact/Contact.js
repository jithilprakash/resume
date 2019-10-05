import React, { Component } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EmailIcon from "@material-ui/icons/Email";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  Paper,
  Divider,
  Grid,
  Icon,
  Button,
  Fade,
  Snackbar,
  CircularProgress
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const classes = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto"
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
};

export default class Contact extends Component {
  state = {
    expanded: true,
    input1: "",
    name: "",
    email: "",
    message: "",
    open: false,
    Transition: Fade,
    isLoading: false
  };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handleClick = Transition => {
    this.setState({
      open: true,
      Transition
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  sendMail = async () => {
    try {
      this.setState({ isLoading: true });
      const send = await fetch("http://54.242.67.110:3000/sendMail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
        })
      });
      if (send) {
        console.log("Sent Successfully");
        this.handleClick(Fade);
        this.setState({ isLoading: false, name: "", email: "", message: "" });
      }
    } catch (error) {
      console.log("Error happened", error);
      this.setState({ isLoading: false });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.open}
          onClose={() => this.handleClose()}
          TransitionComponent={this.state.Transition}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id='message-id'>Message Sent Successfully</span>}
        />
        <Card className={classes.card}>
          <CardHeader
            action={
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            }
            title='Contact'
            subheader='Jithilprakash P J'
          />
          {/* <CardMedia
            className={classes.media}
            image='/static/images/cards/paella.jpg'
            title='Paella dish'
          /> */}
          <CardContent>
            <Typography variant='subtitle2' gutterBottom>
              PhoneNumber ~ +91 8807756733
            </Typography>
            <Typography variant='subtitle2' gutterBottom>
              Email ~ jithilprakashpj@gmail.com
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {/* <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton> */}
            <Typography variant='body1' gutterBottom style={{ padding: 10 }}>
              Fill out the contact form{" "}
            </Typography>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={() => this.handleExpandClick()}
              aria-expanded={this.state.expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
            <Divider />
            <Card>
              <CardContent>
                <Grid container xs={12}>
                  <Grid item xs={3}>
                    <FormControl style={{ marginRight: 20 }}>
                      <InputLabel htmlFor='input-with-icon-adornment'>
                        Full Name
                      </InputLabel>
                      <Input
                        id='input-with-icon-adornment'
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value })}
                        startAdornment={
                          <InputAdornment position='start'>
                            <AccountCircle />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl style={{ marginRight: 20, width: "100%" }}>
                      <InputLabel htmlFor='input-with-icon-adornment'>
                        Email Id
                      </InputLabel>
                      <Input
                        fullWidth
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value })}
                        id='input-with-icon-adornment'
                        startAdornment={
                          <InputAdornment position='start'>
                            <EmailIcon />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent>
                <Grid container xs={12}>
                  <Grid item xs={9}>
                    <FormControl style={{ marginRight: 20, width: "100%" }}>
                      <InputLabel htmlFor='input-with-icon-adornment'>
                        What do you want to say?
                      </InputLabel>
                      <Input
                        value={this.state.message}
                        onChange={e =>
                          this.setState({ message: e.target.value })
                        }
                        fullWidth
                        multiline={4}
                        id='input-with-icon-adornment'
                        startAdornment={
                          <InputAdornment position='start'>
                            <MessageIcon />
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent>
                <Button
                  variant='contained'
                  style={{
                    padding: 10,
                    width: "100%",
                    backgroundColor: "#1976D2"
                  }}
                  onClick={() => this.sendMail()}
                  disabled={this.state.isLoading}
                >
                  {this.state.isLoading ? (
                    <CircularProgress
                      style={{ height: "20%", color: "#fff" }}
                    />
                  ) : (
                    ""
                  )}{" "}
                  Send
                  {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
                  {/* <Icon className={classes.rightIcon}>Send</Icon> */}
                </Button>
              </CardContent>
            </Card>
          </Collapse>
        </Card>
      </div>
    );
  }
}
