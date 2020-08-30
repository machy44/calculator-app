/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/core";
import {
  Box,
  Flex,
  Button,
  Text,
  Toggle,
  Display,
  Grid,
  Input,
} from "./components";
import { useTheme } from "emotion-theming";
import { Global, css, injectGlobal } from "@emotion/core";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { getTheme, modes } from "./theme";
import CalcButtons from "./Buttons";
import useFetch from "./hooks/useFetch";

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");

  body {
    background: "text"
    color: ${({ theme }) => theme.colors.text};
    transition: all 0.5s linear;
  }

  body > div {
    height: 100%;
  }

  body, span, input {
    font-family: "Russo One", sans-serif;
  }
`;

const CalculatorHeader = styled(Flex)({
  justifyContent: "flex-start",
  "& > div": {
    marginLeft: 15,
  },
});

const App = () => {
  const [mode, setMode] = useState(modes[0]);
  const [expression, setExpression] = useState();
  const { response, error, isLoading, handleSubmit } = useFetch();
  const [cursor, setCursor] = useState();
  const inputRef = React.useRef(null);

  const theme = getTheme(mode);

  const handleInput = (e, data) => {
    setExpression(data.value);
  };

  const handleEqual = () => {
    handleSubmit(expression);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      handleEqual();
    }
  };

  const handleKey = (value) => {
    setExpression((expression) =>
      expression ? `${expression}${value}` : value
    );
  };

  const handleCursor = (event, moveOperation) => {
    inputRef.current.focus();

    let start = inputRef.current.selectionStart;

    if (moveOperation === "plus") {
      inputRef.current.selectionStart = inputRef.current.selectionEnd =
        start + 1;
    } else {
      inputRef.current.selectionStart = inputRef.current.selectionEnd =
        start - 1;
    }
  };

  const handleResetKey = () => {
    setExpression("");
  };

  const handleDelKey = () => {
    setExpression((expression) => (expression ? expression.slice(0, -1) : ""));
  };

  console.log("response", response);
  console.log("error", error);
  return (
    <React.Fragment>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme}>
        <Flex height="100%" alignItems="center">
          <Flex
            flexDirection="column"
            maxWidth={512}
            mx="auto"
            style={{
              border: "1px solid rgba(0,0,0,0.14)",
              borderRadius: 4,
              boxShadow: "12px 17px 16px -13px rgba(0,0,0,0.47)",
            }}
            // css={{ backgroundColor: theme.colors.body }}
          >
            {/* <CalculatorHeader>
              <Toggle onClick={() => setMode(modes[1])} label="Change Theme" />
              <Toggle onClick={() => console.log("audio")} label="Sound" />
            </CalculatorHeader> */}
            <Flex justifyContent="center" p="10px 20px"></Flex>
            <Display
              alignItems="flex-end"
              justifyContent="center"
              minHeight={["50px", "60px", "75px"]}
              p="10px 20px"
              backgroundColor="#F0F0F0"
              borderTop="1px solid rgba(34,36,38,.15)"
            >
              {response}
            </Display>
            <input
              // innerRef={inputRef}
              ref={inputRef}
              size="large"
              placeholder="Type a math problem..."
              // defaultValue={0}
              value={expression}
              onChange={handleInput}
              onKeyPress={handleEnterPress}
            />
            <Box
              backgroundColor="#F8F8F8"
              p={["xs", "sm", "md"]}
              borderRadius="4px"
            >
              <CalcButtons
                handleEqual={handleEqual}
                handleResetKey={handleResetKey}
                handleKey={handleKey}
                handleDelKey={handleDelKey}
                handleCursor={handleCursor}
              />
            </Box>
          </Flex>
        </Flex>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
