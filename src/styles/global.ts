import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
  // font-weight
  --font-weight-regular: 500;
  --font-weight-medium: 700;
  --font-weight-bold: 800;

  // font-color
  --font-color-ligth: #a8a8b4;
  --font-color-medium: #575767;
  --font-color-dark: #000;

  // font family
  --font-family-main: "Inter", sans-serif;

  // font size
  --font-size-small: 12px;
  --font-size-medium: 16px;
  --font-size-large: 18px;
  --font-size-extra-large: 56px;

  // colors
  --color-bg: #fff;
  --color-bg-contrast: #f2f3ff;
  --color-border: #dadada;
  --color-checkbox: #fcfcfc;
  --color-hr: #ebebeb;
}

html,
body {
  align-items: center;
  background-color: var(--color-bg);
  color: var(--font-color-medium);
  display: flex;
  font-size: var(--font-size-medium);
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  padding: 0;
  width: 100%;
}

* {
  box-sizing: border-box;
  font-family: var(--font-family-main);
  margin: 0;
}

ul,
ol {
  list-style: none;
  padding: 0;

  li:not(:last-child) {
    margin-bottom: 32px;
  }
}

#root {
  height: 100%;
  width: 100%;
}

main {
  padding: 16px;
}
`;
