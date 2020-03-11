import React from "react";
import PropTypes from "prop-types";
import withWidth from "@material-ui/core/withWidth";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const components = {
  sm: "em",
  md: "u",
  lg: "del"
};

function StartPage(props) {
  const { width } = props;
  const Component = components[width] || "span";

  return <Grid>dddddddddddddddddddddddddddddddddd</Grid>;
}

StartPage.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired
};

export default withWidth()(StartPage);
