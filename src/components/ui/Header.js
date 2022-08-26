import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import useScrollTrigger from "@mui/material/useScrollTrigger";
import { makeStyles } from "tss-react/mui";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import "./css/customization.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles()((theme) => {
  return {
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "3em",
      [theme.breakpoints.down("lg")]: {
        marginBottom: "2em",
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: "1.25em",
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "1.25em",
      },
    },
    logo: {
      textTransform:'none',
      height: "8em",
      [theme.breakpoints.down("lg")]: {
        height: "7em",
      },
      [theme.breakpoints.down("md")]: {
        height: "5.5em",
      },
      [theme.breakpoints.down("xs")]: {
        height: "5.5em",
      },
    },
    tabContainer: {
      marginLeft: "auto",
    },
    tab: {
      ...theme.typography.tab,

      minWidth: "10%!important",
      marginLeft: "25px!important",
      "&:hover": {
        textDecoration: "glow",
      },
    },
    logoContainer: {
      padding: "0px!important",
      "&:hover": {
        backgroundColor: "transparent!important",
      },
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: "50px!important",
      marginLeft: "50px!important",
      marginRight: "25px!important",
      height: "45px!important",
      color: "white!important",
      "&:hover": {
        backgroundColor: theme.palette.secondary.light
      }
    },
    menu: {
      backgroundColor: `${theme.palette.common.blue}!important`,
      color: "white!important",
      borderRadius: "0px",
    },
    menuItem: {
      ...theme.overrides,
      ...theme.typography.tabs,
      opacity: 0.7,
      "&:hover": {
        opacity: 1,
      },
    },
    drawerIconContainer: {
      marginLeft: "auto",
      "&:hover": {
        backgroundColor: "transparent!important",
      },
    },
    drawerIcon: {
      height: "50px",
      width: "50px",
    },
    drawer: {
      backgroundColor: theme.palette.common.blue,
    },
    drawerItem: {
      ...theme.typography.tab,
      color: "white",
      opacity: 0.7,
    },
    drawerItemEstimate: {
      backgroundColor: theme.palette.common.orange,
    },
    drawerItemSelected: {
      backgroundColor: 'rgba(0,47,76,0.6)!important',
      "& .MuiListItemText-root": {
        opacity: 1,
      },
    },
    appbar: {
      zIndex: theme.zIndex.modal + 1,
    },
  };
});

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {
  const {value,setValue,selectedIndex,setSelectedIndex} = props;
  const { classes } = useStyles();
  const theme = useTheme();
  const iOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);

  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  // const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    console.log("indexss", selectedIndex);
  }, [selectedIndex]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log("newValue", newValue);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setSelectedIndex(i);
    console.log("newValue index", i);
  };

  const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 2, selectedIndex: 0 },
    { name: "Custom Software Development", link: "/customsoftware", activeIndex: 2, selectedIndex: 1 },
    { name: "iOS/Andriod Development", link: "/mobileapps", activeIndex: 2, selectedIndex: 2 },
    { name: "Webbsite Development", link: "/websites", activeIndex: 2, selectedIndex: 3 },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },

    { name: "The Revolution", link: "/revolution", activeIndex: 1 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 2,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? true : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: "About Us", link: "/aboutus", activeIndex: 3 },
    { name: "Contact US", link: "/contactus", activeIndex: 4 },
  ];

  useEffect(() => {
    // if (window.location.pathname === "/" && value !== 0) {
    //   setValue(0);
    // } else if (window.location.pathname === "/revolution" && value !== 1) {
    //   setValue(1);
    // } else if (window.location.pathname === "/services" && value !== 2) {
    //   setValue(2);
    // } else if (window.location.pathname === "/aboutus" && value !== 3) {
    //   setValue(3);
    // } else if (window.location.pathname === "/contactus" && value !== 4) {
    //   setValue(4);
    // } else if (window.location.pathname === "/estimate" && value !== 5) {
    //   setValue(5);
    // }

    // switch (window.location.pathname) {

    //   case "/":
    //     if (value !== 0) {
    //       setValue(0);
    //     }
    //     break;
    //   case "/revolution":
    //     if (value !== 1) {
    //       setValue(1);
    //     }
    //     break;
    //   case "/services":
    //     if (value !== 2) {
    //       setValue(2);
    //       setSelectedIndex(0);
    //     }
    //     break;
    //   case "/customsoftware":
    //     if (value !== 2) {
    //       setValue(2);
    //       setSelectedIndex(1);
    //     }
    //     break;
    //   case "/mobileapps":
    //     if (value !== 2) {
    //       setValue(2);
    //       setSelectedIndex(2);
    //     }
    //     break;
    //   case "/websites":
    //     if (value !== 2) {
    //       setValue(2);
    //       setSelectedIndex(3);
    //     }
    //     break;
    //   case "/aboutus":
    //     if (value !== 3) {
    //       setValue(3);
    //     }
    //     break;
    //   case "/contactus":
    //     if (value !== 4) {
    //       setValue(4);
    //     }
    //     break;
    // }

    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
          case '/estimate':
            props.setValue(5);

            break;
        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes,props]);

  const tabs = (
    <React.Fragment>
      <Tabs indicatorColor="secondary" onChange={handleChange} value={value} className={classes.tabContainer}>
        {routes.map((route, index) => (
          <Tab
            key={`${route}${route.activeIndex}`}
            component={Link}
            to={route.link}
            className={classes.tab}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
        {/* <Tab component={Link} to="/" className={classes.tab} label="Home" />
        <Tab className={classes.tab} to="/revolution" label="The Revolution" />
        <Tab
          component={Link}
          to="/services"
          className={classes.tab}
          label="Services"
          aria-owns={}
          aria-haspopup={}
          onMouseOver={(event) => handleClick(event)}
        />
        <Tab className={classes.tab} to="/aboutus" label="About Us" />
        <Tab className={classes.tab} to="/contactus" label="Contact US" /> */}
      </Tabs>
      <Button variant="contained" onClick={()=> props.setValue(5)} component={Link} to="estimate" color="secondary" className={classes.button}>
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={open} 
        onClick={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        elevation={0}
        keepMounted
        style={{zIndex: 1302}}
      >
        {menuOptions.map((option, index) => (
          <MenuItem
            sx={{
              "& .Mui-selected": {
                color: "black",
              },
            }}
            key={option.link}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              setValue(2);
              handleClose();
            }}
            classes={{ root: classes.menuItem }}
            component={Link}
            selected={index === selectedIndex && value == 2}
            to={option.link}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, index) => (
            <ListItem
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>{route.name}</ListItemText>
            </ListItem>
          ))}

          {/* <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(0);
            }}
            divider
            button
            component={Link}
            to="/"
            selected={value === 0}
            className={value === 0 ? [classes.drawerItemSelected,classes.drawerItem]:classes.drawerItem} 
      
          >
            <ListItemText disableTypography>
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(1);
            }}
            divider
            button
            component={Link}
            to="/revolution"
            selected={value === 1}
            className={value === 1 ? [classes.drawerItemSelected,classes.drawerItem]:classes.drawerItem}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              The Revolution
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(2);
            }}
            divider
            button
            component={Link}
            to="/services"
            selected={value === 2}
            className={value === 2 ? [classes.drawerItemSelected,classes.drawerItem]:classes.drawerItem}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Services
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(3);
            }}
            divider
            button
            component={Link}
            to="/aboutus"
            selected={value === 3}
            className={value === 3 ? [classes.drawerItemSelected,classes.drawerItem]:classes.drawerItem}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              About Us
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            divider
            button
            component={Link}
            to="/contactus"
            selected={value === 4}
            className={value === 4 ? [classes.drawerItemSelected,classes.drawerItem]:classes.drawerItem}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Contact Us
            </ListItemText>
          </ListItem> */}
          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            button
            component={Link}
            to="/estimate"
            selected={value === 5}
            classes={{ root: classes.drawerItemEstimate , selected: classes.drawerItemSelected }}
          >
            <ListItemText className={classes.drawerItem} disableTypography>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <StyledEngineProvider injectFirst>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button disableRipple component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)} style={{textDecoration:"none"}}>
              {/* <img alt="company logo" src={logo} className={classes.logo} /> */}
              <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" className={classes.logo}  viewBox="0 0 480 139"><style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 300;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style><path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z"/><path className="st0" d="M-1 139h479.92v.01H-1z"/><text transform="translate(261.994 65.233)" className="st1 st2" fontSize="57">Arc</text><text transform="translate(17.692 112.015)" className="st1 st2" fontSize="54">Development</text><path className="st0" d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"/><path d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z" fill="#0b72b9"/><path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z"/><g id="Group_186" transform="translate(30.153 11.413)"><g id="Group_185"><g id="Words"><path id="Path_59" className="st1" d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"/></g></g></g><path className="st0" d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"/></svg>

            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </StyledEngineProvider>
  );
};

export default Header;
