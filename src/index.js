import React from "react";
import ReactDOM from "react-dom";
import { Global, css, injectGlobal } from "@emotion/core";
import { ThemeProvider } from "emotion-theming";
import App from "./App";
import { theme } from "./theme";

import * as serviceWorker from "./serviceWorker";

const GlobalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Russo+One&display=swap");

  body {
    font-family: "Russo One", sans-serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
