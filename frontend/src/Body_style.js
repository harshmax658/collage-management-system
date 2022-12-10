import Styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-Box;
}
#root{
    height: 100vh;
}
.h100Vh{
    height: 100%;
}
.logo{
    color: red;
    font-size: 1.2rem;
    font-weight: bolder;
    text-align: center;
    background: rgb(189 61 61 / 30%) !important;

}
.site-layout-background{
  background: linear-gradient(178deg, #001529, #29aed636) !important;
}
.ant-layout{
  background: #29aed636 !important ;
}
.trigger {
  padding: 0 24px;
  font-size: 18px;
  line-height: 64px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

`;
