import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { selectLoading } from "../../redux/async/async.selectors";
import { createStructuredSelector } from "reselect";

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

const LoadingComponent = ({ loading }) => {
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading
});

export default connect(mapStateToProps)(LoadingComponent);
