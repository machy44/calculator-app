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
  Container,
} from "./components";
import { useTheme } from "emotion-theming";
import { Global, css, injectGlobal } from "@emotion/core";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { getTheme, modes } from "./theme";
import { calcButtons } from "./constants";

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

  const theme = getTheme(mode);

  console.log(theme);
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
            <Flex justifyContent="center" my="10px">
              <Text color="black">CALCULATOR</Text>
            </Flex>
            <CalculatorHeader>
              <Toggle onClick={() => setMode(modes[1])} label="Change Theme" />
              <Toggle onClick={() => console.log("audio")} label="Sound" />
            </CalculatorHeader>
            <Flex justifyContent="center" p="10px 20px"></Flex>
            <Display
              alignItems="flex-end"
              justifyContent="center"
              minHeight={["100px", "120px", "150px"]}
              p="10px 20px"
              backgroundColor="#F0F0F0"
              borderTop="1px solid rgba(34,36,38,.15)"
            >
              display
            </Display>
            <Input size="large" placeholder="Type a math problem..." />
            <Box
              backgroundColor="#F8F8F8"
              p={["xs", "sm", "md"]}
              borderRadius="4px"
            >
              <Grid
                mt="10px"
                gridTemplateColumns="repeat(5, 1fr)"
                gridRowGap={["4px", "6px", "8"]}
                gridColumnGap={["4px", "6px", "8"]}
              >
                {calcButtons.map((buttonElement) => {
                  return (
                    <Button basic color="black" key={buttonElement}>
                      <Text color="black">{buttonElement}</Text>
                    </Button>
                  );
                })}
              </Grid>
            </Box>
          </Flex>
        </Flex>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
