import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Grid, Typography } from "@material-ui/core";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";

export const RoundedBigIcon = styled(StarRoundedIcon)`
  font-size: 2.2rem;
  margin-bottom: 10px;
  color: #3949ab;
`;

export const BorderRoundedBigIcon = styled(StarBorderRoundedIcon)`
  font-size: 2.2rem;
  margin-bottom: 10px;
  color: #3949ab;
`;

export const HeaderDay = styled(Grid)`
  /* -webkit-clip-path: polygon(16% 0, 100% 0, 80% 100%, 0% 100%);
  clip-path: polygon(16% 0, 100% 0, 80% 100%, 0% 100%); */
  width: 5rem;
  border-radius: 10px;
`;

export const SummaryContainer = styled(Grid)`
  /* -webkit-clip-path: polygon(8% 0, 100% 0, 92% 100%, 0% 100%);
  clip-path: polygon(8%0, 100% 0, 92% 100%, 0% 100%); */
  margin: 1.5rem 0;

  margin-right: 3rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 5px 5px rgb(236, 236, 236);
`;

export const WorkTitle = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  background: -webkit-linear-gradient(45deg, #2196f3 30%, #21cbf3 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HealthTitle = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  background: -webkit-linear-gradient(45deg, #56ab2f 30%, #a8e063 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SocializingTitle = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  background: -webkit-linear-gradient(45deg, #f093fb 30%, #f5576c 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StudyTitle = styled(Typography)`
  background: -webkit-linear-gradient(45deg, #fe6b8b 40%, #ff8e53 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.1rem;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const HouseChoreTitle = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  background: -webkit-linear-gradient(45deg, #4568dc 30%, #b06ab3 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ShoppingTitle = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  background: -webkit-linear-gradient(45deg, #1e3c72 30%, #2a5298 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TheRestTitle = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;

  background: -webkit-linear-gradient(45deg, #84fab0 30%, #8fd3f4 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const useStyles = makeStyles(theme => ({
  categoryContainer: {
    textTransform: "uppercase"
  },
  todoByCompletionHeader: {
    margin: "30px 0",
    fontSize: "1.5rem"
  },
  summaryRightButton: {
    backgroundColor: theme.palette.secondary.main
  },
  todosContainer: {
    marginBottom: "2rem"
  },

  header: {
    padding: theme.spacing(2, 0),
    backgroundColor: theme.palette.paper
  },
  summaryTextBox: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 10,
    padding: "4px 10px"
  },
  summaryLeft: {
    backgroundColor: theme.palette.paper,
    borderRadius: "10px 0 0 10px",
    padding: theme.spacing(1),
    "& p": {
      color: "#fff"
    },
    position: "relative"
  },
  summaryRight: {
    height: "8rem",
    padding: theme.spacing(1),
    "& p:nth-child(1)": {
      fontSize: "1.1rem",
      fontWeight: "bold",
      color: "#2c2c2c"
    },
    "& p:nth-child(2)": {
      color: "#6f6f6f"
    }
  },
  rateBox: {
    color: theme.palette.primary.main,
    fontSize: "2rem",
    width: "100%"
  },
  dayOfMonth: {
    fontSize: "1.7rem",
    textAlign: "center"
  },
  dayOfWeek: {
    textAlign: "center"
  },
  days: {
    backgroundColor: theme.palette.paper,
    boxShadow: "0 0 5px 5px rgb(236, 236, 236)",
    padding: theme.spacing(1, 2),
    color: theme.palette.text.secondary
  },
  selectedDay: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0 0 5px 5px rgb(221, 221, 221)",
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
