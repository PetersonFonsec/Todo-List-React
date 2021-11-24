import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  border-bottom: 1px solid var(--color-hr);
  margin: 32px auto;
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  font-size: var(--font-size-large);
  padding: 0 0 8px 0;
  outline: none;
  width: 100%;

  &::placeholder {
    font-size: 0;
  }

  &:focus ~ label,
  &:active ~ label,
  &:not(:placeholder-shown) ~ label {
    transform: translateY(-24px);
    font-size: var(--font-size-small);
  }
`;

export const Label = styled.label`
  bottom: 8px;
  color: var(--font-color-medium);
  font-size: var(--font-size-large);
  left: 0;
  position: absolute;
  transition: 0.2s ease-in-out all;
`;
