import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

export const HeaderDay = styled(Grid)`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 10px;
`;

export const HeaderButton = styled(Grid)`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 0 5px 5px rgb(236, 236, 236);
  padding: 8px 16px;
`;

export const useStyles = makeStyles(theme => ({
  header: {
    padding: "1rem 0.5rem",
    backgroundColor: theme.palette.background.default,
    zIndex: "100"
  },
  dayOfMonth: {
    fontSize: "1.5rem",
    textAlign: "center"
  },
  dayOfWeek: {
    textAlign: "center"
  },

  days: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 0 5px 5px rgb(236, 236, 236)",
    padding: theme.spacing(1, 2),
    color: theme.palette.text.secondary
  },
  selectedDay: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0 0 5px 5px rgb(221, 221, 221)",
    color: "#fff",
    padding: theme.spacing(1, 2)
  }
}));
