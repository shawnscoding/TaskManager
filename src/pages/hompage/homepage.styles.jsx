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
