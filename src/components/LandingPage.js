import React from "react";
import Lottie from "react-lottie";
import { makeStyles } from "tss-react/mui";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import ButtonArrow from "./ui/ButtonArrow";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import CallToAction from "./ui/CallToAction";
const useStyles = makeStyles()((theme) => {
  return {
    animation: {
      maxWidth: "50em",
      minWidth: "21em,",
      marginTop: "2em",
      marginLeft: "10%",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "30em",
      },
    },
    estimateButton: {
      ...theme.typography.estimate,
    },
    btnContainer: {
      marginTop: "1em",
    },
    estimateBtnGrid: {
      "& .MuiButton-root": {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
          backgroundColor: theme.palette.secondary.light,
        },
      },
    },
    learnMoreButton: {
      "& .MuiButton-root": {
        ...theme.typography.learnBtn,
        fontSize: "0.9rem",

        height: 45,
        widtg: 145,
      },
    },
    serviceCustomSoftware: {
      "& .MuiButton-root": {
        ...theme.typography.learnBtn,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("sm")]: {
          marginBottom: "2em",
        },
      },
    },

    mainContainer: {
      marginTop: "4.5em",
      [theme.breakpoints.down("lg")]: {
        marginTop: "3.5em",
      },
      [theme.breakpoints.down("md")]: {
        marginTop: "3em",
      },
    },
    heroTextContainer: {
      minWidth: "21.5em",
      marginLeft: "1em",
      [theme.breakpoints.down("xs")]: {
        marginLeft: 0,
      },
    },
    specialText: {
      fontFamily: "pacifico",
      color: theme.palette.common.orange,
    },
    subtitle: {
      marginBottom: "1em!important",
    },
    icon: {
      marginLeft: "2em",
      [theme.breakpoints.down("xs")]: {
        marginLeft: 0,
      },
      [theme.breakpoints.down("md")]: {
        marginTop: 5,
      },
    },
    serviceContainer: {
      marginTop: "12em",
      [theme.breakpoints.down("sm")]: {
        padding: 25,
      },
    },
    revolutionBackground: {
      backgroundImage: `url(${revolutionBackground})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
      width: "100%",
    },
    revolutionCard: {
      position: "absolute!important",
      boxShadow: `${theme.shadows[10]}!important`,
      borderRadius: "15px!important",
      padding: "10em",
      [theme.breakpoints.down("sm")]: {
        paddingTop: "8em!important",
        paddingLeft: "8em!important",
        paddingLeft: "0px!important",
        paddingRight: "0px!important",
        borderRadius: "0px!important",
        width: "100%!important",
      },
    },
    infoBackground: {
      backgroundImage: `url(${infoBackground})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100%",
      width: "100%",
    },
  };
});

