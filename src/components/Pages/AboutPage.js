import React from "react";
import { Box, Typography, Divider, Link, makeStyles } from "@material-ui/core";
import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";
import picture from "./../../images/picture.jpg";

import SkillsPage from "./SkillsPage";

const AboutPage = () => {
  const useStyles = makeStyles({
    columnDiv: {
      ...styles.columnDiv,
    },
    mainDiv: {
      background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)",
      padding: "4rem 0",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
    },
    contentContainer: {
      [theme.breakpoints.down("xl")]: {
        width: "45%",
      },
      [theme.breakpoints.down("lg")]: {
        width: "50%",
      },
      [theme.breakpoints.down("md")]: {
        width: "60%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "80%",
      },
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
      margin: "0 auto",
      backgroundColor: "rgba(26, 26, 46, 0.9)",
      borderRadius: "20px",
      padding: "3rem",
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    headerText: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "1rem",
      background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textAlign: "center",
    },
    divider: {
      background: "linear-gradient(45deg, #667eea 30%, #764ba2 90%)",
      height: "0.2rem",
      width: "12rem",
      margin: "0 auto 2rem",
      borderRadius: "2px",
    },
    bodyText: {
      fontSize: "1.1rem",
      color: "#e2e8f0",
      maxWidth: "100%",
      lineHeight: "1.8",
      marginBottom: "2rem",
      textAlign: "left",
    },
    link: {
      color: "#667eea",
      textDecoration: "none",
      fontWeight: "600",
      borderBottom: "2px solid transparent",
      transition: "all 0.3s ease",
      "&:hover": {
        color: "#764ba2",
        borderBottom: "2px solid #764ba2",
        cursor: "pointer",
      },
    },
    picture: {
      width: "280px",
      height: "280px",
      objectFit: "cover",
      borderRadius: "50%",
      margin: "2rem auto",
      display: "block",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      border: "4px solid rgba(255, 255, 255, 0.2)",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)",
      },
      [theme.breakpoints.down("md")]: {
        width: "240px",
        height: "240px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "200px",
        height: "200px",
      },
    },
  });
  const classes = useStyles();

  const scrollToContact = () => {
    const element = document.getElementById("Contact");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Box className={classes.mainDiv} id="AboutMe">
        <Box className={`${classes.columnDiv} ${classes.contentContainer}`}>
          <Typography className={classes.headerText}>
            About Me
          </Typography>
          <Divider classes={{ root: classes.divider }} />
          
          <Box
            component="img"
            src={picture}
            alt="A picture of me"
            className={classes.picture}
          />
          
          <Typography className={classes.bodyText}>
            My name is <b>K Sai Anirudh</b><br /><br />
            I'm a <b>Technical Product Manager</b> specializing in <b>0-to-1 product development</b> and scaling solutions
            that drive real business impact. With a strong engineering background, I excel at building products from initial
            concept through successful launch and growth.<br /><br />

            <b>What I bring:</b><br />
            • <b>End-to-end product ownership</b> — from user research and strategy to technical architecture decisions<br />
            • <b>Cross-functional team leadership</b> — aligning engineering, design, and business stakeholders<br />
            • <b>Scalable system design</b> — including patent-pending architecture focused on performance and data privacy<br />
            • <b>Technical trade-off expertise</b> — making informed decisions between speed, quality, and technical debt<br /><br />

            I thrive at the intersection of technical feasibility and user needs, turning complex problems into elegant solutions.
            My hands-on development experience allows me to work seamlessly with engineering teams while maintaining a sharp
            focus on business outcomes and user experience. I'm passionate about building products that solve real problems
            and create lasting value.
            {" "}
            <Link
              onClick={scrollToContact}
              className={classes.link}
              underline="none"
            >
              Let's connect
            </Link>
            .
          </Typography>
        </Box>
      </Box>
      <SkillsPage />
    </div>
  );
};

export default AboutPage;
