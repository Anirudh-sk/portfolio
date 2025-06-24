import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Hidden,
  makeStyles,
} from "@material-ui/core";
import theme from "./../../theme/theme";
import * as styles from "../../theme/commonStyles";

const SkillsPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
    },
    mainDiv: {
      backgroundColor: "#e8e8e8",
      margin: "0 auto",
      paddingBottom: "1rem",
    },
    rowDiv: {
      ...styles.rowDiv,
    },
    rowDivider: {
      width: "80%",
      [theme.breakpoints.down("sm")]: {
        width: "95%",
      },
    },
    divider: {
      ...styles.divider,
    },
    headerText: {
      ...styles.headerText,
    },
    sectionHeaderText: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#333",
      marginTop: "2rem",
      marginBottom: "1rem",
    },
    skillsText: {
      marginTop: "2rem",
    },
    listItemText: {
      color: "black",
      fontSize: "1.2rem",
      margin: "0 1rem",
    },
    icon: {
      color: "black",
      fontSize: "2rem",
    },
  });
  const classes = useStyles();

  const technicalSkillsColumn1 = (
    <div>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="bx:bxl-react"
            data-inline="false"
            style={{ fontSize: "2.5rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="React.js"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="cib:mongodb"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="MongoDB"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="ion:logo-javascript"
            data-inline="false"
            style={{ fontSize: "2.2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="JavaScript"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="icomoon-free:html-five"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="HTML"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="simple-icons:css3"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="CSS"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="simple-icons:material-ui"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Material UI"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
    </div>
  );

  const technicalSkillsColumn2 = (
    <div>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="simple-icons:python"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Python"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="bx:bxl-c-plus-plus"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="C++"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="bx:bxl-firebase"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Firebase"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="bx:bxl-nodejs"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Node.js"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="cib:flutter"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Flutter"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="teenyicons:c-solid"
            data-inline="false"
            style={{ fontSize: "2.2rem" }}
          />
        </ListItemIcon>
        <ListItemText primary="C" classes={{ primary: classes.listItemText }} />
      </ListItem>
    </div>
  );

  const productManagementSkillsColumn1 = (
    <div>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="simple-icons:notion"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Notion"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="simple-icons:jira"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Jira"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="simple-icons:confluence"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Confluence"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="mdi:chart-gantt"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Agile/Scrum"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="carbon:data-analytics"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Data Analytics"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="mdi:strategy"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Product Strategy"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
    </div>
  );

  const productManagementSkillsColumn2 = (
    <div>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="mdi:microsoft-excel"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Excel/Sheets"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="simple-icons:figma"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Figma"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="carbon:roadmap"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Roadmapping"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="mdi:account-group"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="Stakeholder Mgmt"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="carbon:user-research"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="User Research"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <span
            className="iconify"
            data-icon="carbon:machine-learning"
            data-inline="false"
            style={{ fontSize: "2rem" }}
          />
        </ListItemIcon>
        <ListItemText
          primary="A/B Testing"
          classes={{ primary: classes.listItemText }}
        />
      </ListItem>
    </div>
  );

  return (
    <Box className={`${classes.columnDiv} ${classes.mainDiv}`}>
      <Typography
        className={`${classes.skillsText} ${classes.headerText}`}
        align="center"
      >
        My Skills 
      </Typography>
      <Divider classes={{ root: classes.divider }} />
      
      {/* Technical Skills Section */}
      <Typography
        className={classes.sectionHeaderText}
        align="center"
      >
        Technical Skills
      </Typography>
      <Box className={`${classes.rowDiv} ${classes.rowDivider}`}>
        <Box className={classes.columnDiv}>
          <List>
            {technicalSkillsColumn1}
            <Hidden mdUp>{technicalSkillsColumn2}</Hidden>
          </List>
        </Box>
        <Hidden smDown>
          <Box className={classes.columnDiv}>
            <List>{technicalSkillsColumn2}</List>
          </Box>
        </Hidden>
      </Box>

      {/* Product Management Skills Section */}
      <Typography
        className={classes.sectionHeaderText}
        align="center"
      >
        Product Management Skills
      </Typography>
      <Box className={`${classes.rowDiv} ${classes.rowDivider}`}>
        <Box className={classes.columnDiv}>
          <List>
            {productManagementSkillsColumn1}
            <Hidden mdUp>{productManagementSkillsColumn2}</Hidden>
          </List>
        </Box>
        <Hidden smDown>
          <Box className={classes.columnDiv}>
            <List>{productManagementSkillsColumn2}</List>
          </Box>
        </Hidden>
      </Box>
    </Box>
  );
};

export default SkillsPage;