import React, { Component } from "react";
import { Container, Grid, Avatar } from "@material-ui/core";

export default class main extends Component {
  render() {
    return (
      <>
        <div
          style={{
            height: 250,
            width: "100%",
            backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/5a9357eb96d455657d707e62/1557344962243-0VTKF6INXYDL6J3CUL3M/ke17ZwdGBToddI8pDm48kMPu3vAJVIO2ksrI68T0UXN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mxU0godxi02JM9uVemPLqxZRccujZ0JBEEuCWjyuHp4fVbeDgUc_jnUPuWllkKthw/material-design-bg-37.jpg?format=2500w")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <Grid
            container
            style={{ height: "100%", width: "100%" }}
            justify='center'
            alignItems='flex-start'
          >
            <Avatar
              alt='Remy Sharp'
              src='https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/32747845_1307743332690850_8734051373508722688_n.jpg?_nc_cat=110&_nc_oc=AQmDn2kDCVaMrb55hyDtf7KjLQIoqxRG9CkemjzK_GlKqqJTEMFow2MdBTps_HtiPzY&_nc_ht=scontent-bom1-1.xx&oh=83cd634e3f33b5d0c37f874328ab60f9&oe=5E368D1E'
              style={{
                margin: 10,
                width: 150,
                height: 150
              }}
            />
          </Grid>

          <Grid
            container
            direction='column'
            justify='space-around'
            alignItems='center'
          >
            <div style={{ fontSize: 40, fontWeight: "bold", color: "#757575" }}>
              Jithilprakash P J
            </div>
            <div style={{ fontSize: 20, fontWeight: "bold", color: "#757575" }}>
              Full Stack Developer
            </div>

            <div
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "#00BCD4"
              }}
            >
              Never failed to meet the project deadline
            </div>
            {/* <Grid
              container
              justify='center'
              alignItems='center'
              style={{ padding: 0, margin: 0 }}
            >
              <h1 style={{ color: "#03A9F4", fontSize: 40 }}>
                Jithilprakash PJ
              </h1>
            </Grid>
            <Grid
              container
              justify='center'
              alignItems='center'
              style={{ padding: 0, margin: 0 }}
            >
              <h1 style={{ color: "#03A9F4", fontSize: 40 }}>
                Jithilprakash PJ
              </h1>
            </Grid> */}
          </Grid>
        </div>
      </>
    );
  }
}
