import React from "react";
import withWidth from "@material-ui/core/withWidth";

const DrawerWidth = ({ width }) => {
  let drawerWidth = 187;
  console.log(width);
  return drawerWidth;
};

export default withWidth()(DrawerWidth);
