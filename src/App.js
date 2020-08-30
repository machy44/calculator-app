/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { jsx } from "@emotion/core";
import { Box, Flex, Display, Input } from "./components";
import { Global } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import { getTheme, modes, GlobalStyles } from "./theme";
import CalcButtons, { operations } from "./Buttons";
import useFetch from "./hooks/useFetch";

// const CalculatorHeader = styled(Flex)({
//   justifyContent: "flex-start",
//   "& > div": {
//     marginLeft: 15,
//   },
// });

const App = () => {
  // const [mode, setMode] = useState(modes[0]); // TODO: changing themes
  const [expression, setExpression] = useState();
  const [responseHistory, setResponseHistory] = useState([]);
  const {
    response,
    setResponse,
    error,
    setError,
    isLoading,
    handleSubmit,
  } = useFetch();

  const inputRef = React.useRef(null);
  const previousExpression = React.useRef(null);

  const theme = getTheme(modes[0]);

  const handleInput = (e, data) => {
    setError("");
    if (response) {
      setResponse();
    }
    setExpression(data.value);
  };

  const handleEqual = () => {
    previousExpression.current = expression;
    handleSubmit(expression);
    handleResetKey();
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      handleEqual();
    }
  };

  const handleKey = (value) => {
    setError("");
    if (response && operations.includes(value)) {
      setResponse(null);
      setExpression(`${response}${value}`);
      return;
    }
    if (response && !operations.includes(value)) setResponse(null);
    setExpression((expression) =>
      expression ? `${expression}${value}` : value
    );
  };

  useEffect(() => {
    if (response) {
      setResponseHistory((responses) => [
        ...responses.slice(-4),
        `${previousExpression.current} = ${response}`,
      ]);
    }
  }, [response]);

  const handleCursor = (event, moveOperation) => {
    inputRef.current.focus();

    //https://github.com/Semantic-Org/Semantic-UI-React/blob/master/src/elements/Input/Input.js#L56
    // It seems SemanticUI input wraps html input and the only way I could access to
    // html input is ref inside semanticUI input ref object
    let start = inputRef.current.inputRef.current.selectionStart;

    if (moveOperation === "plus") {
      inputRef.current.inputRef.current.selectionStart = inputRef.current.inputRef.current.selectionEnd =
        start + 1;
    } else {
      inputRef.current.inputRef.current.selectionStart = inputRef.current.inputRef.current.selectionEnd =
        start - 1;
    }
  };

  const handleResetKey = () => {
    setExpression("");
    setResponse(null);
  };

  const handleDelKey = () => {
    if (response) setResponse();
    let start = inputRef.current.inputRef.current.selectionStart;

    let splittedExpression = expression.split("");
    // remove element depend on position where cursor is set
    splittedExpression.splice(start - 1, 1);

    setExpression((expression) =>
      expression ? splittedExpression.join("") : ""
    );
  };

  return (
    <React.Fragment>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme}>
        <Flex height="100%" alignItems="center">
          <Flex
            flexDirection="column"
            maxWidth={512}
            mx="auto"
            css={{
              border: "1px solid rgba(0,0,0,0.14)",
              borderRadius: 4,
              boxShadow: "12px 17px 16px -13px rgba(0,0,0,0.47)",
            }}
            // css={{ backgroundColor: theme.colors.body }}
          >
            {/* <CalculatorHeader mt="10px">
              <Toggle onClick={() => setMode(modes[1])} label="Change Theme" />
              <Toggle onClick={() => console.log("audio")} label="Sound" />
            </CalculatorHeader> */}
            <Display
              mt={["5px", "20px"]}
              alignItems="flex-end"
              flexDirection="column"
              justifyContent="flex-end"
              height={["120px", "100px"]}
              px="10px"
              backgroundColor="#F0F0F0"
              borderTop="1px solid rgba(34,36,38,.15)"
            >
              {responseHistory &&
                responseHistory.map((response, index) => {
                  return <Box key={index}>{response}</Box>;
                })}
            </Display>
            <Input
              loading={isLoading}
              disabled={isLoading}
              ref={inputRef}
              size="large"
              placeholder={
                error ? error : isLoading ? "" : "Type a math problem..."
              }
              value={response ? response : expression}
              onChange={handleInput}
              onKeyPress={handleEnterPress}
              error={!!error}
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
