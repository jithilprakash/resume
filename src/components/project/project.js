import React, { Component } from "react";
import {
  Card,
  CardContent,
  Grid,
  CardMedia,
  Typography
} from "@material-ui/core";

export default class project extends Component {
  render() {
    return (
      <Grid container style={{ height: "50vh" }} justify="center" alignItems="center">
        <Card style={{ height: "100%", width: "100%" }}>
          <CardContent>
            <Typography variant='h4'>To be updated soon..</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}
