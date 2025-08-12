import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const Footer = () => {
  const useStyles = makeStyles({
    div: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0.2rem",
      backgroundColor: "#0f0f23",
    },
    text: {
      color: "#eeeeee",
    },
  });
  const classes = useStyles();

  return (
    <Box className={classes.div}>
      <Typography className={classes.text}>Made with ❤ by Sai Anirudh</Typography>
    </Box>
  );
};

export default Footer;
