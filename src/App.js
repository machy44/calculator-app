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
import { ThemeProvider } from "emotion-theming";
import { getTheme, modes } from "./theme";
import { calcButtons } from "./constants";

// const GlobalStyles = css`
//   @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");

//   body {
//     font-family: "Russo One", sans-serif;
//     background: "text"
//     color: ${({ theme }) => theme.colors.text};
//     transition: all 0.5s linear;
//   }
// `;

const App = () => {
  const [mode, setMode] = useState(modes[0]);

  const theme = getTheme(mode);

  console.log(theme);
  return (
    <React.Fragment>
      <Global
        styles={css({
          body: {
            color: "text",
            bg: "background",
          },
        })}
      />
      <ThemeProvider theme={theme}>
        <Flex
          flexDirection="column"
          p={["xs", "sm", "md"]}
          maxWidth={512}
          // css={{ backgroundColor: theme.colors.body }}
        >
          <Toggle onClick={() => setMode(modes[1])} label="Change Theme" />
          <Toggle onClick={() => console.log("audio")} label="Sound" />
          <Box p="10px 20px">
            <Text color="black">calculator</Text>
          </Box>
          <Display minHeight={["100px", "120px", "150px"]} p="10px 20px">
            display
          </Display>
          <Input placeholder="Type a math problem..." />
          <Grid
            gridTemplateColumns="repeat(5, 1fr)"
            gridRowGap={["xs", "sm", "md"]}
            gridColumnGap={["xs", "sm", "md"]}
          >
            {calcButtons.map((buttonElement) => {
              return (
                <Button basic color="black" key={buttonElement}>
                  <Text color="black">{buttonElement}</Text>
                </Button>
              );
            })}
          </Grid>
        </Flex>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
