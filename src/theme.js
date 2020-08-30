import merge from "lodash.merge";
import get from "lodash.get";
import { css } from "@emotion/core";

export const GlobalStyles = css`
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

export const modes = [
  "light",
  "dark",
];

export const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });

export const baseTheme = {
  breakpoints: ["40em", "52em", "64em"],
  fontSizes: [12, 14, 16, 20, 24, 32],
  colors: {
    text: "#000",
    body: "red",
    primary: "#00f",
    secondary: "#00a",
    gray: "#eee",
    lightgray: "#fafafa",
    modes: {
      dark: {
        text: "#fff",
        body: "#000",
        primary: "#0cf",
        secondary: "#f0e",
        gray: "#222",
        lightgray: "#111",
      },
    },
  },
  space: {
    xs: 4,
    sm: 8,
    md: 16,
  },
};
