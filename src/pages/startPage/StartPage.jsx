import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DateRangeIcon from "@material-ui/icons/DateRange";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { withRouter } from "react-router-dom";
import { format } from "date-fns";
import { connect } from "react-redux";
import { toggleTodoFormOpen } from "../../redux/async/async.actions";
import { createBrowserHistory } from "history";
import { createStructuredSelector } from "reselect";
import { selectMonthlyTodo } from "../../redux/todo/todo.selectors";
import LoadingCompoent from "../../component/loader/loadingCompoent";
const useStyles = makeStyles(theme => ({
  container: {
    height: "100%"
  },
  item: {
    padding: "1rem 3rem 1rem 3rem",
    [theme.breakpoints.up("sm")]: {
      padding: "1rem 3rem 1rem 3rem"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 1.5rem 1rem 1.5rem"
    },
    "@media (max-width:800px)": {
      padding: "1rem 1rem 1rem 1rem"
    },
    "@media (max-width:700px)": {
      padding: "2rem 1rem 1rem 1rem"
    }
  },
  addIconBox: {
    color: "#399babed"
  },
  addIcon: {
    fontSize: "9rem"
  },
  card: {
    background: "#fff",
    padding: "1.5rem",
    height: "54vh",
    borderRadius: "8px",
    boxShadow: "0 5px 11px #7d7b7b80",
    transition: "transform 0.2s",

    "& button": {
      background: "#399babed"
    },
    "&:hover": {
      background: "#399babed",
      color: "#fff",

      "& button": {
        background: "#fff",
        color: "#399babed"
      },
      "& div": {
        color: "#fff"
      }
    },
    "@media (max-width:700px)": {
      minWidth: "260px",
      height: "48vh"
    }
  },

  cardTitle: {
    fontSize: "1.5rem",
    "@media (max-width:800px)": {
      fontSize: "1.1rem"
    },
    "@media (max-width:700px)": {
      fontSize: "1.5rem"
    }
  }
}));
const StartPage = ({ toggleOpen, history, todos }) => {
  const classes = useStyles();

  if (todos.length === 0) return <LoadingCompoent />;
  return (
    <React.Fragment>
      <Grid
        direction="row"
        justify="center"
        alignItems="center"
        container
        className={classes.container}
      >
        <Grid className={classes.item} item>
          <Grid
            container
            justify="space-between"
            direction="column"
            alignItems="center"
            className={classes.card}
          >
            <Grid item>
              <Typography
                className={classes.cardTitle}
                variant="h5"
                gutterBottom
              >
                Create New Task!
              </Typography>
            </Grid>
            <Grid className={classes.addIconBox} item>
              <NoteAddIcon className={classes.addIcon} />
            </Grid>
            <Grid item>
              <Button
                className={classes.Button}
                size="large"
                variant="contained"
                color="primary"
                onClick={() => toggleOpen()}
              >
                add new Task
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.item} item>
          <Grid
            container
            justify="space-between"
            direction="column"
            alignItems="center"
            className={classes.card}
          >
            <Grid item>
              <Typography
                className={classes.cardTitle}
                variant="h5"
                gutterBottom
              >
                Check Today's Task
              </Typography>
            </Grid>
            <Grid className={classes.addIconBox} item>
              <DateRangeIcon className={classes.addIcon} />
            </Grid>
            <Grid item>
              <Button
                className={classes.Button}
                size="large"
                variant="contained"
                color="primary"
                onClick={() => history.push(`/`)}
              >
                view today's task
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  todos: selectMonthlyTodo
});

const mapDispatchToProps = dispatch => ({
  toggleOpen: () => dispatch(toggleTodoFormOpen())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(StartPage)
);
