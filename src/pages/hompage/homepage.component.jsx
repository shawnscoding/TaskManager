import React, { useState } from "react";
import {
  HomePageContainer,
  HomePageLogoBox,
  Logo,
  GridContainer,
  Heading,
  HeadingMain,
  HeadingSub,
  BlueButton,
  ButtonContainer
} from "./homepage.styles";
import { makeStyles, withStyles } from "@material-ui/styles";
import { CircularProgress, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    // how to use keyfframes in js
    animation: "moveRight 1s ease-out"
  }
});

const HomePage = ({ history }) => {
  const [rotate, startRotate] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  const handleButtonClick = async () => {
    console.log(rotate);
    setLoading(true);
    await startRotate(true);
    setTimeout(() => {
      history.push("/start");
    }, 1500);
  };
  return (
    <HomePageContainer maxWidth={false}>
      <HomePageLogoBox className={rotate ? classes.root : null}>
        <Logo alt="logo" src="/assets/logo.png" />
      </HomePageLogoBox>
      <GridContainer container>
        <Heading xs={12} component="h1" item>
          <HeadingMain>My Motivator</HeadingMain>
          <HeadingSub>enhance your productivity now</HeadingSub>
        </Heading>
        <ButtonContainer item xs={12}>
          <BlueButton onClick={handleButtonClick}>
            {loading ? (
              <CircularProgress color="secondary" />
            ) : (
              <Typography variant="h5">get started</Typography>
            )}
          </BlueButton>
        </ButtonContainer>
      </GridContainer>
    </HomePageContainer>
  );
};

export default HomePage;
