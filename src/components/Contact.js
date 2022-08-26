import React, { useState } from "react";
import Lottie from "react-lottie";
import axios from "axios";
import { makeStyles } from "tss-react/mui";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonArrow from "./ui/ButtonArrow";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import mobileBackground from "../assets/mobileBackground.jpg";
import integrationAnimation from "../animations/integrationAnimation/data.json";
import background from "../assets/background.jpg";
import CallToAction from "./ui/CallToAction";
import TextField from "@mui/material/TextField";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import airplane from "../assets/send.svg";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";

const useStyles = makeStyles()((theme) => {
  return {
    background: {
      backgroundImage: `url(${background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "60em",
      paddingBottom: "10em",
      [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${mobileBackground})`,
      },
    },
    learnMoreButton: {
      "& .MuiButton-root": {
        marginTop: "5px",
        ...theme.typography.learnBtn,
        fontSize: "0.9rem!important",
        height: 45,
        padding: 5,
        [theme.breakpoints.down("md")]: {
          marginLeft: "0px!important",
          marginRight: "0px!important",
        },
      },
    },
    estimateButton: {
      ...theme.typography.estimate,
      borderRadius: "50px!important",
      height: "80px!important",
      width: "205px!important",
      backgroundColor: `${theme.palette.common.orange}!important`,
      fontSize: "1.5rem!important",
      marginRight: "5em!important",
      marginLeft: "2em!important",
      marginTop: "2em!important",
      [theme.breakpoints.down("md")]: {
        marginLeft: "0px!important",
        marginRight: "0px!important",
      },
      "&:hover": {
        backgroundColor: `${theme.palette.secondary.light}!important`,
      },
    },
    message: {
      border: `2px solid ${theme.palette.common.blue}!important`,
      marginTop: "5em!important",
      borderRadius: "7px!important",
    },
    sendButton: {
      ...theme.typography.estimate,
      borderRadius: "50px!important",
      height: "45px!important",
      width: "245px!important",
      fontSize: "1rem!important",
      backgroundColor: `${theme.palette.common.orange}!important`,
      "&:hover": {
        backgroundColor: `${theme.palette.secondary.light}!important`,
      },
      [theme.breakpoints.down("sm")]: {
        height: "40px!important",
        width: "225px!important",
      },
    },
    disabled: {
      "& .Mui-disabled": {
        backgroundColor: "#D3D3D3!important",
        color: "grey!important",
      },
    },
  };
});

