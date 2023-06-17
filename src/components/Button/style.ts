import { css } from "styled-components";
import { Variant } from "./Button";

export const getVariantStyle = (variant?: Variant) => {
  switch (variant) {
    case "primary":
      return css`
        color: #333333;
        background-color: #ffd400;
      `;
    case "prime":
      return css`
        color: #ffffff;
        background-color: #fb842d;
      `;
    case "text":
      return css`
        color: #333333;
        background-color: transparent;
      `;
    default:
      return css`
        color: #333333;
        background-color: #f2f3f7;
      `;
  }
};
