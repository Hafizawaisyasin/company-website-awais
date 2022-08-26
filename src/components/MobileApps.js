import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "tss-react/mui";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ButtonArrow from "./ui/ButtonArrow";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";

import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";

import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import integrationAnimation from "../animations/integrationAnimation/data.json";

import CallToAction from "./ui/CallToAction";





const useStyles = makeStyles()((theme) => {
  return {
    heading: {
      maxWidth: "40em",
    },
    arrowContainer: {
      marginTop: "0.5em!important",
    },
    rowContainer: {
      paddingLeft: "5em",
      paddingRight: "5em",
      [theme.breakpoints.down("md")]: {
        paddingLeft: "1.5em",
        paddingRight: "1.5em",
      },
    },
  };
});

const MobileApps = (props) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("mh"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justifyContent={matchesMd ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Box sx={{ display: { sm: "none", md: "block", ccs: "none", xs: "none", mh: "block" } }}>
          <Grid item className={classes.arrowContainer} style={{ marginRight: "1em", marginLeft: "-3.5em " }}>
            <IconButton style={{ backgroundColor: "transparent" }} component={Link} to="/customsoftware" onClick={() => props.setSelectedIndex(1)}>
              <img src={backArrow} alt="Back to Custom Software Development Page" />
            </IconButton>
          </Grid>
        </Box>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMd ? "center" : undefined} variant="h2">
              iOS/Android App Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMd ? "center" : undefined} variant="body2" paragraph>
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography align={matchesMd ? "center" : undefined} variant="body2" paragraph>
              Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your
              business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS,
              push notifications, and more.
            </Typography>
            <Typography align={matchesMd ? "center" : undefined} variant="body2" paragraph>
              Convenience. Connection.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: { sm: "none", md: "block", ccs: "none", xs: "none", mh: "block" } }}>
          <Grid item className={classes.arrowContainer}>
            <IconButton style={{ backgroundColor: "transparent" }} component={Link} to="/websites" onClick={() => props.setSelectedIndex(3)}>
              <img src={forwardArrow} alt="Forward to Website Development Page" />
            </IconButton>
          </Grid>
        </Box>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        style={{ marginTop: "15em", marginBottom: "15em" }}
        className={classes.rowContainer}

      >
        <Grid item container direction="column" md>
          <Grid item>
            <Typography align={matchesSM? "center":undefined} gutterBottom variant="h4">
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesSM? "center":undefined} variant="body2" paragraph>
              Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography align={matchesSM? "center":undefined} variant="body2" paragraph>
              This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultOptions} style={{ maxWidth:matchesMd?"15em": "20em" ,height: matchesMd?
          "20em":undefined}} />
        </Grid>
        <Grid item container direction="column" md>
          <Grid item>
            <Typography align={matchesSM? "center":"right"} gutterBottom variant="h4">
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesSM? "center":"right"} variant="body2" paragraph>
              Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets - all at the same time.
            </Typography>
            <Typography align={matchesSM? "center":"right"} variant="body2" paragraph>
              This significantly reduces costs and creates a more unified brand experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container direction={matchesMd ? "column" : "row"} className={classes.rowContainer} style={{  marginBottom: "15em" ,display:matchesMd?"grid":undefined}}>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" gutterBottom variant="h4">
              Extend Functionality
            </Typography>
          </Grid>
          <Grid item>
            <img src={swiss} alt="swiss army knife" />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md style={{marginTop:matchesMd?"10em":0,marginBottom:matchesMd?"10em":0}}> 
          <Grid item>
            <Typography align="center" gutterBottom variant="h4">
              Extend Access
            </Typography>
          </Grid>
          <Grid item>
            <img src={access} alt="tear-one-off sign" style={{ maxWidth:matchesXS?"20em": "28em" }} />
          </Grid>
        </Grid>
        <Grid item container direction="column" alignItems="center" md>
          <Grid item>
            <Typography align="center" gutterBottom variant="h4">
              Increase Engagement
            </Typography>
          </Grid>
          <Grid item>
            <img src={engagement} alt="app with notification" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default MobileApps;
