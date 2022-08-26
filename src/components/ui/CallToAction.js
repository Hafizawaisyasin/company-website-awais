import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";
import Button from "@mui/material/Button";
import ButtonArrow from "./ButtonArrow";
import { useTheme } from "@mui/material/styles";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";



const useStyles = makeStyles()((theme) => {
  return {
    learnMoreButton: {
      "& .MuiButton-root": {
        ...theme.typography.learnBtn,
        fontSize: "0.9rem",
        height: 45,
        widtg: 145,
      },
    },
    background: {
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundAttachment:"fixed",
      backgroundRepeat: "no-repeat",
      height: "60em",
      width: "100%",
      [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${mobileBackground})`,
      },
    },

    estimateButton: {
      ...theme.typography.estimate,
      borderRadius: '50px!important',
      height:"80px!important",
      width:"205px!important",
      backgroundColor:`${theme.palette.common.orange}!important`,
      fontSize:"1.5rem!important",
      marginRight:"5em!important",
      marginLeft:"2em!important",
      marginTop:"2em!important",
      [theme.breakpoints.down('sm')]:{
        marginLeft:"0px!important",
        marginRight:"0px!important"

      },
      "&:hover": {
        backgroundColor: `${theme.palette.secondary.light}!important`,
      },
     
    },
  };
});

const CallToAction = (props) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));


  return (
    <Grid container  alignItems="center" justifyContent={matchesSM ?"center":"space-between"} direction={matchesSM?"column":"row"} className={classes.background}>
      <Grid item style={{  marginLeft:matchesSM?0: "5em",textAlign:matchesSM?"center":"inherit" }}>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid className={classes.learnMoreButton} justifyContent={matchesSM ? "center":"inherit"} container item>
              <Button onClick={()=> props.setValue(1)} component={Link} to="/revolution" variant="outlined">
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid  item >
        <Button onClick={()=> props.setValue(5)} component={Link} to="/estimate" className={classes.estimateButton} variant="contained">Free Estimate</Button>
      </Grid>

    </Grid>
  );
};

export default CallToAction;
