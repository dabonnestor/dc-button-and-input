import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ThumbsUp, Favorite, ShoppingCart } from "../Icon";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.4rem;
  font-weight: 500;
  text-align: center;
  background-color: ${(props) =>
    props.variant === "outline"
      ? "transparent"
      : props.variant === "text"
      ? "transparent"
      : props.color === "primary"
      ? "#3d5afe"
      : props.color === "secondary"
      ? "#455a64"
      : props.color === "danger"
      ? "#d32f2f"
      : "#e0e0e0"};
  color: ${(props) =>
    props.variant === "outline"
      ? "#3d5afe"
      : props.variant === "text"
      ? "#3d5afe"
      : props.color === "primary"
      ? "#fff"
      : props.color === "secondary"
      ? "#fff"
      : props.color === "danger"
      ? "#fff"
      : "#3f3f3f"};
  border: 1px solid
    ${(props) =>
      props.variant === "outline"
        ? "#3d5afe"
        : props.variant === "text"
        ? "transparent"
        : props.color === "primary"
        ? "#3d5afe"
        : props.color === "secondary"
        ? "#455a64"
        : props.color === "danger"
        ? "#d32f2f"
        : "#e0e0e0"};
  border-radius: 0.6rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  appearance: none;
  user-select: none;
  cursor: pointer;
  max-width: 100%;
  box-shadow: ${(props) =>
    props.disabledShadow ? "none" : "0px 2px 3px rgba(51, 51, 51, 0.2)"};
  padding: ${(props) =>
    props.size === "sm"
      ? "0.8rem 1.2rem"
      : props.size === "lg"
      ? "1.6rem 2.0rem"
      : "1.2rem 1.6rem"};
  margin: 0;

  &:not(:disabled) {
    &:hover,
    &:focus {
      background-color: ${(props) =>
        props.variant === "outline"
          ? "rgba(41, 98, 255, 0.1)"
          : props.variant === "text"
          ? "rgba(41, 98, 255, 0.1)"
          : props.color === "primary"
          ? "#0039cb"
          : props.color === "secondary"
          ? "#1c313a"
          : props.color === "danger"
          ? "#9a0007"
          : "#aeaeae"};
      border: 1px solid
        ${(props) =>
          props.variant === "outline"
            ? "#3d5afe"
            : props.variant === "text"
            ? "transparent"
            : props.color === "primary"
            ? "#0039cb"
            : props.color === "secondary"
            ? "#1c313a"
            : props.color === "danger"
            ? "#9a0007"
            : "#aeaeae"};
    }
  }

  &:disabled {
    background-color: ${(props) =>
      props.variant === "text" ? "transparent" : "#e0e0e0"};
    color: #9e9e9e;
    cursor: not-allowed;
  }
`;

export const Button = ({
  variant,
  disabledShadow,
  disabled,
  startIcon,
  endIcon,
  size,
  color,
  label,
}) => {
  return (
    <StyledButton
      variant={variant}
      disabledShadow={disabledShadow}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      color={color}
    >
      {startIcon === "favorite" && <Favorite />}
      {startIcon === "cart" && <ShoppingCart />}
      {startIcon === "like" && <ThumbsUp />}
      {label}
      {endIcon === "favorite" && <Favorite />}
      {endIcon === "cart" && <ShoppingCart />}
      {endIcon === "like" && <ThumbsUp />}
    </StyledButton>
  );
};

Button.defaultProps = {
  disabledShadow: false,
  disabled: false,
  size: "md",
  color: "default",
};

Button.propTypes = {
  variant: PropTypes.oneOf(["outline", "text"]),
  disabledShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  startIcon: PropTypes.oneOf(["cart", "favorite", "like"]),
  endIcon: PropTypes.oneOf(["cart", "favorite", "like"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  color: PropTypes.oneOf(["default", "primary", "secondary", "danger"]),
  label: PropTypes.string.isRequired,
};
