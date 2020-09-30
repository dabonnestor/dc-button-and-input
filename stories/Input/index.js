import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { ThumbsUp, Favorite, ShoppingCart } from "../Icon";

const Container = styled.div`
  display: flex;
`;

const InputLabel = styled.label`
  display: flex;
  flex: ${(props) => props.fullWidth && "1"};
  flex-direction: column;
  cursor: ${(props) => props.disabled && "not-allowed"};
  font-size: 1.2rem;
  color: ${(props) => (props.error ? "#d32f2f" : "#333")};

  ${(props) =>
    !props.disabled &&
    `&:hover {
    color: #333;
    
    ${InputWrapper} {
      border: 1px solid #333;
    }
  }

  &:focus-within {
    color: ${props.error ? "#d32f2f" : "#2962ff"};

    ${InputWrapper} {
      border: 1px solid ${props.error ? "#d32f2f" : "#2962ff"};
    }
  }`}
`;

const InputWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 0.8rem;
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : "#fff")};
  border: 1px solid
    ${(props) =>
      props.disabled ? "#e0e0e0" : props.error ? "#d32f2f" : "#828282"};
  border-radius: 0.8rem;
  padding: ${(props) => (props.size === "sm" ? "1.0rem" : "1.6rem")};
  margin-top: 0.6rem;
`;

const StyledInput = styled.input`
  display: flex;
  flex: ${(props) => props.fullWidth && "1"};
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
  background-color: transparent;
  border: 0;
  border-radius: 0.8rem;
  outline: 0;
  appearance: none;
  text-overflow: ellipsis;
  margin: 0;

  &:disabled {
    pointer-events: none;
  }

  &::placeholder {
    color: #828282;
  }
`;

const StyledTextArea = styled.textarea`
  display: flex;
  flex: ${(props) => props.fullWidth && "1"};
  font-size: 1.4rem;
  font-weight: 500;
  color: #333;
  background-color: transparent;
  border: 0;
  border-radius: 0.8rem;
  outline: 0;
  appearance: none;
  text-overflow: ellipsis;
  resize: none;
  margin: 0;

  &:disabled {
    pointer-events: none;
  }

  &::placeholder {
    color: #828282;
  }
`;

const HelperText = styled.span`
  font-size: 1rem;
  color: ${(props) => (props.error ? "#d32f2f" : "#828282")};
  margin-top: 0.6rem;
`;

export const Input = ({
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  onChange,
  value,
  size,
  fullWidth,
  placeholder,
  multiline,
  rows,
}) => {
  return (
    <Container>
      <InputLabel disabled={disabled} error={error} fullWidth={fullWidth}>
        Label
        <InputWrapper disabled={disabled} error={error} size={size}>
          {startIcon === "favorite" && <Favorite />}
          {startIcon === "cart" && <ShoppingCart />}
          {startIcon === "like" && <ThumbsUp />}
          {multiline ? (
            <StyledTextArea
              rows={rows}
              onChange={onChange}
              value={value}
              size={size}
              disabled={disabled}
              fullWidth={fullWidth}
              placeholder={placeholder}
            />
          ) : (
            <StyledInput
              onChange={onChange}
              value={value}
              size={size}
              disabled={disabled}
              fullWidth={fullWidth}
              placeholder={placeholder}
            />
          )}
          {endIcon === "favorite" && <Favorite />}
          {endIcon === "cart" && <ShoppingCart />}
          {endIcon === "like" && <ThumbsUp />}
        </InputWrapper>
        {helperText !== "" && (
          <HelperText error={error}>{helperText}</HelperText>
        )}
      </InputLabel>
    </Container>
  );
};

Input.defaultProps = {
  error: false,
  disabled: false,
  multiline: false,
  helperText: "",
  value: "",
  placeholder: "Placeholder",
  size: "md",
  onChange: () => null,
  rows: "4",
};

Input.propTypes = {
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  helperText: PropTypes.string,
  startIcon: PropTypes.oneOf(["cart", "favorite", "like"]),
  endIcon: PropTypes.oneOf(["cart", "favorite", "like"]),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md"]),
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.string,
};
