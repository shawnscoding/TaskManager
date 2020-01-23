// import React from "react";
// import clsx from "clsx";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import { Avatar } from "@material-ui/core";
// import { useStyles } from "./header.styles";
// import ThumbUpIcon from "@material-ui/icons/ThumbUp";
// import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
// import HistoryIcon from "@material-ui/icons/History";
// import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
// import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
// import ForumIcon from "@material-ui/icons/Forum";
// import TimeToLeaveIcon from "@material-ui/icons/TimeToLeave";
// import SettingsIcon from "@material-ui/icons/Settings";
// import { withRouter } from "react-router-dom";

// const Header = ({ history }) => {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         className={clsx(classes.appBar, {
//           [classes.appBarShift]: open
//         })}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             className={clsx(classes.menuButton, open && classes.hide)}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Avatar alt="logo" src="/assets/logo.png" className={classes.logo} />

//           <Typography variant="h6" noWrap>
//             My Motivator
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="persistent"
//         anchor="left"
//         open={open}
//         classes={{
//           paper: classes.drawerPaper
//         }}
//       >
//         <div className={classes.drawerHeader}>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === "ltr" ? (
//               <ChevronLeftIcon />
//             ) : (
//               <ChevronRightIcon />
//             )}
//           </IconButton>
//         </div>
//         <Divider />
//         <List>
//           <ListItem onClick={() => history.push("/todos")} button>
//             <ListItemIcon>
//               <PlaylistAddCheckIcon />
//             </ListItemIcon>
//             <ListItemText primary="Todos" />
//           </ListItem>
//           <ListItem button>
//             <ListItemIcon>
//               <PlayCircleOutlineIcon />
//             </ListItemIcon>
//             <ListItemText primary="Start Task" />
//           </ListItem>
//           <ListItem button>
//             <ListItemIcon>
//               <HistoryIcon />
//             </ListItemIcon>
//             <ListItemText primary="History" />
//           </ListItem>
//           <ListItem button>
//             <ListItemIcon>
//               <ForumIcon />
//             </ListItemIcon>
//             <ListItemText primary="Chat" />
//           </ListItem>
//         </List>
//         <Divider />
//         <List>
//           <ListItem button>
//             <ListItemIcon>
//               <PeopleOutlineIcon />
//             </ListItemIcon>
//             <ListItemText primary="People" />
//           </ListItem>
//           <ListItem button>
//             <ListItemIcon>
//               <ThumbUpIcon />
//             </ListItemIcon>
//             <ListItemText primary="Liked" />
//           </ListItem>
//         </List>
//         <Divider />
//         <List>
//           <ListItem button>
//             <ListItemIcon>
//               <SettingsIcon />
//             </ListItemIcon>
//             <ListItemText primary="Setting" />
//           </ListItem>
//           <ListItem button>
//             <ListItemIcon>
//               <TimeToLeaveIcon color="secondary" />
//             </ListItemIcon>
//             <ListItemText primary="Log Out" />
//           </ListItem>
//         </List>
//       </Drawer>
//       <main
//         className={clsx(classes.content, {
//           [classes.contentShift]: open
//         })}
//       >
//         <div className={classes.drawerHeader} />
//       </main>
//     </div>
//   );
// };

// export default withRouter(Header);
