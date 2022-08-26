import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { makeStyles } from "tss-react/mui";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import people from "../assets/people.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import users from "../assets/users.svg";
import iphone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import estimateAnimation from "../animations/estimateAnimation/data.json";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { cloneDeep } from "lodash";

const useStyles = makeStyles()((theme) => {
  return {
    icon: {
      width: "12em",
      height: "12em",
    },
    estimateButton: {
      ...theme.typography.estimate,
      borderRadius: "50px!important",
      height: "55px!important",
      width: "225px!important",
      backgroundColor: `${theme.palette.common.orange}!important`,
      fontSize: "1.5rem!important",
      marginTop: "5em!important",

      "&:hover": {
        backgroundColor: `${theme.palette.secondary.light}!important`,
      },
    },
    message: {
      border: `2px solid ${theme.palette.common.blue}!important`,
      marginTop: "3em!important",
      marginBottom: "2em!important",
      borderRadius: "7px!important",
    },
    specialText: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "1.5rem",
      color: theme.palette.common.orange,
    },
    disabled: {
      "& .Mui-disabled": {
        backgroundColor: "#D3D3D3!important",
        color: "grey!important",
      },
    },
  };
});

const defaultQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "iOS/Android App Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "phones and tablet outline",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 0,
      },
    ],
  },
];
const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: iphone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];
// console.log('testing questins',softwareQuestions);
// const newQuestions = cloneDeep(defaultQuestions)
// newQuestions[0].options[0].selected = true;
// console.log(defaultQuestions[0].options[0]);

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

console.log("testing questins websire", websiteQuestions);

