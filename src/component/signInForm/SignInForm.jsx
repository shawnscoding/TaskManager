import React from "react";

import { TextField, Button, Typography, Grid } from "@material-ui/core";

import { emailSignInStart } from "./../../redux/auth/auth.actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import ProgressButton from "../progress/ProgressButton";

export const SmallText = styled(Typography)`
  font-size: 0.7rem;
`;

export const Logo = styled(InsertInvitationIcon)`
  font-size: 3rem;
  color: rgba(62, 183, 121, 0.84);
`;

export const Form = styled(Grid)`
  padding: 2rem;
  @media (max-width: 1030px) {
    padding: 2rem 1rem;
  }
  @media (max-width: 600px) {
    padding: 1rem 1rem;
  }
`;

const SignInForm = ({ setOpen, signInWithEmail }) => {
  const [form, setForm] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = name => ({ target: { value } }) =>
    setForm({
      ...form,
      [name]: value
    });

  const onSubmit = () => {
    signInWithEmail(form);
  };

  return (
    <Form
      direction="column"
      justify="space-between"
      alignItems="center"
      container
      md={5}
      sm={12}
      item
    >
      <Grid item>
        <svg
          className="MuiSvgIcon-root sc-fzXfNd lhDkqP"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          role="presentation"
          style={{ fontSize: "3rem", color: "rgba(62, 183, 121, 0.84)" }}
        >
          <title id="title" lang="en">
            TASK MANAGER LOGO
          </title>
          <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
        </svg>
      </Grid>
      <Grid item>
        <Typography variant="h5" component="h1">
          Sign in Now! Let us manage your Task
        </Typography>
      </Grid>

      <form>
        <TextField
          type="email"
          label="Email"
          margin="normal"
          onChange={handleChange("email")}
          value={form.email}
          fullWidth
        />
        <br />
        <TextField
          type="password"
          label="Password"
          value={form.password}
          margin="normal"
          fullWidth
          onChange={handleChange("password")}
        />
      </form>

      <Grid item>
        <ProgressButton onSubmit={onSubmit} onSignIn={true} />
      </Grid>
      <Grid container justify="space-around" direction="row" item>
        <SmallText> don't have account yet ?</SmallText>
        <Button onClick={() => setOpen(true)} size="small">
          Sign Up
        </Button>
      </Grid>
    </Form>
  );
};

const mapDispatchToProps = dispatch => ({
  signInWithEmail: form => dispatch(emailSignInStart(form))
});

export default withRouter(connect(null, mapDispatchToProps)(SignInForm));
