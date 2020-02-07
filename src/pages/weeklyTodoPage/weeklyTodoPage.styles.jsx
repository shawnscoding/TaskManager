import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import styled, { css } from "styled-components";
import { Grid } from "@material-ui/core";

export const HeaderDay = styled(Grid)`
  -webkit-clip-path: polygon(16% 0, 100% 0, 80% 100%, 0% 100%);
  clip-path: polygon(16% 0, 100% 0, 80% 100%, 0% 100%);
  width: 5rem;
  border-radius: 10px;
`;

export const useStyles = makeStyles(theme => ({
  header: {
    padding: theme.spacing(2, 0),
    backgroundColor: theme.palette.paper
  },
  dayOfMonth: {
    fontSize: "1.7rem",
    textAlign: "center"
  },
  dayOfWeek: {
    textAlign: "center"
  },
  days: {
    backgroundColor: "#f2f2f2",
    padding: theme.spacing(1, 2),
    color: theme.palette.text.secondary
  },
  selectedDay: {
    backgroundColor: theme.palette.text.secondary,
    color: "#fff",
    padding: theme.spacing(1, 2)
  },
  red: {
    backgroundColor: "red"
  },
  blue: {
    backgroundColor: "blue"
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 4)
  },
  todoAllContainer: {
    height: "3.1rem"
  },
  todoAllHour: {
    "&:after": {
      content: "''",
      clear: "both",
      display: "table"
    },
    "& p": {
      float: "left"
    },
    "& p:nth-child(1)": {
      minWidth: "1.5rem"
    }
  },
  todoAlltodo: {},
  Work: {
    background: "linear-gradient(45deg,  #2196F3 30%, #21CBF3 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: "3rem",
    margin: theme.spacing(0, 2),
    textAlign: "left",
    padding: "0 30px"
  },
  Study: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: "3rem",
    margin: theme.spacing(0, 2),
    textAlign: "left",

    padding: "0 30px"
  },
  HouseChore: {
    background: "linear-gradient(45deg, #4568dc 30%, #b06ab3 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: "3rem",
    margin: theme.spacing(0, 2),
    textAlign: "left",
    padding: "0 30px"
  },
  Socializing: {
    background: "linear-gradient(45deg,#f093fb 30%, #f5576c 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: "3rem",
    margin: theme.spacing(0, 2),
    textAlign: "left",

    padding: "0 30px"
  },
  Health: {
    background: "linear-gradient(45deg, #56ab2f 30%, #a8e063 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: "3rem",
    margin: theme.spacing(0, 2),
    textAlign: "left",

    padding: "0 30px"
  },
  Shopping: {
    background: "linear-gradient(45deg, #1e3c72    30%, #2a5298 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: "3rem",
    margin: theme.spacing(0, 2),
    textAlign: "left",

    padding: "0 30px"
  },
  TheRest: {
    background: "linear-gradient(45deg, #84fab0  30%, #8fd3f4 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: "3rem",
    margin: theme.spacing(0, 2),
    textAlign: "left",

    padding: "0 30px"
  }
}));
