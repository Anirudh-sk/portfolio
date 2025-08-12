import React from "react";
import {
  Box,
  Typography,
  Link,
  IconButton,
  Divider,
  Tooltip,
  makeStyles,
  Zoom,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import theme from "../../theme/theme";
import * as styles from "../../theme/commonStyles";

const ContactPage = () => {
  const useStyles = makeStyles({
    mainDiv: {
      backgroundColor: "#0f0f23",
      position: "relative",
      bottom: "0",
      marginTop: "5rem",
      paddingTop: "1rem",
      paddingBottom: "0.6rem",
    },
    columnDiv: {
      ...styles.columnDiv,
    },
    rowDiv: {
      ...styles.rowDiv,
    },
    headerText: {
      ...styles.headerText,
    },
    contactText: {
      color: "#eeeeee",
      margin: "0.5rem",
      textShadow: "0.1rem 0.1rem #4f4f4f",
    },
    divider: {
      ...styles.divider,
    },
    contactDivider: {
      backgroundColor: "#eeeeee",
    },
    emailText: {
      color: "#eeeeee",
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    link: {
      fontSize: "1.1rem",
      fontWeight: 500,
    },
    icon: {
      color: "#eeeeee",
      [theme.breakpoints.down("xl")]: {
        margin: "0.2rem 1.4rem",
      },
      [theme.breakpoints.down("md")]: {
        margin: "0.2rem 0.5rem",
      },
      [theme.breakpoints.down("sm")]: {
        margin: "0.1rem",
      },
    },
    github: {
      fontSize: "2.2rem",
    },
    linkedIn: {
      fontSize: "2.7rem",
    },
    twitter: {
      fontSize: "2.6rem",
    },
  });
  const classes = useStyles();

  const icons = (
    <Box className={classes.rowDiv} id="Contact">
      <Tooltip title="LinkedIn" arrow TransitionComponent={Zoom}>
        <IconButton
          className={classes.icon}
          aria-label="LinkedIn Link"
          onClick={() =>
            window.open("https://www.linkedin.com/in/sai-anirudh-415001168/")
          }
        >
          <LinkedInIcon className={classes.linkedIn} />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub" arrow TransitionComponent={Zoom}>
        <IconButton
          className={classes.icon}
          aria-label="GitHub link"
          onClick={() => window.open("https://github.com/Anirudh-sk/")}
        >
          <GitHubIcon className={classes.github} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Youtube" arrow TransitionComponent={Zoom}>
        <IconButton
          className={classes.icon}
          aria-label="CodePen link"
          onClick={() => window.open("https://www.youtube.com/channel/UCKLY6OwlHxGRMAyQzI5DvdA")}
        >
          <span
            className="iconify"
            data-icon="akar-icons:youtube"
            data-inline="false"
            style={{ fontSize: "2.8rem" }}
          />
        </IconButton>
      </Tooltip>
      
    </Box>
  );

  return (
    <Box className={`${classes.columnDiv} ${classes.mainDiv}`}>
      <Typography className={`${classes.headerText} ${classes.contactText}`}>
        Contact Me
      </Typography>
      <Divider
        classes={{ root: `${classes.divider} ${classes.contactDivider}` }}
      />
      <Box className={classes.rowDiv}>
        <Typography className={classes.emailText}>
          Email:&nbsp;&nbsp;&nbsp;
        </Typography>
        <Link href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=amazinganirudhhere@gmail.com" className={classes.link}>
          amazinganirudhhere@gmail.com
        </Link>
      </Box>
      {icons}
    </Box>
  );
};

export default ContactPage;