const Estimate = (props) => {
  const { classes } = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("mh"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  const [questions, setQuestions] = useState(defaultQuestions);
  const matchesSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDialog, setOpenDialog] = useState(false);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");
  const [total, setTotal] = useState(0);
  const [service, setService] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState("");
  const [category, setCategory] = useState("");
  const [users, setUsers] = useState("");
  //snackbar
  const [alert, setAlert] = useState({ open: false, message: "", backgroundColor: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (questions.length > 2) {
      console.log("questions", questions);
    }
  }, [questions]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const nextQuestion = () => {
    const newQuestion = cloneDeep(questions);
    const currentlyActive = newQuestion.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestion[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestion[nextIndex] = { ...newQuestion[nextIndex], active: true };
    setQuestions(newQuestion);
  };

  const prevQuestion = () => {
    const newQuestion = cloneDeep(questions);
    const currentlyActive = newQuestion.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;

    newQuestion[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestion[nextIndex] = { ...newQuestion[nextIndex], active: true };
    setQuestions(newQuestion);
  };

  const navigationPreviousDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    console.log("checking currentlyActive prev", currentlyActive[0].id);

    if (currentlyActive[0].id == 1) {
      return true;
    } else {
      return false;
    }
  };

  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    console.log("checking currentlyActive questions[questions.length - 1].id", questions[questions.length - 1].id);

    if (currentlyActive[0].id == questions[questions.length - 1].id) {
      return true;
    } else {
      return false;
    }
  };

  const handleSelect = (id) => {
    const newQuestion = cloneDeep(questions);
    console.log("newQuestion before", cloneDeep(questions));

    const currentlyActive = newQuestion.filter((question) => question.active);
    console.log("newQuestion currentlyActive", currentlyActive);
    const activeIndex = currentlyActive[0].id - 1;

    const newSelected = newQuestion[activeIndex].options[id - 1];
    const previousSelected = currentlyActive[0].options.filter((option) => option.selected);

    console.log("newQuestion previousSelected", previousSelected);
    switch (currentlyActive[0].subtitle) {
      case "Select one.":
        if (previousSelected[0]) {
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }

    switch (newSelected.title) {
      case "Custom Software Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory("");
        setUsers("");
        break;
      case "iOS/Android App Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory("");
        setUsers("");
        break;
      case "Website Development":
        setQuestions(websiteQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setCategory("");
        setUsers("");
        break;
      default:
        setQuestions(newQuestion);
        break;
    }
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const getTotal = () => {
    let cost = 0;
    const selection = questions.map((ques) => ques.options.filter((opt) => opt.selected)).filter((ques) => ques.length > 0);
    selection.map((options) => options.map((option) => (cost += option.cost)));

    if (questions.length > 2) {
      console.log("im in");
      const userCost = questions
        .filter((question) => question.title == "How many users do you expect?")
        .map((question) => question.options.filter((opt) => opt.selected))[0][0];
      setUsers(userCost.title);

      cost -= userCost.cost;
      cost *= userCost.cost;

      console.log("ccccccccccc", cost);
    }
    setTotal(cost);
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
  const getPlatforms = () => {
    let newPlatforms = [];

    if (questions.length > 2) {
      questions
        .filter((question) => question.title === "Which platforms do you need supported?")
        .map((ques) => ques.options.filter((opt) => opt.selected))[0]
        .map((opt) => newPlatforms.push(opt.title));
      setPlatforms(newPlatforms);
      console.log("newPlatforms", newPlatforms);
    }
  };

  const getFeatures = () => {
    let newFeatures = [];

    if (questions.length > 2) {
      questions
        .filter((question) => question.title === "Which features do you expect to use?")
        .map((ques) => ques.options.filter((opt) => opt.selected))
        .map((option) => option.map((newFeature) => newFeatures.push(newFeature.title)));
      setFeatures(newFeatures);
      console.log("options options ques", newFeatures);
    }
  };

  const getCustomFeature = () => {
    if (questions.length > 2) {
      const newCustomFeatures = questions
        .filter((ques) => ques.title === "What type of custom features do you expect to need?")
        .map((ques) => ques.options.filter((opt) => opt.selected))[0][0].title;

      setCustomFeatures(newCustomFeatures);
    }
  };

  const getCategory = () => {
    if (questions.length === 2) {
      const newCategory = questions
        .filter((question) => question.title === "Which type of website are you wanting?")
        .map((ques) => ques.options.filter((opt) => opt.selected))[0][0].title;

      console.log("newCategory", newCategory);
      setCategory(newCategory);
    }
  };

  const sendEstimate = () => {
    setLoading(true);
    axios
      .get("https://us-central1-mycompany-95d96.cloudfunctions.net/sendMail", {
        params: {
          name: name,
          email: email,
          phone: phone,
          message: message,
          total: total,
          category: category,
          service: service,
          platforms: platforms,
          features: features,
          customFeatures: customFeatures,
          users: users,
        },
      })
      .then((res) => {
        setLoading(false);

        setAlert({ open: true, message: "Estimate placed successfully!", backgroundColor: "#4BB543" });
        setOpenDialog(false);
      })
      .catch((err) => {
        setLoading(false);
        setAlert({ open: true, message: "Something went wrong please try again!", backgroundColor: "#FF3232" });
      });
  };

  const estimateDisabled = () => {
    let disabled = true;
    const emptySelections = questions.map((question) => question.options.filter((option) => option.selected)).filter((ques) => ques.length === 0);

    if (questions.length === 2) {
      if (emptySelections.length === 1) {
        disabled = false;
      }
    } else if (questions.length === 1) {
      disabled = true;
    } else if (emptySelections.length < 3 && questions[questions.length - 1].options.filter((opt) => opt.selected).length > 0) {
      disabled = false;
    }
    console.log("checking 234234324", emptySelections);
    return disabled;

    console.log("checking 234234324", emptySelections);
  };

  const softwareSelection = (
    <Grid item container direction="column">
      <Grid item container alignItems="center" style={{ marginBottom: "1.25em" }}>
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2" paragraph>
            You want {service}
            {platforms.length > 0
              ? ` for ${
                  //if only web application is selected...
                  platforms.indexOf("Web Application") > -1 && platforms.length === 1
                    ? //then finish sentence here
                      "a Web Application."
                    : //otherwise, if web application and another platform is selected...
                    platforms.indexOf("Web Application") > -1 && platforms.length === 2
                    ? //then finish the sentence here
                      `a Web Application and an ${platforms[1]}.`
                    : //otherwise, if only one platform is selected which isn't web application...
                    platforms.length === 1
                    ? //then finish the sentence here
                      `an ${platforms[0]}`
                    : //otherwise, if other two options are selected...
                    platforms.length === 2
                    ? //then finish the sentence here
                      "an iOS Application and an Android Application."
                    : //otherwise if all three are selected...
                    platforms.length === 3
                    ? //then finish the sentence here
                      "a Web Application, an iOS Application, and an Android Application."
                    : null
                }`
              : null}
          </Typography>
        </Grid>
      </Grid>
      {/**another item */}
      <Grid item container alignItems="center" style={{ marginBottom: "1.25em" }}>
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2" paragraph>
            {"with "}
            {/* if we have features... */}
            {features.length > 0
              ? //...and there's only 1...
                features.length === 1
                ? //then end the sentence here
                  `${features[0]}.`
                : //otherwise, if there are two features...
                features.length === 2
                ? //...then end the sentence here
                  `${features[0]} and ${features[1]}.`
                : //otherwise, if there are three or more features...
                  features
                    //filter out the very last feature...
                    .filter((feature, index) => index !== features.length - 1)
                    //and for those features return their name...
                    .map((feature, index) => <span key={index}>{`${feature}, `}</span>)
              : null}
            {features.length > 2
              ? //...and then finally add the last feature with 'and' in front of it
                ` and ${features[features.length - 1]}.`
              : null}
          </Typography>
        </Grid>
      </Grid>

      {/**end another item */}
      {/**another item */}
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2" paragraph>
            The custom features will be of {customFeatures.toLowerCase()} {`, and the project will be used by about ${users} users`}
          </Typography>
        </Grid>
      </Grid>

      {/**end another item */}
    </Grid>
  );
  const websiteSelection = (
    <Grid item container direction="column" style={{ marginTop: "14em" }}>
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body2">You want {category === "Basic" ? "a Basic Website." : `an ${category} Webite.`}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid container direction="row">
      <Grid container direction="column" lg alignItems={matchesMd ? "center" : undefined}>
        <Grid item style={{ marginTop: "2em", marginLeft: matchesMd ? 0 : "5em" }}>
          <Typography variant="h2" align={matchesMd ? "center" : undefined}>
            Estimate
          </Typography>
        </Grid>
        <Grid item style={{ marginRight: matchesMd ? 0 : "10em", maxWidth: "50em", marginTop: "7.5em" }}>
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </Grid>
      </Grid>
      <Grid container direction="column" lg style={{ marginRight: matchesMd ? 0 : "2em", marginBottom: "25em" }} alignItems="center">
        {questions
          .filter((question) => question.active)
          .map((ques, index) => {
            return (
              <React.Fragment key={index}>
                <Grid item>
                  <Typography
                    variant="h2"
                    align="center"
                    style={{
                      fontWeight: 500,
                      fontSize: "2.25rem",
                      marginTop: "5em",
                      lineHeight: 1.25,
                      marginLeft: matchesXS ? "1em" : 0,
                      marginRight: matchesXS ? "1em" : 0,
                    }}
                    gutterBottom
                  >
                    {ques.title}
                  </Typography>
                  <Typography variant="body2" align="center" style={{ marginBottom: "2.5em" }}>
                    {ques.subtitle}
                  </Typography>
                </Grid>
                <Grid item container>
                  {ques.options.map((option,index) => {
                    return (
                      <Grid
                        item
                        container
                        direction="column"
                        md
                        key={index}
                        component={Button}
                        onClick={() => handleSelect(option.id)}
                        style={{
                          display: "grid",
                          textTransform: "none",
                          borderRadius: 0,
                          marginBottom: matchesMd ? "1.5em" : 0,
                          backgroundColor: option.selected ? theme.palette.common.orange : null,
                        }}
                      >
                        <Grid item style={{ minHeight: "4.5em", maxWidth: "14em" }}>
                          <Typography variant="h6" align="center">
                            {option.title}
                          </Typography>
                          <Typography variant="caption" align="center">
                            {option.subtitle}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <img src={option.icon} alt={option.iconAlt} className={classes.icon} />
                        </Grid>
                      </Grid>
                    );
                  })}

                  {/** */}
                </Grid>
              </React.Fragment>
            );
          })}

        {/** another item container for arrows */}
        <Grid item container justifyContent="space-between" style={{ width: "18em", marginTop: "3em" }}>
          <Grid item>
            <IconButton disabled={navigationPreviousDisabled()} onClick={prevQuestion}>
              <img src={navigationPreviousDisabled() ? backArrowDisabled : backArrow} alt="previous question" />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton disabled={navigationNextDisabled()} onClick={nextQuestion}>
              <img src={navigationNextDisabled() ? forwardArrowDisabled : forwardArrow} alt="next question" />
            </IconButton>
          </Grid>
        </Grid>
        {/** end item container for arrows */}
        {/** button item */}
        <Grid item className={classes.disabled}>
          <Button
            variant="contained"
            disabled={estimateDisabled()}
            onClick={() => {
              setOpenDialog(true);
              getTotal();
              getPlatforms();
              getFeatures();
              getCustomFeature();
              getCategory();
            }}
            className={classes.estimateButton}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      {
        //**dialog */
      }
      <Dialog open={openDialog} onClose={handleClose} fullWidth fullScreen={matchesXS} maxWidth="lg" style={{ zIndex: 1302 }}>
        <Grid container justifyContent="center">
          <Grid item style={{ marginTop: "1em", marginBottom: "1em" }}>
            <Typography variant="h2" align="center">
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid container direction={matchesXS ? "column" : "row"} alignItems={matchesXS ? "center" : undefined} justifyContent="space-around">
            <Grid item container direction="column" md={7} style={{ maxWidth: "20em" }}>
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
              <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
                <TextField
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  className={classes.message}
                  multiline
                  rows={10}
                  variant="standard"
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell us more about your project"
                />
              </Grid>
              <Grid item>
                <Typography variant="body2" align={matchesXS ? "center" : undefined} paragraph style={{lineHeight:1.25}}>
                  We can create this digital solution for an estimated <span className={classes.specialText}>${total.toFixed(2)}</span>
                </Typography>
                <Typography variant="body2" align={matchesXS ? "center" : undefined} paragraph>
                  Fill out your name, phone number, and email, place your request, and we'll get back to you with details moving forward and a final
                  price.
                </Typography>
              </Grid>
            </Grid>
            {/**for selection item container*/}
            <Grid item container direction="column" alignItems={matchesXS ? "center" : undefined} md={5} style={{ maxWidth: "30em" }}>
              <Grid item>
                {/**selection */}
                {questions.length > 2 ? softwareSelection : websiteSelection}
              </Grid>
              {/**another grid item for button */}
              <Grid item className={classes.disabled}>
                <Button variant="contained" className={classes.estimateButton} onClick={sendEstimate} disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    email.length === 0 ||
                    phone.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }>
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <>
                      {" "}
                      Place Request
                      <img src={send} alt="paper airplane" style={{ marginLeft: "0.5em" }} />
                    </>
                  )}
                </Button>
              </Grid>
              {/**end another grid item for button */}

              {/**another grid item for button */}
              <Grid
                item
                style={{ marginBottom: matchesXS ? "5em" : 0 }}
                sx={{ display: { sm: "none", md: "none", ccs: "none", xs: "block", mh: "none", lg: "none", bt: "block" } }}
              >
                <Button style={{ fontWeight: 300 }} color="primary" onClick={() => setOpenDialog(false)}>
                  Cancel
                </Button>
              </Grid>
              {/**end another grid item for button */}
            </Grid>
            {/**end for selection item container*/}
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
    </Grid>
  );
};

export default Estimate;
