import { Container, Box, Avatar, Grid, Button } from "@material-ui/core";
import styled, { css } from "styled-components";

export const moveTexts = css`
  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-4rem);
    }
    80% {
      transform: translateX(0.5rem);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(4rem);
    }
    80% {
      transform: translateX(-0.5rem);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
  @keyframes moveRight {
    0% {
      transform: scale(1);
    }
    80% {
      transform: scale(3);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes day-prev {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(18px);
    }
  }

  @keyframes day-next {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-18px);
    }
  }

  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export const HomePageContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 95vh;
  background-image: linear-gradient(to right bottom, #4880ec, #019cad);
  clip-path: polygon(0 0, 100% 0, 100% 80vh, 0 100%);
  position: relative;
`;

export const HomePageLogoBox = styled(Box)`
  position: absolute;
  top: 20vh;
  left: 46.5vw;
`;

export const Logo = styled(Avatar)`
  height: 60px;
  width: 60px;
`;

export const GridContainer = styled(Grid)`
  text-align: center;
`;

export const Heading = styled(Grid)`
  color: #fff;
  text-transform: uppercase;
`;

export const HeadingMain = styled.span`
  display: block;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: 5px;
  ${moveTexts}
  animation: moveInLeft 1s ease-out;
`;

export const HeadingSub = styled.span`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 3px;
  ${moveTexts}
  animation: moveInRight 1s ease-out;
`;

export const BlueButton = styled(Button)`
  background: linear-gradient(45deg, #2196f3 30%, #21cbf3 90%);
  border: 0;
  border-radius: 3;
  box-shadow: 0 3px 5px 2px rgba(33, 203, 243, 0.3);
  height: 9vh;
  width: 18vw;
  font-size: 1.5rem;
  padding: 0 30px;
  transition: all 0.2s;
  position: relative;
  ${moveTexts}
  animation: moveInBottom .5s ease-out 1s;
  animation-fill-mode: backwards;

  :hover {
    transform: translateY(-3px);

    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  :active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  h5 {
    color: white;
  }
`;

export const ButtonContainer = styled(Grid)`
  padding-top: 1rem;
`;
