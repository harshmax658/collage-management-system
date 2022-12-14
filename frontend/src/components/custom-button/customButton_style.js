import { createGlobalStyle } from "styled-components";
const googleColor = "#4285f4";
export const GlobalCss = createGlobalStyle`
.custom_button {
  min-width: 150px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0px 30px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  &.google_Sign_In {
    background-color: ${googleColor};
    color: white;

    &:hover {
      background-color: #357ae8;
      border: none;
    }
  }
  .inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
}
`;
