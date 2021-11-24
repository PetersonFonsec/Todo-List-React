import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid var(--color-border);
  border-radius: 12px;
  margin: 0 auto;
  max-width: 500px;
  padding: 64px;
  width: 100%;
`;

export const Header = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;

  h1 {
    color: var(--font-color-dark);
    font-size: var(--font-size-extra-large);
    font-weight: var(--font-weight-bold);
  }
`;

export const Icon = styled.div`
  align-items: center;
  background-color: var(--color-bg-contrast);
  border-radius: 6px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  height: 56px;
  width: 56px;
`;
