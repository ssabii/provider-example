import React, { ButtonHTMLAttributes, MouseEvent } from "react";
import { useCallback } from "react";
import styled from "styled-components";
import { getVariantStyle } from "./style";

export type Variant = "default" | "primary" | "prime" | "text";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  disabled?: boolean;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  type = "button",
  variant = "default",
  disabled = false,
  onClick,
  children,
  ...rest
}: ButtonProps) => {
  const handleClick = useCallback(
    (e?: MouseEvent<HTMLButtonElement>) => {
      if (!disabled && onClick) {
        onClick(e);
      }
    },
    [onClick, disabled]
  );

  return (
    <Element
      type={type}
      variant={variant}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </Element>
  );
};

export default Button;

const Element = styled.button<ButtonProps>`
  padding: 9px 16px;
  height: 40px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  ${({ variant }) => getVariantStyle(variant)};

  &:disabled {
    color: #9a9ba7;
    background-color: #c8cad2;
    cursor: not-allowed;
  }
`;
