import { style } from "@vanilla-extract/css";

export const button = style([
  {
    background: "red",
    color: "white",
  },
  {
    selectors: {
      "&:hover": {
        background: "blue",
      },
    },
  },
]);
