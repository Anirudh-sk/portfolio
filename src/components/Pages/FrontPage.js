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
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      position: "relative",
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        opacity: 0.1,
        zIndex: 1,
      },
      color: "white",
    },
    contentContainer: {
      position: "relative",
      zIndex: 2,
      textAlign: "center",
      maxWidth: "800px",
      padding: "0 2rem",
    },
    greeting: {
      fontSize: "1.2rem",
      fontWeight: "300",
      marginBottom: "1rem",
      opacity: 0.9,
      letterSpacing: "0.5px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1rem",
      },
    },
    name: {
      fontSize: "4rem",
      fontWeight: "700",
      marginBottom: "1rem",
      background: "linear-gradient(45deg, #ffffff 30%, #f0f8ff 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      [theme.breakpoints.down("xs")]: {
        fontSize: "2.8rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "5rem",
      },
    },
    subtitle: {
      fontSize: "1.4rem",
      fontWeight: "400",
      marginBottom: "2rem",
      opacity: 0.95,
      lineHeight: "1.6",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.1rem",
        marginBottom: "1.5rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.6rem",
      },
    },
    ctaContainer: {
      display: "flex",
      gap: "1rem",
      justifyContent: "center",
      flexWrap: "wrap",
      marginBottom: "3rem",
    },
    ctaButton: {
      padding: "12px 32px",
      borderRadius: "50px",
      textTransform: "none",
      fontSize: "1rem",
      fontWeight: "600",
      transition: "all 0.3s ease",
      minWidth: "160px",
    },
    primaryCta: {
      background: "rgba(255, 255, 255, 0.2)",
      color: "white",
      border: "2px solid rgba(255, 255, 255, 0.3)",
      backdropFilter: "blur(10px)",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.3)",
        transform: "translateY(-2px)",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
      },
    },
    secondaryCta: {
      background: "transparent",
      color: "white",
      border: "2px solid rgba(255, 255, 255, 0.5)",
      "&:hover": {
        background: "rgba(255, 255, 255, 0.1)",
        transform: "translateY(-2px)",
      },
    },
    scrollIndicator: {
      position: "absolute",
      bottom: "2rem",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 2,
      animation: "$bounce 2s infinite",
    },
    "@keyframes bounce": {
      "0%, 20%, 50%, 80%, 100%": {
        transform: "translateX(-50%) translateY(0)",
      },
      "40%": {
        transform: "translateX(-50%) translateY(-10px)",
      },
      "60%": {
        transform: "translateX(-50%) translateY(-5px)",
      },
    },
    scrollButton: {
      color: "white",
      fontSize: "2.5rem",
      opacity: 0.8,
      "&:hover": {
        opacity: 1,
      },
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
      <Box className={classes.contentContainer}>
        <Typography className={classes.greeting} variant="h6">
          Hi, Welcome to the digital portfolio of
        </Typography>
        <Typography className={classes.name} variant="h1">
          K Sai Anirudh
        </Typography>
        <Typography className={classes.subtitle} variant="h5">
          Technical Product Manager with 4+ Years of Experience in
          <br />
          Building products that solve real problems
        </Typography>

        <Box className={classes.ctaContainer}>
          <button
            className={`${classes.ctaButton} ${classes.primaryCta}`}
            onClick={() => scrollTo("Projects")}
          >
            View My Work
          </button>
          <button
            className={`${classes.ctaButton} ${classes.secondaryCta}`}
            onClick={() => scrollTo("Contact")}
          >
            Get In Touch
          </button>
        </Box>
      </Box>

      <Box className={classes.scrollIndicator}>
        <IconButton
          className={classes.scrollButton}
          aria-label="Scroll Down"
          onClick={() => scrollTo("AboutMe")}
        >
          <span
            className="iconify"
            data-icon="bi:chevron-compact-down"
            data-inline="false"
          />
        </IconButton>
      </Box>

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
