import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import {
  Container,
  Grid,
  Avatar,
  Paper,
  Chip,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Divider,
  Icon,
  CardHeader
} from "@material-ui/core";
import {
  skillset,
  frontend,
  cssFramework,
  backend,
  uitools,
  database
} from "../../data/profile";

export default class profile extends Component {
  render() {
    const bull = (
      <span
        style={{
          display: "inline-block",
          margin: "0 2px",
          transform: "scale(0.8)"
        }}
      >
        •
      </span>
    );
    return (
      <div>
        <Card
          style={{
            minWidth: 275,
            marginBottom: 10
          }}
        >
          <CardContent>
            <Typography
              style={{
                fontSize: 14,
                color: "#000"
              }}
              color='textSecondary'
              gutterBottom
            >
              Name
            </Typography>
            <Typography
              style={{ color: "#757575" }}
              variant='h4'
              component='h2'
            >
              JITHILPRAKASH PJ
            </Typography>
          </CardContent>
        </Card>

        {/* //Objective starts here */}
        <Card
          style={{
            minWidth: 275,
            marginBottom: 10
          }}
        >
          <CardContent>
            <Typography component='h5' variant='h5'>
              Objective
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              style={{ color: "#757575", fontWeight: "normal" }}
              variant='h6'
            >
              Expertise in UI/UX designing, Web Designing, Mobile/ Web
              Application development. Best knowledge in developing enterprise
              level application
            </Typography>
          </CardContent>
        </Card>

        <Card
          style={{
            minWidth: 275,
            marginBottom: 10
          }}
        >
          <CardContent>
            <Typography component='h5' variant='h5'>
              SkillSet
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              style={{
                fontSize: 16,
                color: "#000"
              }}
              color='textSecondary'
              gutterBottom
            >
              Languages
            </Typography>

            {skillset.map((skill, index) => {
              return (
                <Chip
                  label={skill.name}
                  style={{ backgroundColor: "#fef", marginRight: 20 }}
                  size='medium'
                  avatar={<Avatar src={skill.iconUrl} />}
                />
              );
            })}
          </CardContent>

          <CardContent>
            <Typography
              style={{
                fontSize: 16,
                color: "#000"
              }}
              color='textSecondary'
              gutterBottom
            >
              Front-End Frameworks
            </Typography>

            {frontend.map((skill, index) => {
              return (
                <Chip
                  label={skill.name}
                  style={{ backgroundColor: "#fef", marginRight: 20 }}
                  size='medium'
                  avatar={<Avatar src={skill.iconUrl} />}
                />
              );
            })}
          </CardContent>

          <CardContent>
            <Typography
              style={{
                fontSize: 16,
                color: "#000"
              }}
              color='textSecondary'
              gutterBottom
            >
              CSS Frameworks
            </Typography>

            {cssFramework.map((skill, index) => {
              return (
                <Chip
                  label={skill.name}
                  style={{ backgroundColor: "#fef", marginRight: 20 }}
                  size='medium'
                  avatar={<Avatar src={skill.iconUrl} />}
                />
              );
            })}
          </CardContent>

          <CardContent>
            <Typography
              style={{
                fontSize: 16,
                color: "#000"
              }}
              color='textSecondary'
              gutterBottom
            >
              Back-End Frameworks
            </Typography>

            {backend.map((skill, index) => {
              return (
                <Chip
                  label={skill.name}
                  style={{ backgroundColor: "#fef", marginRight: 20 }}
                  size='medium'
                  avatar={<Avatar src={skill.iconUrl} />}
                />
              );
            })}
          </CardContent>

          <CardContent>
            <Typography
              style={{
                fontSize: 16,
                color: "#000"
              }}
              color='textSecondary'
              gutterBottom
            >
              Database
            </Typography>

            {database.map((skill, index) => {
              return (
                <Chip
                  label={skill.name}
                  style={{ backgroundColor: "#fef", marginRight: 20 }}
                  size='medium'
                  avatar={<Avatar src={skill.iconUrl} />}
                />
              );
            })}
          </CardContent>

          <CardContent>
            <Typography
              style={{
                fontSize: 16,
                color: "#000"
              }}
              color='textSecondary'
              gutterBottom
            >
              UI tools
            </Typography>

            {uitools.map((skill, index) => {
              return (
                <Chip
                  label={skill.name}
                  style={{ backgroundColor: "#fef", marginRight: 20 }}
                  size='medium'
                  avatar={<Avatar src={skill.iconUrl} />}
                />
              );
            })}
          </CardContent>
        </Card>

        <Card style={{ marginBottom: 10 }}>
          <CardContent>
            <Typography component='h5' variant='h5'>
              Experience
            </Typography>
          </CardContent>
          <CardContent>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>KGISL (Current)</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>Will not be revealed</Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography>Infosys Pvt Ltd (2018-2019)</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <h3>LEX - Learning Platform</h3>
                  An Enterprise level application implemented using open source
                  ‘Sunbird Project’. It is a Learning platform with offline
                  features and supports various formats like web pages, quiz,
                  pdf, video etc.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2a-content'
                id='panel2a-header'
              >
                <Typography>Chain-Sys (2017-2018)</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <h3>App Visualization</h3>A business intelligence tool with
                  which any raw data extracted out of the processes involved in
                  data integration can be converted into various dashboards so
                  that a detailed analysis can be performed with it
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel2a-content'
                id='panel2a-header'
              >
                <Typography>Other Works</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Card style={{ width: "100%" }}>
                  <CardContent>
                    <Typography>
                      BlingElements - As Creative designer
                    </Typography>
                  </CardContent>
                  <Divider />
                  <CardContent>
                    <Typography>
                      CSC Computer Education - As Teaching Faculty for Web &
                      Graphic Designing
                    </Typography>
                  </CardContent>
                </Card>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </CardContent>
        </Card>

        <Card style={{ marginBottom: 10 }}>
          <CardContent>
            <Typography component='h5' variant='h5'>
              Education
            </Typography>
          </CardContent>
          <CardContent style={{ marginLeft: 20, marginBottom: 10, padding: 0 }}>
            <Typography variant='subtitle2' gutterBottom>
              <strong>MSc. Software Systems (Integrated Course)</strong>
            </Typography>
            <Typography variant='body1' gutterBottom>
              PSG College of Arts and Science
            </Typography>
          </CardContent>

          <CardContent style={{ marginLeft: 20, marginBottom: 10, padding: 0 }}>
            <Typography variant='subtitle2' gutterBottom>
              <strong>Higher Secondary School</strong>
            </Typography>
            <Typography variant='body1' gutterBottom>
              Keartimaan Higher Secondary
            </Typography>
          </CardContent>

          <CardContent style={{ marginLeft: 20, marginBottom: 10, padding: 0 }}>
            <Typography variant='subtitle2' gutterBottom>
              <strong>SSLC</strong>
            </Typography>
            <Typography variant='body1' gutterBottom>
              S.E.S Matriculation school
            </Typography>
          </CardContent>
        </Card>

        {/* Objective ends here */}
      </div>
    );
  }
}
