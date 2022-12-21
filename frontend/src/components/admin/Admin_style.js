import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
.ant-form-item-row ,.ant-col{
    position: relative !important;
    overflow: visible !important;
}

.name{
    display: flex;

}
.ant-dropdown-trigger{
    display: flex !important;
}
.ant-layout-content {
    background: white !important;
}
.newCourse{
    display: flex;
    justify-content: space-around;
    height: 100%;
}
.dropDown{
    /* border: 1px solid; */
    height: 100%;
   
    position: relative;
    width: 60%;
    right: 71px;
    top: -16px;
    /* height: 100%; */
    overflow: hidden;

}
.ant-select{
    display: flex;
    align-items: center;
}
.ant-drawer-content-wrapper{
    height: 100% !important;
}
`;
