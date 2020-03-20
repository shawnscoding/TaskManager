import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DateRangeIcon from "@material-ui/icons/DateRange";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { toggleTodoFormOpen } from "../../redux/async/async.actions";
import { createStructuredSelector } from "reselect";
import { selectMonthlyTodo } from "../../redux/todo/todo.selectors";
import LoadingCompoent from "../../component/loader/loadingCompoent";
import { getMonthAndDay } from "./../../utils/helper";
const useStyles = makeStyles(theme => ({
  container: {
    height: "100%"
  },
  item: {
    maxWidth: "24rem",
    padding: "1rem 3rem 1rem 3rem",
    [theme.breakpoints.up("sm")]: {
      padding: "1rem 3rem 1rem 3rem"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1rem 1.5rem 1rem 1.5rem"
    },
    "@media (max-width:900px)": {
      maxWidth: "19rem",
      padding: "1rem 1rem 1rem 1rem"
    },
    "@media (max-width:800px)": {
      padding: "1rem 1rem 1rem 1rem"
    },
    "@media (max-width:700px)": {
      maxWidth: "unset",

      padding: "1.5rem 13px 1rem 13px"
    }
  },
  iconBox: {
    color: "#399babed",
    padding: "4.5rem 0",
    [theme.breakpoints.down("sm")]: {
      padding: "2rem 0"
    }
  },
  icon: {
    fontSize: "9rem"
  },
  card: {
    background: "#fff",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 5px 11px #7d7b7b80",
    transition: "transform 0.2s",

    "& button": {
      background: "#399babed",
      fontSize: "0.9rem",
      "@media (max-width:700px)": {
        fontSize: "0.7rem"
      }
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
    "@media (max-width:960px)": {
      padding: "1.5rem 0.5rem",
      border: "2px solid #c6eaf0e3",
      boxShadow: "unset"
    }
  },

  cardTitle: {
    fontSize: "1.5rem",
    "@media (max-width:900px)": {
      fontSize: "1.2rem"
    },
    "@media (max-width:800px)": {
      fontSize: "1.1rem"
    },

    "@media (max-width:600px)": {
      fontSize: "0.85rem"
    }
  }
}));
const StartPage = ({ toggleOpen, history, todos }) => {
  const classes = useStyles();
  const monthAndDate = getMonthAndDay(new Date());
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
        <Grid xs={6} sm={6} className={classes.item} item>
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
            <Grid className={classes.iconBox} item>
              <NoteAddIcon className={classes.icon} />
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
        <Grid xs={6} sm={6} className={classes.item} item>
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
            <Grid className={classes.iconBox} item>
              <DateRangeIcon className={classes.icon} />
            </Grid>
            <Grid item>
              <Button
                className={classes.Button}
                size="large"
                variant="contained"
                color="primary"
                onClick={() => history.push(`/todo/dailyTodo/${monthAndDate}`)}
              >
                today's task
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
