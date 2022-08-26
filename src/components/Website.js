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
import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";
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
    paragraphContainer: {
      maxWidth: "30em!important",
    },
  };
});

const Website = (props) => {
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
            <IconButton style={{ backgroundColor: "transparent" }} component={Link} to="/mobileapps" onClick={() => props.setSelectedIndex(2)}>
              <img src={backArrow} alt="Back to iOS/Android App Development Page" />
            </IconButton>
          </Grid>
        </Box>

        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography align={matchesMd ? "center" : undefined} variant="h2">
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography align={matchesMd ? "center" : undefined} variant="body2" paragraph>
              Having a website is a necessity in today's business world. They give you one central, public location to let people know who you are,
              what you do, and why you're the best at it.
            </Typography>
            <Typography align={matchesMd ? "center" : undefined} variant="body2" paragraph>
              From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online
              drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ display: { sm: "none", md: "block", ccs: "none", xs: "none", mh: "block" } }}>
          <Grid item className={classes.arrowContainer}>
            <IconButton style={{ backgroundColor: "transparent" }} component={Link} to="/services" onClick={() => props.setSelectedIndex(0)}>
              <img src={forwardArrow} alt="Forward to Services Page" />
            </IconButton>
          </Grid>
        </Box>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginTop: "15em" }}
        alignItems="center"
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography align={matchesSM ? "center" : undefined} variant="h4" gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img src={analytics} style={{ marginLeft: "-2.75em" }} alt="graph with magnifying glass revealing 1's and 0's" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography variant="body2" paragraph align={matchesSM ? "center" : undefined}>
            Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering
            you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>

      {/** ecommerce section */}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginTop: "15em", marginBottom: "15em" }}
        alignItems="center"
        justifyContent="flex-end"
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4"  gutterBottom align={matchesSM ? "center" : undefined}>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} style={{ marginLeft: "-2.75em" }} alt="world outline made of dollar signs" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM ? 0 : "1em" }} className={classes.paragraphContainer}>
          <Typography variant="body2" paragraph align={matchesSM ? "center" : undefined}>
            It's no secret that people like to shop online.
          </Typography>
          <Typography variant="body2" paragraph align={matchesSM ? "center" : undefined}>
            in 2017 over 2.3 trillion dollars was spent in e-commerce, and it's time for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      {/** end ecommerce section */}
      {/**  outreach section */}
      <Grid item container direction={matchesSM ? "column" : "row"} className={classes.rowContainer} alignItems="center" justifyContent="flex-start">
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4"  gutterBottom align={matchesSM ? "center" : undefined}>
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} style={{ marginLeft: "-2.75em" }} alt="megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM ? 0 : "1em" }} className={classes.paragraphContainer}>
          <Typography variant="body2" paragraph align={matchesSM ? "center" : undefined}>
            Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what's right for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>

      {/** end  outreach section */}
      {/** seo section */}
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        style={{ marginTop: "15em", marginBottom: "15em" }}
        alignItems="center"
        justifyContent="flex-end"
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h4" gutterBottom align={matchesSM ? "center" : undefined}>
                Search Engine
                <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} style={{ marginLeft: "-2.75em" }} alt="website standing on winner's podium" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginLeft: matchesSM ? 0 : "1em" }} className={classes.paragraphContainer}>
          <Typography variant="body2" paragraph align={matchesSM ? "center" : undefined}>
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography variant="body2" paragraph align={matchesSM ? "center" : undefined}>
            If you're like us, probably never.
          </Typography>
          <Typography variant="body2" paragraph align={matchesSM ? "center" : undefined}>
            Customers don't gp there either, so we make sure your website is designed to end up on top.
          </Typography>
        </Grid>
      </Grid>

      {/** end  seo section  */}
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default Website;
