import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
.ant-form-item-row ,.ant-col{
    position: relative !important;
    overflow: visible !important;
}
.ant-space-vertical{
    align-items: center !important;
}
.ant-spin-dot{
    left: 225px !important;
    
    margin-top: -28px !important;
}
.content {
  padding: 230px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 40px;
}
.student{
    height: 98%;
}
.ant-table-thead{
    position: sticky;
    top: 0;
    z-index: 100;
}
.ant-table-wrapper{
    height: 100%;
    overflow: auto;
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
.site-description-item-profile-wrapper {
  margin-bottom: 7px;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5715;
}
.site-form-in-drawer-wrapper {
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 100%;
  padding: 10px 16px;
  text-align: right;
  background: #fff;
  border-top: 1px solid #e9e9e9;
}
.ant-drawer-body p.site-description-item-profile-p {
  display: block;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  line-height: 1.5715;
}

.site-description-item-profile-p-label {
  display: inline-block;
  margin-right: 8px;
  color: rgba(0, 0, 0, 0.85);
}
.titleEditStudent{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .title{
        font-size: 1.1rem;
    }
}
`;
