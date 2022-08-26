import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "tss-react/mui";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import footerAdornment from "../../assets/Footer Adornment.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const useStyles = makeStyles()((theme) => {
  return {
    footer: {
      backgroundColor: theme.palette.common.blue,
      width: "100%",
      zIndex: 1302,
      position: "relative",
    },
    adornment: {
      width: "25em",
      verticalAlign: "bottom",
      [theme.breakpoints.down("lg")]: {
        width: "22em",
      },
      [theme.breakpoints.down("md")]: {
        width: "17em",
      },
      [theme.breakpoints.down("xs")]: {
        width: "14em",
      },
    },
    mainContainer: {
      position: "absolute",
    },
    link: {
      color: "white",
      fontFamily: "Arial",
      fontSize: "0.75rem",
      fontWeight: "bold",
      textDecoration: "none",
    },
    gridItem: {
      margin: "2em!important",
    },
    icon: {
      height: "4em",
      width: "4em",
      [theme.breakpoints.down("md")]: {
        height: "2.5em",
        width: "2.5em",

      }
    
    },
    socialIcon: {
        position: "absolute",
        marginTop:"-6em!important",
        right:"1.5em",
        [theme.breakpoints.down("md")]: {
            right:"0.6em"
    
          }



    }
  };
});

const Footer = (props) => {
  const {  setValue, setSelectedIndex } = props;

  const { classes } = useStyles();
  return (
    <footer className={classes.footer}>
      <Box sx={{ display: { sm: "none", md: "block" ,xs:"none"} }}>
        <Grid container justifyContent="center" spacing={2} className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/"
                onClick={() => {
                  setValue(0);
                }}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/services"
                onClick={() => {
                  setValue(2);
                  setSelectedIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  setValue(2);
                  setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  setValue(2);
                  setSelectedIndex(2);
                }}
              >
                iOS/Andriod Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to="/websites"
                onClick={() => {
                  setValue(2);
                  setSelectedIndex(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid item className={classes.link} component={Link} to="/revolution" onClick={() => setValue(1)}>
                The Revolution Page
              </Grid>
              <Grid item className={classes.link} component={Link} to="/vision" onClick={() => setValue(1)}>
                Vision
              </Grid>
              <Grid item className={classes.link} component={Link} to="/technology" onClick={() => setValue(1)}>
                Technology
              </Grid>
              <Grid item className={classes.link} component={Link} to="/process" onClick={() => setValue(1)}>
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid item className={classes.link} component={Link} to="/aboutus" onClick={() => setValue(3)}>
                About US
              </Grid>
              <Grid item className={classes.link} component={Link} to="/history" onClick={() => setValue(3)}>
                History
              </Grid>
              <Grid item className={classes.link} component={Link} to="/team" onClick={() => setValue(3)}>
                Team
              </Grid>
            </Grid>
          </Grid>

          <Grid item className={classes.gridItem}>
            <Grid container spacing={2} direction="column">
              <Grid item className={classes.link} component={Link} to="/contactus" onClick={() => setValue(4)}>
                Contact US
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <img alt="black decorative slash" src={footerAdornment} className={classes.adornment}  />
      <Grid container spacing={3} className={classes.socialIcon}  justifyContent="flex-end">
        <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
          <img alt="facebook logo" src={facebook} className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
          <img alt="Instagram logo" src={instagram} className={classes.icon} />
        </Grid>
        <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
          <img alt="twitter logo" src={twitter} className={classes.icon} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
