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

const TodoPage = ({ history }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        direction="row"
        justify="space-evenly"
        alignItems="center"
        container
        className={classes.container}
      >
        <Grid item>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" color="textSecondary" gutterBottom>
                Create new To Do!
              </Typography>
              <Typography variant="body2" component="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                obcaecati architecto sapiente doloribus maxime tenetur numquam
                nostrum animi illo magnam ex, cum ab reprehenderit, provident
                excepturi optio vel distinctio temporibus!
              </Typography>
              <br />

              <Typography variant="body2" component="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                obcaecati architecto sapiente doloribus maxime tenetur numquam
                nostrum animi illo magnam ex, cum ab reprehenderit, provident
                excepturi optio vel distinctio temporibus!
              </Typography>
              <br />
            </CardContent>
            <Box width="100%">
              <Box display="flex" justifyContent="flex-end">
                <Button
                  onClick={() => history.push("/todos/createTodos")}
                  size="large"
                  variant="contained"
                  color="primary"
                >
                  add new todo
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" color="textSecondary" gutterBottom>
                Check my to do list
              </Typography>
              <Typography variant="body2" component="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                obcaecati architecto sapiente doloribus maxime tenetur numquam
                nostrum animi illo magnam ex, cum ab reprehenderit, provident
                excepturi optio vel distinctio temporibus!
              </Typography>
              <br />
              <Typography variant="body2" component="p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                obcaecati architecto sapiente doloribus maxime tenetur numquam
                nostrum animi illo magnam ex, cum ab reprehenderit, provident
                excepturi optio vel distinctio temporibus!
              </Typography>
              <br />
            </CardContent>
            <Box width="100%">
              <Box display="flex" justifyContent="flex-end">
                <Button
                  onClick={() => history.push("/todos/calendar")}
                  size="large"
                  variant="contained"
                  color="primary"
                >
                  view my todos
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default TodoPage;
