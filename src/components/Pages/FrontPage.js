import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Fab,
  Hidden,
  makeStyles,
} from "@material-ui/core";
import backgroundImage from "./../../images/background.gif";
import theme from "../../theme/theme";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const FrontPage = () => {
  const useStyles = makeStyles({
    background: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center top",
      backgroundRepeat: "no-repeat",
      // backgroundAttachment: "scroll",
      backgroundSize: "cover",
      [theme.breakpoints.down("xs")]: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "left center",
        backgroundAttachment: "scroll",
      },
      color:"white"
    },
    name: {
      position: "relative",
      top: "6rem",
      margin: "0.5rem 1rem",
      fontWeight: "bold",
      [theme.breakpoints.down("xs")]: {
        top: "4rem",
        fontSize: "3.4rem",
      },
      [theme.breakpoints.up("lg")]: {
        top: "7rem",
        fontSize: "5rem",
        color:"white"
      },
    },
    topText: {
      position: "relative",
      top: "6rem",
      margin: "0 1.4rem",
      [theme.breakpoints.down("xs")]: {
        top: "4rem",
        fontSize: "2.5rem",
      },
      [theme.breakpoints.up("lg")]: {
        top: "7rem",
        fontSize: "4rem",
      },
      color:"white"
    },
    bottomText: {
      position: "relative",
      top: "6rem",
      margin: "0 1.4rem",
      fontSize: "1.1rem",
      [theme.breakpoints.down("xs")]: {
        top: "4rem",
        fontSize: "1rem",
        color:"white"
      },
      [theme.breakpoints.up("lg")]: {
        top: "7rem",
        fontSize: "1.4rem",
      },
    },
    button: {
      position: "relative",
      top: "9rem",
      fontSize: "3.75rem",
      [theme.breakpoints.down("xs")]: {
        top: "6rem",
        fontSize: "3.5rem",
      },
      color:"white"
    },
    backToTopButton: {
      position: "fixed",
      bottom: "0",
      right: "0",
      margin: "1rem",
      zIndex: "99999",
    },
    backToTopButtonMobile: {
      margin: "0.8rem",
      marginBottom: "3rem",
    },
  });
  const classes = useStyles();

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box className={classes.background} id="Top">
      <Typography className={classes.topText} variant="h3" align="center">
        Hi, Welcome to the 127.0.0.1 of
      </Typography>
      <Typography className={classes.name} variant="h2" align="center">
        K Sai Anirudh.
      </Typography>
      <IconButton
        className={classes.button}
        aria-label="Scroll Down"
        onClick={() => scrollTo("AboutMe")}
      >
        <span
          className="iconify"
          data-icon="bi:chevron-compact-down"
          data-inline="false"
        />
      </IconButton>
      <Hidden xsDown>
        <Fab
          className={classes.backToTopButton}
          variant="extended"
          size="small"
          aria-label="Back to Top"
          onClick={() => scrollTo("Top")}
        >
          <KeyboardArrowUpIcon />
          Back to Top
        </Fab>
      </Hidden>
      <Hidden smUp>
        <Fab
          className={`${classes.backToTopButton} ${classes.backToTopButtonMobile}`}
          size="small"
          aria-label="Back to Top"
          onClick={() => scrollTo("Top")}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Hidden>
    </Box>
  );
};

export default FrontPage;
