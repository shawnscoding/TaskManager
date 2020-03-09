import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";
import HistoryContainer from "./../../component/history/History";
import HistoryHeader from "./../../component/history/HistoryHeader";
import { connect } from "react-redux";
import { selectFormerTodo } from "../../redux/todo/todo.selectors";
import { createStructuredSelector } from "reselect";
import SmallLoader from "./../../component/loader/SmallLoader";
import { withRouter } from "react-router-dom";
import { format } from "date-fns";
import { fecthFormarTodoStart } from "./../../redux/todo/todo.actions";

const GridContainer = styled(Grid)`
  height: 100%;
`;

const HistoryPage = ({
  history,
  todos,
  year,
  setYear,
  user,
  fetchFormerTodo
}) => {
  const [fetchedFormerTodo, setFetchedFormerTodo] = useState(false);

  useEffect(() => {
    if (user && !fetchedFormerTodo) {
      if (history.location.pathname === `/history/${user.id}`) {
        const formattedYear = format(year, "yyyy");
        fetchFormerTodo(formattedYear);
        setFetchedFormerTodo(true);
      }
    }
  }, [user]);

  if (todos.length === 0) return <SmallLoader />;

  return (
    <GridContainer justify="space-around" direction="column" container>
      <HistoryHeader year={year} setYear={setYear} todos={todos} />
      <HistoryContainer year={year} todos={todos} first={true} />
      <HistoryContainer year={year} todos={todos} first={false} />
    </GridContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  todos: selectFormerTodo
});

const mapDispatchToProps = dispatch => ({
  fetchFormerTodo: year => dispatch(fecthFormarTodoStart(year))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HistoryPage)
);
