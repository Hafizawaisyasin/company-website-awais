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
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import roots from "../assets/root.svg";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import animationData from "../animations/landinganimation/data";
import documentsAnimation from "../animations/documentsAnimation/data";
import scaleAnimation from "../animations/scaleAnimation/data.json";
import automationAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";
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
    itemContainer: {
      maxWidth: "40em!important",
    },
  };
});

const CustomSoftware = (props) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("mh"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  const documentsOptions = {
    loop: true,
    autoplay: true,
    animationData: documentsAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimation,
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
        justifyContent={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        <Box sx={{ display: { sm: "none", md: "block", ccs: "none", xs: "none", mh: "block" } }}>
          <Grid item className={classes.arrowContainer} style={{ marginRight: "1em", marginLeft: "-3.5em " }}>
            <IconButton style={{ backgroundColor: "transparent" }} component={Link} to="/services" onClick={() => props.setSelectedIndex(0)}>
              <img src={backArrow} alt="Back to Services Page" />
            </IconButton>
          </Grid>
        </Box>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMd ? "center" : undefined} variant="h2">
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMd ? "center" : undefined} variant="body2" paragraph>
              Whether we' re replacing old software or investing new solutions, Awais Development is here to help your business tackle technology.
            </Typography>
            <Typography align={matchesMd ? "center" : undefined} variant="body2" paragraph>
              Using regular commercial software leaves you with a lot of stuff you don't need, without some of the stuff you do need, and ultimately
              controls the way you work. Without using any software at all your risk falling behind competitors and missing out on huge savings from
              increased efficiency.
            </Typography>
            <Typography align={matchesMd ? "center" : undefined} variant="body2" paragraph>
              Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces
              finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.
            </Typography>
            <Typography align={matchesMd ? "center" : undefined} variant="body2" paragraph>
              We create exactly what you want, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: { sm: "none", md: "block", ccs: "none", xs: "none", mh: "block" } }}>
          <Grid item className={classes.arrowContainer}>
            <IconButton style={{ backgroundColor: "transparent" }} component={Link} to="/mobileapps" onClick={() => props.setSelectedIndex(2)}>
              <img src={forwardArrow} alt="Forward to iOS/Android App Development Page" />
            </IconButton>
          </Grid>
        </Box>
      </Grid>
      <Grid item container direction="row" justify="center" style={{ marginTop: "15em", marginBottom: "20em" }} className={classes.rowContainer}>
        <Grid item container md alignItems="center" style={{ maxWidth: "40em" }} direction="column">
          <Grid item>
            <Typography variant="h4"> Save Energy</Typography>
          </Grid>
          <Grid item>
            <img src={lightbulb} alt="lightbulb" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          md
          alignItems="center"
          style={{ maxWidth: "40em", marginTop: matchesSM ? "10em" : 0, marginBottom: matchesSM ? "10em" : 0 }}
          direction="column"
        >
          <Grid item>
            <Typography variant="h4"> Save Time</Typography>
          </Grid>
          <Grid item>
            <img src={stopwatch} alt="stopwatch" />
          </Grid>
        </Grid>
        <Grid item container md alignItems="center" style={{ maxWidth: "40em" }} direction="column">
          <Grid item>
            <Typography variant="h4"> Save Money</Typography>
          </Grid>
          <Grid item>
            <img src={cash} alt="cash" />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        direction={matchesMd ? "column" : "row"}
        spacing={2}
        container
        alignItems={matchesMd ? "center" : undefined}
        justifyContent={matchesMd ? "center" : "space-around"}
        style={{ display: matchesMd ? "grid" : undefined }}
        className={classes.rowContainer}
      >
        {/**Digital document and data item */}
        <Grid
          md
          sm={12}
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMd ? "15em" : 0 }}
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesSM ? "center" : undefined} variant="h4">
                Digital Documents & Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph align={matchesSM ? "center" : undefined}>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography variant="body2" paragraph align={matchesSM ? "center" : undefined}>
                Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this
                has, it causes harm to your bottom line as well.
              </Typography>

              <Typography variant="body2" paragraph align={matchesSM ? "center" : undefined}>
                By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.{" "}
              </Typography>
            </Grid>
          </Grid>
          {/**documents animation */}
          <Grid item md>
            <Lottie options={documentsOptions} style={{ maxHeight: 275, maxWidth: 275, minHeight: 250 }} />
          </Grid>
          {/** end animation */}
        </Grid>
        {/** endDigital document and data item */}

        {/**Scale item */}
        <Grid md sm={12} item container direction={matchesSM ? "column" : "row"} className={classes.itemContainer}>
          {/**documents animation */}
          <Grid item md>
            <Lottie options={scaleOptions} style={{ maxHeight: 260, maxWidth: 280 }} />
          </Grid>
          {/** end animation */}
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                Scale
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph align={matchesSM ? "center" : "right"}>
                Whether you're a large brand,just getting started, or taking off right now, our application architecture ensures pain-free growth and
                reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/** endScal item */}
      </Grid>
      {/**root analysis item */}
      <Grid item direction="row" container style={{ marginTop: "20em", marginBottom: "20em" }} className={classes.rowContainer}>
        <Grid item direction="column" container alignItems="center">
          <Grid item>
            <img src={roots} alt="tree with roots extending out" height={matchesSM ? "300em" : "450em"} width={matchesSM ? "300em" : "450em"} />
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography variant="h4" align="center" gutterBottom>
              Root-Cause Analysis
            </Typography>
            <Typography variant="body2" align="center" paragraph>
              Many probblems are merely symptoms of larger, underlying issues.
            </Typography>
            <Typography variant="body2" align="center" aragraph>
              We can help you throughly examine all areas of your business to develop a holistic plan for the most effective implementation of
              technology.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/**end root analysis item */}
      {/**new row animation */}

      <Grid
        item
        direction={matchesMd ? "column" : "row"}
        alignItems={matchesMd ? "center" : undefined}
        spacing={2}
        container
        justifyContent="space-around"
        style={{ marginBottom: "17em" }}
        className={classes.rowContainer}
      >
        {/** Automation */}
        <Grid
          md
          sm={12}
          item
          container
          className={classes.itemContainer}
          style={{ marginBottom: matchesMd ? "15em" : 0 }}
          direction={matchesSM ? "column" : "row"}
        >
          <Grid item container direction="column" md>
            <Grid item>
              <Typography align={matchesSM ? "center" : undefined} variant="h4">
                Automation
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph align={matchesSM ? "center" : undefined}>
                why waste time when you don't have to?
              </Typography>
              <Typography variant="body2" paragraph align={matchesSM ? "center" : undefined}>
                We can help you identify processes with time or event based actions which can now easily be automated.
              </Typography>

              <Typography variant="body2" paragraph align={matchesSM ? "center" : undefined}>
                Increasing efficiency increases profits, leaving you more time to focus on your busines, not busywork
              </Typography>
            </Grid>
          </Grid>
          {/**documents animation */}
          <Grid item md>
            <Lottie options={automationOptions} style={{ maxHeight: 290, maxWidth: 280 }} />
          </Grid>
          {/** end animation */}
        </Grid>
        {/** end Automation */}

        {/** User Exoereince */}
        <Grid md sm={12} item container className={classes.itemContainer} direction={matchesSM ? "column" : "row"}>
          {/**documents animation */}
          <Grid item md>
            <Lottie options={uxOptions} style={{ maxHeight: 310, maxWidth: 155 }} />
          </Grid>
          {/** end animation */}
          <Grid item container direction="column" md>
            <Grid item>
              <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph align={matchesSM ? "center" : "right"}>
                A good design that isn't usable isn't a good design.
              </Typography>
              <Typography variant="body2" paragraph align={matchesSM ? "center" : "right"}>
                So why are so many pieces of software complicated, confusing, and frustrating?
              </Typography>

              <Typography variant="body2" paragraph align={matchesSM ? "center" : "right"}>
                By prioritizing users and the real ways they interact with technology we're able to develop unique, personable experiences that solve
                problems rather than create new ones.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/** end User Exoereince */}
      </Grid>
      {/**end new row animation */}
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default CustomSoftware;
