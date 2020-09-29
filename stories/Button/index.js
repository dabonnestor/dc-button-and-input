import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.4rem;
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

export const ThumbsUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
    </svg>
  );
};

export const ShoppingCart = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
    </svg>
  );
};

export const Favorite = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="16"
      width="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};

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
