import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
  Box
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import withWidth from "@material-ui/core/withWidth";

const useStyles = makeStyles(theme => ({
  container: {
    padding: "30px 100px"
  },
  card: {
    width: 300,
    padding: theme.spacing(2),
    borderRadius: 10,
    boxShadow: "0 0.5rem 1rem grey",
    transition: "transform 0.2s",
    "&:hover": {
      boxShadow: "0 1rem 1.4rem grey",
      transform: "translateY(-1rem) scale(1.02)"
    }
  }
}));

const components = {
  sm: "em",
  md: "u",
  lg: "del"
};

const TodoPage = props => {
  const { width } = props;
  const Component = components[width] || "span";
  return (
    <React.Fragment>
      <Typography variant="subtitle1">
        <Component>{`Current width: ${width}`}</Component>
      </Typography>
    </React.Fragment>
  );
};

export default withWidth()(TodoPage);