const Home = (props) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("cs"));


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        {/** Hero Block*/}
        <Grid container justifyContent="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography align="center" variant="h2" gutterBottom>
              Bringing West Cost Technology <br /> to the Midwest
            </Typography>
            <Grid container justifyContent="center" className={classes.btnContainer}>
              <Grid className={classes.estimateBtnGrid} item>
                <Button onClick={()=> props.setValue(5)} component={Link} to="/estimate" className={classes.estimateButton} variant="contained">
                  Free Estimate
                </Button>
              </Grid>
              <Grid className={classes.learnMoreButton} item>
                <Button onClick={()=> props.setValue(1)} component={Link} to="/revolution" variant="outlined">
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.animation} sm item>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>{" "}
      {/** Hero Block End*/}
      <Grid item>
        {/** CustomSoftware Block*/}
        <Grid container direction="row" justifyContent={matches ? "center" : undefined} className={classes.serviceContainer}>
          <Grid item className={classes.serviceCustomSoftware} style={{ marginLeft: matches ? 0 : "5em", textAlign: matches ? "center" : undefined }}>
            <Typography variant="h4" gutterBottom>
              Custom Software Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle} gutterBottom>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Complete digital solutions, from investigation to <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button onClick={()=> {props.setValue(2);props.setSelectedIndex(1)}} component={Link} to="/customsoftware" variant="outlined" className={classes.LearnServiceBtn}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item>
            <img className={classes.icon} alt="Custom Software Icon" src={customSoftwareIcon} />
          </Grid>
        </Grid>
      </Grid>
      {/** CustomSoftware Block End*/}
      {/** iOs/Android Block*/}
      <Grid item>
        <Grid container direction="row" justifyContent={matches ? "center" : "flex-end"} className={classes.serviceContainer}>
          <Grid item className={classes.serviceCustomSoftware} style={{ textAlign: matches ? "center" : undefined }}>
            <Typography variant="h4" gutterBottom>
              iOS/Android App Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle} gutterBottom>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Integrate your web experience or create a standalone app{matches ? null : <br />}with either mobile platform.
            </Typography>
            <Button onClick={()=> {props.setValue(2);props.setSelectedIndex(2)}} component={Link} to="/mobileapps" variant="outlined" className={classes.LearnServiceBtn}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matches ? 0 : "5em" }}>
            <img className={classes.icon} alt="mobile Phone Icon" src={mobileAppsIcon} />
          </Grid>
        </Grid>
      </Grid>
      {/** end Os/Android Block */}
      {/** Website Block*/}
      <Grid item>
        <Grid container direction="row" justifyContent={matches ? "center" : undefined} className={classes.serviceContainer}>
          <Grid item className={classes.serviceCustomSoftware} style={{ marginLeft: matches ? 0 : "5em", textAlign: matches ? "center" : undefined }}>
            <Typography variant="h4" gutterBottom>
              Website Development
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle} gutterBottom>
              Reach More. Discover More. Sell More.
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Optimized for Search Engines, built for speed.
            </Typography>
            <Button onClick={()=> {props.setValue(2);props.setSelectedIndex(3)}} component={Link} to="/websites" variant="outlined" className={classes.LearnServiceBtn}>
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matches ? 0 : "5em" }}>
            <img className={classes.icon} alt="website Icon" src={websiteIcon} />
          </Grid>
        </Grid>
      </Grid>
      {/** end Website Block */}
      {/** Revolution Block*/}
      <Grid item>
        <Grid container style={{ height: "100em", marginTop: "12em" }} alignItems="center" justifyContent="center">
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid container direction="column" style={{ textAlign: "center" }}>
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid className={classes.learnMoreButton} item>
                  <Typography variant="subtitle1">Visionary insights coupled with cutting-edge technology is a recipe for revolution.</Typography>
                  <Button onClick={()=> props.setValue(1)} component={Link} to="/revolution" variant="outlined">
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      {/**end Revolution Block*/}
      {/**Information Block*/}
      <Grid item>
        <Grid className={classes.infoBackground} container style={{ height: "80em" }} alignItems="center" direction="row">
          <Grid item container style={{ textAlign:matchesXS ? "center":"inherit"}} direction={matches? "column" : "row"} >
          <Grid sm item style={{  marginLeft: matchesXS ? 0 : matches ? "2em" :"5em" }}>
            <Grid container style={{marginBottom:matchesXS ?"10em":"0"}} direction="column">
              <Typography variant="h2" style={{ color: "white" }}>
                About Us
              </Typography>
              <Typography variant="subtitle2">Lets's get personal.</Typography>
              <Grid className={classes.learnMoreButton} item>
                <Button onClick={()=> props.setValue(3)} component={Link} to="/aboutus" variant="outlined" style={{ color: "white", borderColor: "white" }}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          {/**contact us */}
          <Grid sm item style={{  marginRight: matchesXS ? 0 :matches? "2em" :"5em",textAlign:matchesXS ? "center":"right" }}>
            <Grid container direction="column">
              <Typography variant="h2" style={{ color: "white" }}>
                Contact Us
              </Typography>
              <Typography variant="subtitle2">Say hello! <span role="img" aria-label="waving hanf=d">👋🏻</span></Typography>
              <Grid className={classes.learnMoreButton} item>
                <Button onClick={()=> props.setValue(4)} component={Link} to="/contactus"  variant="outlined" style={{ color: "white", borderColor: "white" }}>
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow width={15} height={15} fill="white" />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          </Grid> 
         
 
        </Grid>
      </Grid>
      {/**end Information Block*/}
      {/**last grid item CallToAction block*/}
      <Grid item>
        <CallToAction setValue={props.setValue} setSelectedIndex={props.setSelectedIndex} />

      </Grid>
      {/**end last grid item CallToAction*/}
    </Grid>
  );
};

export default Home;
