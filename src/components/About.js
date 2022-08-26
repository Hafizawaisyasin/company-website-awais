import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "tss-react/mui";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import profile from "../assets/founderawais.jpg";
import yearbook from "../assets/yearbook.svg";
import puppy from "../assets/puppyy.jpg";
import history from "../assets/history.svg";

import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import integrationAnimation from "../animations/integrationAnimation/data.json";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles()((theme) => {
  return {
    missionStatement: {
      fontStyle: "italic",
      fontWeight: "300!important",
      fontSize: "1.5rem!important",
      maxWidth: "50em",
      lineHeight: `1.4!important`,
    },
    rowContainer: {
      paddingLeft: "5em",
      paddingRight: "5em",
      [theme.breakpoints.down("md")]: {
        paddingLeft: "1.5em",
        paddingRight: "1.5em",
      },
    },
    avatar: {
      height: "25em!important",
      width: "25em!important",
      [theme.breakpoints.down("mh")]: {
        height: "20em!important",
        width: "20em!important",
        maxWidth: "300px!important",
        maxHeight: "300px!important",
      },
    },
  };
});

const About = (props) => {
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
      <Grid item className={classes.rowContainer} style={{ marginTop:matchesMd?"1em": "2em" }}>
        <Typography align={matchesMd?"center":undefined} variant="h2"> About Us</Typography>
      </Grid>
      <Grid item container justifyContent="center" className={classes.rowContainer} style={{ marginTop: "3em" }}>
        <Typography variant="h4" align="center" className={classes.missionStatement}>
          Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to
          the Midwest and beyond.
        </Typography>
      </Grid>
      {/**history block */}
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
        direction={matchesMd ? "column" : "row"}
        alignItems={matchesMd ? "center" : undefined}
        justifyContent="space-around"
      >
        <Grid item>
          <Grid item container direction="column" lg style={{ maxWidth: "35em" }}>
            <Grid item>
              <Typography variant="h4" gutterBottom align={matchesMd ? "center" : undefined}>
                History
              </Typography>
            </Grid>

            <Grid item>
              <Typography align={matchesMd ? "center" : undefined} variant="body2" paragraph style={{ fontWeight: 700, fontStyle: "italic" }}>
                We're the new kid on the block
              </Typography>
              <Typography align={matchesMd ? "center" : undefined} variant="body2" paragraph>
                Founded in 2019, we're ready to get our hands on the world's business problems.
              </Typography>
              <Typography align={matchesMd ? "center" : undefined} variant="body2" paragraph>
                It all started with one question: Why aren't all businesses using available technology? There are many different answers to that
                question: economic barriers, social barriers,
              </Typography>
              <Typography align={matchesMd ? "center" : undefined} variant="body2" paragraph>
                educational barriers, and sometimes institutional barriers. We aim to be a powerful force in overcoming these obstacles. Recent
                developments in now be done digitally and automatically, and completely new methods of interaction are created daily. Taking full
                advantage of these advancements is the name of the game.
              </Typography>
              <Typography align={matchesMd ? "center" : undefined} variant="body2" paragraph>
                All this change can be a lot to keep up with, and that's where we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justifyContent="center" lg>
            <img src={history} alt="quill pen sitting on top of book" style={{ maxHeight: matchesMd ? 200 : "20em" }} />
          </Grid>
        </Grid>
      </Grid>
      {/**end history block */}
      {/**team block */}
      <Grid item container direction="column" alignItems="center" style={{ marginBottom: "15em" }} className={classes.rowContainer}>
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" paragraph align="center">
            Hafiz Awais Yasin, Founder
          </Typography>
          <Typography variant="body2" paragraph align="center">
            I start coding when I was 15 years old.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="founder" src={profile} className={classes.avatar} />
        </Grid>
        <Grid item container justifyContent={matchesMd ? "center" : undefined}>
          <Grid
            sx={{ display: { sm: "block", md: "block", mh: "block", lg: "none", xs: "block" } }}
            item
            lg
            style={{ maxWidth: "45em", padding: "1.25em" }}
          >
            <Typography variant="body2" align="center" paragraph>
              I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning -
              learning about computers, learning mathematics and philosophy, studying design, always just learning.{" "}
            </Typography>
            <Typography variant="body2" align="center" paragraph>
              Now I'm ready to apply everything I've learned, and to help others with the intution I have developed.
            </Typography>
          </Grid>
          <Grid item container direction="column" lg alignItems={matchesMd ? "center" : undefined} style={{ marginBottom: matchesMd ? "2.5em" : 0 }}>
            <Grid item>
              <img src={yearbook} alt="yearbook page abput founder" style={{ maxWidth: matchesMd ? 300 : undefined }} />
            </Grid>
            <Grid item>
              <Typography variant="caption">a page from my Sophomore yearbook</Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{ display: { sm: "none", md: "none", mh: "none", lg: "block", xs: "none" } }}
            item
            lg
            style={{ maxWidth: "45em", padding: "1.25em" }}
          >
            <Typography variant="body2" align="center" paragraph>
              I taught myself basic coding from a library book in third grade, and ever since then my passion has solely been set on learning -
              learning about computers, learning mathematics and philosophy, studying design, always just learning.{" "}
            </Typography>
            <Typography variant="body2" align="center" paragraph>
              Now I'm ready to apply everything I've learned, and to help others with the intution I have developed.
            </Typography>
          </Grid>
          <Grid item container direction="column" lg alignItems={matchesMd ? "center" : "flex-end"}>
            <Grid item>
              <img src={puppy} alt="green parrot" style={{ maxWidth: matchesMd ? 300 : undefined }} />
            </Grid>
            <Grid item>
              <Typography variant="caption">my parrot, Subfamily Arinae</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/**end team block */}
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default About;
