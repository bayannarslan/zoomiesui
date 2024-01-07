import { style } from "@vanilla-extract/css";

export const label = style([
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
