import styled, { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
.ant-collapse-header{
    color: white !important;
}
p{
    color: wheat;
}
`;
export const OverFlow = styled.div`
  height: 100%;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: grey;
  }
`;