const Contact = (props) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("mh"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xss"));

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);
  //snackbar
  const [alert, setAlert] = useState({ open: false, message: "", backgroundColor: "" });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (event) => {
    console.log("aaaa", event.target);
    let valid;
    switch (event.target.id) {
      case "email":
        console.log("aaaa email");
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
        if (!valid) {
          setPhoneHelper("Invalid phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: integrationAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const onConfirm = () => {
    setLoading(true);
    //https://us-central1-mycompany-95d96.cloudfunctions.net/sendMail
    axios
      .get("https://us-central1-mycompany-95d96.cloudfunctions.net/sendMail", {
        params: { name: name, email: email, phone: phone, message: message },
      })
      .then((res) => {
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({ open: true, message: "Message sent successfully!", backgroundColor: "#4BB543" });

        console.log("checking email", res);
      })
      .catch((err) => {
        setLoading(false);
        setAlert({ open: true, message: "Something went wrong please try again!", backgroundColor: "#FF3232" });

        console.log("checking email error", err);
      });
  };

  const buttonContents = (
    <React.Fragment>
      Send Message
      <img style={{ marginLeft: "1em" }} src={airplane} alt="paper, airplane" />
    </React.Fragment>
  );

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="row">
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          lg={4}
          xl={3}
          style={{ marginBottom: matchesMd ? "5em" : 0, marginTop: matchesMd ? (matchesSM ? "1em" : "5em") : 0 }}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography align={matchesMd ? "center" : undefined} style={{ lineHeight: 1 }} variant="h2">
                  Contact Us
                </Typography>
                <Typography style={{ color: theme.palette.common.blue }} variant="body2" align={matchesMd ? "center" : undefined}>
                  We're waiting.
                </Typography>
              </Grid>
              <Grid item container style={{ marginTop: "2em" }}>
                <Grid item>
                  <img src={phoneIcon} alt="phone" style={{ marginRight: "0.5em" }} />
                </Grid>
                <Grid item>
                  <Typography style={{ color: theme.palette.common.blue, fontSize: "1rem" }} variant="body2">
                    <a href="tel:03020460907" style={{ textDecoration: "none", color: "inherit" }}>
                      03020460907
                    </a>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container style={{ marginBottom: "2em" }}>
                <Grid item>
                  <img src={emailIcon} alt="envelope" style={{ marginRight: "0.5em", verticalAlign: "bottom" }} />
                </Grid>
                <Grid item>
                  <Typography style={{ color: theme.palette.common.blue, fontSize: "1rem" }} variant="body2">
                    <a href="mailto:awaisyasin154@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
                      awaisyasin154@gmail.com
                    </a>
                  </Typography>
                </Grid>
              </Grid>
              {/**another container for text field */}
              <Grid item container direction="column" style={{ width: "20em" }}>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField fullWidth label="Name" variant="standard" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="standard"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    error={emailHelper.length !== 0}
                    helperText={emailHelper}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    fullWidth
                    label="Phone"
                    variant="standard"
                    id="phone"
                    value={phone}
                    onChange={onChange}
                    error={phoneHelper.length !== 0}
                    helperText={phoneHelper}
                  />
                </Grid>
              </Grid>
              {/**end another container for text field */}
              {/** another container for text field  message*/}
              <Grid item style={{ width: "20em" }}>
                <TextField
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  className={classes.message}
                  multiline
                  placeholder="Tell us more about your project"
                  rows={10}
                  variant="standard"
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Grid>
              {/**end another container for text field  message*/}
              <Grid item container justifyContent="center" style={{ marginTop: "2em" }} className={classes.disabled}>
                <Button
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    email.length === 0 ||
                    phone.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }
                  onClick={handleClickOpen}
                  variant="contained"
                  className={classes.sendButton}
                >
                  {loading ? <CircularProgress /> : buttonContents}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Dialog
          style={{ zIndex: 1302 }}
          open={open}
          fullScreen={matchesSM}
          onClose={handleClose}
          PaperProps={{
            style: {
              paddingTop: matchesXS ? "1em" : "5em",
              paddingBottom: matchesXS ? "1em" : "5em",
              paddingLeft: matchesXS ? "0em" : matchesSmall ? "5em" : matchesMd ? "15em" : "25em",
              paddingRight: matchesXS ? "0em" : matchesSmall ? "5em" : matchesMd ? "15em" : "25em",
            },
          }}
        >
          <DialogContent>
            <Grid container direction="column">
              <Grid item>
                <Typography align="center" variant="h4" gutterBottom>
                  Confirm Message
                </Typography>
              </Grid>

              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField fullWidth label="Name" variant="standard" id="name" value={name} onChange={(event) => setName(event.target.value)} />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="standard"
                  id="email"
                  name="email"
                  value={email}
                  onChange={onChange}
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  fullWidth
                  label="Phone"
                  variant="standard"
                  id="phone"
                  value={phone}
                  onChange={onChange}
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                />
              </Grid>

              {/**end another container for text field */}
              {/** another container for text field  message*/}
              <Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
                <TextField
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  className={classes.message}
                  multiline
                  placeholder="Tell us more about your project"
                  rows={10}
                  variant="standard"
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item container direction={matchesSmall ? "column" : "row"} style={{ marginTop: "2em" }} alignItems="center">
              <Grid item>
                <Button style={{ fontWeight: 400 }} onClick={handleClose} color="primary">
                  Cancel
                </Button>
              </Grid>
              <Grid item className={classes.disabled}>
                <Button
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    email.length === 0 ||
                    phone.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }
                  variant="contained"
                  className={classes.sendButton}
                  onClick={onConfirm}
                >
                  {loading ? <CircularProgress /> : buttonContents}
                </Button>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
        {/**snackbar */}
        <Snackbar
          open={alert.open}
          message={alert.message}
          ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={() => setAlert({ ...alert, open: false })}
          autoHideDuration={4000}
        />
        <Grid
          item
          container
          direction={matchesMd ? "column" : "row"}
          className={classes.background}
          lg={8}
          xl={9}
          alignItems="center"
          justifyContent={matchesMd ? "center" : undefined}
        >
          <Grid item style={{ marginLeft: matchesMd ? 0 : "3em", textAlign: matchesMd ? "center" : "inherit" }}>
            <Grid container direction="column">
              <Grid item>
                <Typography align={matchesMd ? "center" : undefined} variant="h2">
                  Simple Software.
                  <br />
                  Revolutionary Results.
                </Typography>
                <Typography align={matchesMd ? "center" : undefined} variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                  Take advantage of the 21st Century.
                </Typography>
                <Grid className={classes.learnMoreButton} justifyContent={matchesMd ? "center" : "inherit"} container item>
                  <Button onClick={() => props.setValue(1)} component={Link} to="/revolution" variant="outlined">
                    <span style={{ marginRight: 5 }}>Learn More</span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button onClick={() => props.setValue(5)} component={Link} to="/estimate" className={classes.estimateButton} variant="contained">
              Free Estimate
            </Button>
          </Grid>
        </Grid>
      </Grid>{" "}
    </ThemeProvider>
  );
};

export default Contact;
