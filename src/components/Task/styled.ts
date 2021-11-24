import styled from "styled-components";

export const Label = styled.label`
  align-items: center;
  display: flex;
  cursor: pointer;
  width: 100%;

  &.isComplet {
    text-decoration-line: line-through;
  }
`;

export const Checkbox = styled.input`
  appearance: none;
  background: linear-gradient(
    -90deg,
    var(--color-checkbox) 0%,
    var(--color-bg-contrast) 100%
  );
  border: 2px solid var(--color-border);
  border-radius: 5px;
  cursor: pointer;
  height: 24px;
  margin-right: 10px;
  width: 24px;

  &:checked {
    background-image: url("/check-solid.svg");
    background-size: 14px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
