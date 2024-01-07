import { style } from "@vanilla-extract/css";

export const input = style([
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
