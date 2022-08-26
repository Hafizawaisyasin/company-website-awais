import React from "react";
import { createTheme } from "@mui/material/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

const theme = createTheme({
  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway!important",
      color: "white!important",
      textTransform: "none!important",
      fontWeight: "700!important",
      fontSize: "1rem!important",
    },

    estimate: {
      fontFamily: "pacifico!important",

      fontSize: "1rem!important",

      textTransform: "none!important",
    },
    h2: {
      fontFamily: "Relway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: `${arcBlue}`,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "pacifico",
      fontSize: "2.5rem",
      color: `${arcBlue}`,
    },
    h4: {
      fontFamily: "Relway",
      fontWeight: 700,
      fontSize: "1.75rem",
      color: `${arcBlue}`,
    },
    h6: {
      fontFamily: "Relway",
      fontWeight: 500,
      color: arcBlue,
    },
    subtitle1: {
      fontWeight: 300,
      fontSize: "1.25rem",
      color: `${arcGrey}`,
    },
    subtitle2: {
      fontWeight: 300,
      fontSize: "1.25rem",
      color: "white",
    },
    body2: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcGrey,
    },
    learnBtn: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 706,
      md: 925,
      mh: 1280,
      lg: 1280,
      xl: 1536,
      cs: 481,
      ccs: 890,
      xss: 500,
      bt:600
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: arcBlue,
          fontSize: "1rem",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: arcGrey,
          fontWeight: 300,
        },
        underline: {
          "&:before": {
            borderBottom: `2px solid ${arcBlue}`,
          },

          "&:hover:before": {
            borderBottom: `2px solid ${arcBlue}!important`,
          },
        },
      },
    },
  },
});

export default theme;
