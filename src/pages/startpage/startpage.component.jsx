import React, { useRef, useEffect } from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(20)
  }
}));

const StartPage = () => {
  const classes = useStyles();
  const inputEl = useRef(null);
  const BoxEl = useRef(null);
  // const onButtonClick = () => {
  //   // `current` points to the mounted text input element
  //   console.log(inputEl.current);
  //   console.log(inputEl);
  //   inputEl.current.focus();
  // };
  useEffect(() => {
    console.log(inputEl.current.offsetWidth);
    console.log(BoxEl.current.offsetWidth);
  });

  console.log(inputEl);
  return (
    <div>
      <Typography variant="h1">hhh</Typography>
      <Box ref={BoxEl} width="100%">
        <input ref={inputEl} type="text" />
        {/* <button onClick={onButtonClick}>Focus the input</button> */}
        <Box width={1 / 4} p={1} my={0.5}>
          Width 1/4
        </Box>
        <Box
          fontWeight="fontWeightBold"
          width={300}
          className={classes.root}
          bgcolor="grey.300"
          my={0.5}
        >
          Width 300
        </Box>
        <Box width="75%" bgcolor="grey.300" p={1} my={0.5}>
          Width 75%
        </Box>
        <Box width={1} bgcolor="grey.300" p={1} my={0.5}>
          Width 1
        </Box>
      </Box>
    </div>
  );
};

export default StartPage;
