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
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websiteIcon from "../assets/websiteIcon.svg";

const useStyles = makeStyles()((theme) => {
  return {
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
      marginTop: "10em",
      [theme.breakpoints.down("sm")]: {
        padding: 25,
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
   };
});


const Services = (props) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("cs"));
  return (
    <Grid container direction="column">
      <Grid item style={{marginLeft:matches?0:"5em",marginTop:matches?"1em":"2em"}}>
        <Typography variant="h2" align={matches?"center":undefined} gutterBottom >Services</Typography>
      </Grid>
      {/** iOs/Android Block*/}
      <Grid item>
        <Grid container direction="row" justifyContent={matches ? "center" : "flex-end"} className={classes.serviceContainer} style={{marginTop:matches?"2em": '5em'}}>
          <Grid item className={classes.serviceCustomSoftware} style={{ textAlign: matches ? "center" : undefined ,width:matches ?undefined:"35em"}}>
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
            <img className={classes.icon} alt="mobile Phone Icon" src={mobileAppsIcon} width="250em"/>
          </Grid>
        </Grid>
      </Grid>
      {/** end Os/Android Block */}
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
      
      {/** Website Block*/}
      <Grid item>
        <Grid container direction="row" justifyContent={matches ? "center" : "flex-end"} className={classes.serviceContainer} style={{marginBottom:"10em"}}>
          <Grid item className={classes.serviceCustomSoftware} style={{ textAlign: matches ? "center" : undefined,width:matches ?undefined:"35em" }}>
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
            <img width="250em" className={classes.icon} alt="website Icon" src={websiteIcon} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Services