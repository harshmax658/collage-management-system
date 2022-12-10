import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
.trigger{
    color: #00efff;
    transform: scale(1.3);
}
.ant-layout-header {
    font-size: 1.4rem;
    color: cyan !important;
    text-shadow: 0px 1px 20px red;
}
.logo{
    cursor: pointer;
}
`;
