import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Grid, Typography } from "@material-ui/core";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import { drawerWidth } from "./../navbar/navbar.styles";

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

export const SummaryContainer = styled(Grid)`
  margin: 1.5rem 0;

  margin-right: 3rem;
  border-radius: 10px;
  background-color: #fff;
  border: 4px solid #f5f5f5;
  box-shadow: 0 0 10px 10px #f5f5f5;
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
  percentage: {
    position: "absolute",
    fontSize: "3rem",

    top: "2rem",
    left: "3.5rem",

    letterSpacing: "-1px"
  },
  red: {
    backgroundColor: "red"
  },
  blue: {
    backgroundColor: "blue"
  },
  root: {
    backgroundColor: theme.palette.background.paper
  },
  tdAppBar: {
    top: "9.4rem",
    left: `${drawerWidth + 10}px`,
    width: `calc(100% - ${drawerWidth + 20}px)`,
    backgroundColor: "#fff",
    border: "4px solid #f5f5f5",
    boxShadow: "0 0 6px 6px #f5f5f5",
    position: "fixed",
    borderRadius: "10px"
  },
  caAppBar: {
    borderRadius: "10px",
    marginBottom: "1.2rem",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px 10px #f5f5f5"
  },
  twAppBar: {
    borderRadius: "10px",
    border: "4px solid #f5f5f5",
    boxShadow: "0 0 10px 10px #f5f5f5",
    backgroundColor: theme.palette.background.paper
  },
  twAppBarContainer: {
    zIndex: 100,
    position: "fixed",
    top: "3.3rem",
    left: `${drawerWidth}px`,
    width: `calc(100% - ${drawerWidth}px)`,
    backgroundColor: theme.palette.background.paper,
    padding: "2rem 3rem 0.5rem 3rem"
  },
  todoAllContainer: {
    height: "3.1rem"
  },
  twNoTodoContainer: {
    padding: "13rem 0 0 0"
  },
  transparentCircleBox: {
    left: "16.75rem",
    top: "5.3rem",
    position: "fixed"
  },

  headerTextFirst: {
    color: theme.palette.secondary.light
  },

  headerText: {
    color: theme.palette.primary.light
  },

  tdPanelContainer: {
    padding: "9.5rem 1.5rem 0 1.5rem"
  },
  twPanelContainer: {
    padding: "13rem  1.5rem 0 1.5rem "
  },
  caPanelContainer: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    minHeight: "62vh"
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
