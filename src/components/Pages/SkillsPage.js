import React from "react";
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
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
      background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)",
      margin: "0 auto",
      padding: "4rem 0",
      minHeight: "100vh",
    },
    contentContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 2rem",
    },
    rowDiv: {
      ...styles.rowDiv,
    },
    rowDivider: {
      width: "100%",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    divider: {
      background: "rgba(255, 255, 255, 0.3)",
      height: "0.2rem",
      width: "12rem",
      margin: "0 auto 3rem",
      borderRadius: "2px",
    },
    headerText: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "white",
      textAlign: "center",
      marginBottom: "1rem",
      textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    },
    sectionHeaderText: {
      fontSize: "2rem",
      fontWeight: "600",
      color: "white",
      textAlign: "center",
      marginTop: "3rem",
      marginBottom: "2rem",
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    },
    skillsText: {
      marginTop: "2rem",
    },
    skillsGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "3rem",
      marginBottom: "2rem",
      alignItems: "start",
      [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
        gap: "2rem",
      },
    },
    skillCard: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: "16px",
      padding: "2rem",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px)",
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
      },
    },
    listItemText: {
      color: "white",
      fontSize: "1.1rem",
      fontWeight: "500",
    },
    icon: {
      color: "white",
      fontSize: "2rem",
      filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
    },
    listItem: {
      padding: "0.5rem 0",
      borderRadius: "8px",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        transform: "translateX(5px)",
      },
    },
  });
  const classes = useStyles();



  const technicalSkills = [
    { icon: "mdi:web", name: "Web Development" },
    { icon: "simple-icons:python", name: "Python" },
    { icon: "carbon:machine-learning", name: "Machine Learning" },
    { icon: "carbon:ai-results", name: "Artificial Intelligence" },
    { icon: "fluent:chat-bubbles-question-20-filled", name: "Large Language Models" },
    { icon: "mdi:chart-line", name: "Data Analytics" },
    { icon: "cib:mongodb", name: "MongoDB" },
    { icon: "bx:bxl-c-plus-plus", name: "C++" },
    { icon: "bx:bxl-firebase", name: "Firebase" },
    { icon: "bx:bxl-nodejs", name: "Node.js" },
    { icon: "cib:flutter", name: "Flutter" },
    { icon: "teenyicons:c-solid", name: "C" },
  ];

  const productManagementSkills = [
    { icon: "simple-icons:notion", name: "Notion" },
    { icon: "simple-icons:jira", name: "Jira" },
    { icon: "mdi:chart-gantt", name: "Agile/Scrum" },
    { icon: "carbon:data-analytics", name: "Data Analytics" },
    { icon: "mdi:strategy", name: "Product Strategy" },
    { icon: "mdi:microsoft-excel", name: "Excel/Sheets" },
    { icon: "carbon:roadmap", name: "Roadmapping" },
    { icon: "mdi:account-group", name: "Stakeholder Mgmt" },
    { icon: "mdi:chart-box-outline", name: "User Research" },
    { icon: "carbon:machine-learning", name: "A/B Testing" },
  ];

  const renderSkillsList = (skills) => (
    <List>
      {skills.map((skill, index) => (
        <ListItem key={index} className={classes.listItem}>
          <ListItemIcon className={classes.icon}>
            <span
              className="iconify"
              data-icon={skill.icon}
              data-inline="false"
              style={{ fontSize: "2rem" }}
            />
          </ListItemIcon>
          <ListItemText
            primary={skill.name}
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box className={`${classes.columnDiv} ${classes.mainDiv}`}>
      <Box className={classes.contentContainer}>
        <Typography className={classes.headerText}>
          My Skills 
        </Typography>
        <Divider classes={{ root: classes.divider }} />
        
        {/* Skills Cards Container */}
        <Box className={classes.skillsGrid}>
          {/* Product Management Skills Section */}
          <Box>
            <Typography className={classes.sectionHeaderText}>
              Product Management Skills
            </Typography>
            <Box className={classes.skillCard}>
              {renderSkillsList(productManagementSkills)}
            </Box>
          </Box>

          {/* Technical Skills Section */}
          <Box>
            <Typography className={classes.sectionHeaderText}>
              Technical Skills
            </Typography>
            <Box className={classes.skillCard}>
              {renderSkillsList(technicalSkills)}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsPage;