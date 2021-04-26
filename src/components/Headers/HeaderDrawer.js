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
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useLanguage } from "../LanguageProvider/LanguageProvider";
import MenuItems from "./MenuItems";
import engUk from "../../images/webp/engUkLanguage.png";
import arKsa from "../../images/webp/arKsaLanguage.png";
import { Link } from "@material-ui/core";

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
    padding: theme.spacing(3),
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

export default function HeaderDrawer() {
  const preventDefault = (event) => event.preventDefault();
  const { language, setLanguage } = useLanguage();
  const sectionsEn = [
    { title: "About", id: "about" },
    { title: "Resume", id: "resume" },
    { title: "Islamic Banking / Finance Project", id: "islamic-banking" },
    { title: "Public Private Partnership-PPP", id: "ppp" },
    { title: "Corporate M&A Capital Markets", id: "corporate" },
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
      title: `المصرفية الإسلامية
    / التمويل /
    تمويل المشاريع`,
      id: "islamic-banking",
    },
    {
      title: `الشراكة
    بين القطاعين
    العام والخاص (PPP)`,
      id: "ppp",
    },
    {
      title: "عمليات الدمج والاستحواذ للشركات / أسواق رأس المال",
      id: "corporate",
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
  //   const boldTheme = createMuiTheme({
  //     typography: {
  //       fontSize: 15,
  //     },
  //     body1: {
  //         fontWeight: 800,
  //       },
  //   });
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
            <a href="#" style={{color:"black",textDecoration:"none"}}>
            Siraj Al Islam
  </a> 
            </Typography>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

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
            <div className="d-flex justify-content-around w-100 pt-3">
              <div onClick={() => setLanguage("en")} style={{cursor:"pointer"}}>
                <img src={engUk} style={{ width: "50px" }} alt="" />
                <p>English</p>
              </div>
              <div onClick={() => setLanguage("ar")} style={{cursor:"pointer"}}>
                <img src={arKsa} style={{ width: "50px" }} alt="" />
                <p>عربى</p>
              </div>
            </div>
          </div>

          {/* <List>
            <ListItem>
              <ListItemText>
                <div className="d-flex justify-content-around">
                  <img src={engUk} style={{ width: "50px" }} alt="" />{" "}
                  <img src={arKsa} style={{ width: "50px" }} alt="" />{" "}
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
              <img src={arKsa} style={{ width: "25px" }} alt="" />{" "}
                  <b>Arabic</b>
              </ListItemText>
            </ListItem>
          </List> */}

          <Divider className="mt-3" />

          {language === "en" ? (
            <>
              <MenuItems
                sections={sectionsEn}
                handleDrawerClose={handleDrawerClose}
                language="en"
              />
              <MenuItems
                sections={sectionsAr}
                handleDrawerClose={handleDrawerClose}
                language="ar"
              />
            </>
          ) : (
            <>
              <MenuItems
                sections={sectionsAr}
                handleDrawerClose={handleDrawerClose}
                language="ar"
              />
              <MenuItems
                sections={sectionsEn}
                handleDrawerClose={handleDrawerClose}
                language="en"
              />
            </>
          )}
        </Drawer>
      </div>
    </ThemeProvider>
  );
}
