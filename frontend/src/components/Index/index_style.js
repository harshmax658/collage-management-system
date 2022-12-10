import styled, { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
.form{
  position: absolute;
    top: 30%;
    right: 100px;
    width: 29.5%;
}
.ant-drawer-title{
  color: rgb(147 200 255 / 88%) !important;
  font-size: 1.2rem !important;
}
`;

export const Main = styled.main`
  background: url("/image/c1.jpg") no-repeat center center/cover fixed;
  height: 100%;
  width: 100%;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
`;
