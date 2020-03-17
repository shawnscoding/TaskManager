import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import {
  CircularProgress,
  TextField,
  Button,
  Typography,
  Grid
} from "@material-ui/core";

import { emailSignInStart } from "./../../redux/auth/auth.actions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
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
      sm={5}
      item
    >
      <Grid item>
        <Logo />
      </Grid>
      <Grid item>
        <Typography style={{ color: "#000" }}>
          Sign in Now And Let us manage your Task
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
