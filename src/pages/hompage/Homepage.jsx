import React, { useState } from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import styled from "styled-components";
import SignInForm from "../../component/signInForm/SignInForm";
import SignUpForm from "../../component/signUpForm/SignUpForm";
import FormImage from "../../assetsTwo/form-image.jpg";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

export const HomePageContainer = styled(Grid)`
  display: flex;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(
    to left bottom,
    #4880ec,
    rgba(82, 183, 220, 0.91)
  );
  position: relative;
`;

export const Form = styled(Grid)`
  width: 78%;
  height: 67%;

  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 6px 7px #4949494f;
  @media (max-width: 960px) {
    height: 91%;
  }
  @media (max-width: 600px) {
    height: 91%;
  }
`;
export const FormLeft = styled(Grid)`
  background-image: linear-gradient(60deg, #31cbdf5e, #0ba4bc99),
    url(${FormImage});
  background-size: cover;
  overflow: hidden;
  padding: 2rem;
  @media (max-width: 960px) {
    padding: 1rem;
  }
`;

const Logo = styled(InsertInvitationIcon)`
  font-size: 3rem;
  color: #fff;
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

const LogoBox = styled(Grid)`
  padding: 12px 0 0 5px;
`;

const HomepageButton = styled(Button)`
  color: #fff;
  margin: 30px 0 0 0;
  @media (max-width: 600px) {
    margin: 7px 0 0 0;
  }
`;

const HomePage = ({ history, signInWithEmail }) => {
  const [open, setOpen] = useState(false);

  return (
    <HomePageContainer justify="center" container>
      <Form container item>
        <FormLeft
          direction="column"
          justify="center"
          alignItems="flex-start"
          container
          sm={12}
          md={7}
          item
        >
          <Grid container item>
            <Grid item>
              <Typography variant="h1" component="h1" style={{ color: "#fff" }}>
                Task Manager
              </Typography>
            </Grid>
            <LogoBox item>
              <Logo />
            </LogoBox>
          </Grid>
          <Grid item>
            <Typography style={{ color: "#fff" }}>
              We're aiming to make your task management so much easier
            </Typography>
            <Typography style={{ color: "#fff" }}>
              To learn how it works, Please Click the button below
            </Typography>
          </Grid>
          <Grid item>
            <HomepageButton>
              Learn
              <ArrowDownwardIcon />
            </HomepageButton>
          </Grid>
        </FormLeft>
        {open ? (
          <SignUpForm setOpen={setOpen} />
        ) : (
          <SignInForm setOpen={setOpen} />
        )}
      </Form>
    </HomePageContainer>
  );
};

export default HomePage;
