import React from "react";
import { Box, MenuItem, Menu, IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { signOutStart } from "./../../../redux/auth/auth.actions";
import { connect } from "react-redux";

const ProfileIcon = ({ classes, signOutStart }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    setAnchorEl(null);
    signOutStart();
  };

  return (
    <Box>
      <IconButton
        className={classes.loginIcon}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="outlined"
        color="inherit"
      >
        <AccountCircle size="large" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(null, mapDispatchToProps)(ProfileIcon);
