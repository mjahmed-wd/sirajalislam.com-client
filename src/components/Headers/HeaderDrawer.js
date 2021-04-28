import React from "react";
import clsx from "clsx";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  useTheme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
// import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useLanguage } from "../LanguageProvider/LanguageProvider";
import MenuItems from "./MenuItems";
import engUk from "../../images/webp/engUkLanguage.png";
import arKsa from "../../images/webp/arKsaLanguage.png";
import linkedInLogo from "../../images/linkedIn.png";
import twitterLogo from "../../images/twitter.png";
import Ticker from "../Ticker/Ticker";
// import { Link } from "@material-ui/core";

const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color: "#222222",
    backgroundColor: "#ffffff",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    height: "auto",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function HeaderDrawer({ children }) {
  const preventDefault = (event) => event.preventDefault();
  const { language, setLanguage } = useLanguage();
  const sectionsEn = [
    { title: "About", id: "about" },
    { title: "Resume", id: "resume" },
    { title: "Corporate M&A / Capital Markets", id: "corporate" },
    { title: "Public Private Partnership-PPP", id: "ppp" },
    { title: "Islamic Banking / Finance Project", id: "islamic-banking" },
    { title: "Client Recommendation", id: "recommendations" },
  ];
  const sectionsAr = [
    { title: `عني`, id: "about" },
    {
      title: `نظرة مهنية
    عامة`,
      id: "resume",
    },
    {
      title: "عمليات الدمج والاستحواذ للشركات / أسواق رأس المال",
      id: "corporate",
    },

    {
      title: `الشراكة
    بين القطاعين
    العام والخاص (PPP)`,
      id: "ppp",
    },
    {
      title: `المصرفية الإسلامية
    / التمويل /
    تمويل المشاريع`,
      id: "islamic-banking",
    },
    { title: `توصية العملاء`, id: "recommendations" },
  ];
  const classes = useStyles();
  //   const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 15,
      body1: {
        textAlign: "center",
        fontWeight: 800, // or 'bold'
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <Typography variant="h6" noWrap className={classes.title}>
              <a href="#" style={{ color: "black", textDecoration: "none" }}>
                SIRAJ AL ISLAM
              </a>
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              {/* <MenuIcon /> */}
              <>
                {/* chane language and navigation */}
                <div className="d-flex justify-content-around w-100 p-0 m-0">
                  <div
                    className="ml-2 mr-2"
                    onClick={() => setLanguage("en")}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={engUk} style={{ width: "50px" }} alt="" />
                  </div>
                  <div
                    className="ml-2 mr-2"
                    onClick={() => setLanguage("ar")}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={arKsa} style={{ width: "50px" }} alt="" />
                  </div>
                </div>
              </>
            </IconButton>
          </Toolbar>
        </AppBar>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <div style={{ position: "relative" }}>
            <Ticker />
          </div>
          {children}
        </main>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>

            {/* navigation */}
            <div className="d-flex justify-content-around w-100 pt-3">
              <div
                onClick={() => setLanguage("en")}
                style={{ cursor: "pointer" }}
              >
                <img src={engUk} style={{ width: "50px" }} alt="" />
              </div>
              <div
                onClick={() => setLanguage("ar")}
                style={{ cursor: "pointer" }}
              >
                <img src={arKsa} style={{ width: "50px" }} alt="" />
              </div>
            </div>
          </div>

          <Divider className="mt-2" />
          <div className="d-flex justify-content-center mt-2 w-100 p-2 m-0">
            <div className="ml-2 mr-2" style={{ cursor: "pointer" }}>
              <a href="https://www.linkedin.com/in/sirajalislam/">
                <img src={linkedInLogo} style={{ width: "25px" }} alt="" />
              </a>{" "}
            </div>
            <div className="ml-2 mr-2" style={{ cursor: "pointer" }}>
              <a href="https://twitter.com/SirajAlIslam">
                <img src={twitterLogo} style={{ width: "25px" }} alt="" />
              </a>
            </div>
          </div>

          {language === "en" ? (
            <>
              <MenuItems
                sections={sectionsEn}
                handleDrawerClose={handleDrawerClose}
                language="en"
              />
            </>
          ) : (
            <>
              <MenuItems
                sections={sectionsAr}
                handleDrawerClose={handleDrawerClose}
                language="ar"
              />
            </>
          )}
        </Drawer>
      </div>
    </ThemeProvider>
  );
}
