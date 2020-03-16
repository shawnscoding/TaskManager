import React, { useState } from "react";

import { makeStyles } from "@material-ui/styles";
import {
  CircularProgress,
  TextField,
  Button,
  Typography,
  Grid
} from "@material-ui/core";
import { connect } from "react-redux";
import styled from "styled-components";
import { signUpStart } from "../../redux/auth/auth.actions";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import ProgressButton from "../progress/ProgressButton";

export const Logo = styled(InsertInvitationIcon)`
  font-size: 3rem;
  color: rgba(62, 183, 121, 0.84);
`;

export const SmallText = styled(Typography)`
  font-size: 0.7rem;
`;

export const Form = styled(Grid)`
  padding: 2rem;
  position: relative;
`;

export const CloseIcBox = styled(Grid)`
  position: absolute;
  cursor: pointer;
  bottom: 4px;
  left: 5px;
`;

const SignUpForm = ({ signUp, setOpen }) => {
  const [form, setForm] = React.useState({
    displayName: "",
    email: "",
    password: "",
    checkPassword: ""
  });
  const handleChange = name => ({ target: { value } }) =>
    setForm({
      ...form,
      [name]: value
    });

  const onSubmit = () => {
    if (form.password !== form.checkPassword) {
      alert("passwords are not equal");
    } else {
      signUp(form);
    }
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
      <CloseIcBox onClick={() => setOpen(false)} item>
        <KeyboardBackspaceIcon />
      </CloseIcBox>
      <Grid item>
        <Logo />
        <Typography style={{ color: "#000" }}>Sign Up</Typography>
      </Grid>

      <Grid item>
        <form>
          <TextField
            type="text"
            value={form.displayName}
            label="Display name"
            margin="normal"
            onChange={handleChange("displayName")}
            fullWidth
          />
          <br />
          <TextField
            type="email"
            value={form.email}
            label="Email"
            margin="normal"
            onChange={handleChange("email")}
            fullWidth
          />
          <br />

          <TextField
            type="password"
            value={form.password}
            label="Password"
            margin="normal"
            onChange={handleChange("password")}
            fullWidth
          />
          <br />

          <TextField
            type="password"
            value={form.checkPassword}
            label="Check password"
            margin="normal"
            onChange={handleChange("checkPassword")}
            fullWidth
          />
        </form>
      </Grid>

      <Grid item>
        <ProgressButton onSubmit={onSubmit} />
      </Grid>
    </Form>
  );
};

const mapDispatchToProps = dispatch => ({
  signUp: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUpForm);
