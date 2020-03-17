import { makeStyles } from "@material-ui/core/styles";
import styled, { css } from "styled-components";
import { Grid, Typography } from "@material-ui/core";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded";
import { drawerWidth } from "./../navbar/navbar.styles";

export const DayContainer = styled.div`
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  :active {
    transform: translateY(-1px);
    box-shadow: 0 4px 4px rgba(165, 165, 165, 0.5);
  }
  cursor: pointer;
`;

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
  border: 2px solid rgba(89, 205, 208, 0.58);

  ${props =>
    props.completed &&
    css`
      background: linear-gradient(60deg, #55e1c8c2, #38cecfd9);
      border: 2px solid #fff;
    `}
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

  todosContainer: {
    marginBottom: "2rem"
  },

  red: {
    backgroundColor: "red"
  },
  blue: {
    backgroundColor: "blue"
  },
  root: {
    backgroundColor: "#fafafa"
  },
  tdAppBar: {
    top: "9.4rem",
    left: `${drawerWidth() + 10}px`,
    width: `calc(100% - ${drawerWidth() + 20}px)`,
    backgroundColor: "#fff",
    border: "4px solid #f5f5f5",
    boxShadow: "0 0 3px 3px #f5f5f5",
    position: "fixed",
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      left: 0,
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      left: `${drawerWidth() + 10}px`,
      width: `calc(100% - ${drawerWidth() + 20}px)`
    }
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
    boxShadow: "0 0 2px 2px #f5f5f5",
    backgroundColor: theme.palette.background.paper
  },
  twAppBarContainer: {
    zIndex: 100,
    position: "fixed",
    top: "3.3rem",
    left: `${drawerWidth()}px`,
    width: `calc(100% - ${drawerWidth()}px)`,
    backgroundColor: theme.palette.background.default,
    padding: "2rem 3rem 0.5rem 3rem",
    [theme.breakpoints.down("lg")]: {
      padding: "1rem 1rem 0.5rem 1rem"
    },
    [theme.breakpoints.down("sm")]: {
      left: 0,
      width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
      left: `${drawerWidth() + 10}px`,
      width: `calc(100% - ${drawerWidth() + 20}px)`
    }
  },
  allTimeText: {
    fontSize: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem"
    }
  },
  todoAllContainer: {
    height: "3.1rem"
  },
  twNoTodoContainer: {
    padding: "13rem 0 0 0",

    [theme.breakpoints.down("sm")]: {
      padding: "15.5rem  0 0 0 "
    }
  },
  tdNonTodoContainer: {
    padding: "13rem 0 0 0",

    [theme.breakpoints.down("sm")]: {
      padding: "22rem  0 0 0 "
    }
  },

  caNonTodoContainer: {
    padding: "2rem 0"
  },
  transparentCircleBox: {
    left: "16.75rem",
    top: "5.3rem",
    position: "fixed"
  },

  headerTextFirst: {
    color: theme.palette.secondary.light
  },
  box: {
    padding: "0 1rem",
    [theme.breakpoints.down("md")]: {
      padding: 0
    },
    [theme.breakpoints.up("md")]: {
      padding: "0 1rem"
    }
  },
  caBox: {
    [theme.breakpoints.down("lg")]: {
      padding: 0
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0 1rem"
    }
  },
  headerText: {
    color: theme.palette.primary.light
  },
  tdPanelContainer: {
    boxSizing: "border-box",

    [theme.breakpoints.down("lg")]: {
      margin: "13rem  0 0 0"
    },
    [theme.breakpoints.up("lg")]: {
      margin: "13rem  1.5rem 0 1.5rem "
    },
    [theme.breakpoints.down("sm")]: {
      margin: "21.5rem  1.5rem 0 1.5rem "
    }
  },
  twPanelContainer: {
    [theme.breakpoints.down("lg")]: {
      padding: "13rem  0 0 0"
    },
    [theme.breakpoints.up("lg")]: {
      padding: "13rem  1.5rem 0 1.5rem "
    },
    [theme.breakpoints.down("sm")]: {
      padding: "14.5rem  1.5rem 0 1.5rem "
    }
  },
  progress: {
    [theme.breakpoints.down("md")]: {
      margin: "0 0 13px 0 "
    },
    [theme.breakpoints.up("md")]: {
      margin: 0
    }
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
      minWidth: "1.5rem",

      [theme.breakpoints.down("md")]: {
        minWidth: "unset"
      },
      [theme.breakpoints.up("md")]: {
        minWidth: "1.5rem"
      }
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
