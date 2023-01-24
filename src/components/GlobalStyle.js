import { createGlobalStyle } from "styled-components";
import { sand200 } from "./UI/variables";

export const GlobalStyle = createGlobalStyle`
* {
  background-color: ${sand200};
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
`;
