import styled, { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
.site-drawer-render-in-current-wrapper {
  position: relative;
  height: 300px;
  padding: 48px;
  overflow: hidden;
  text-align: center;
  background: #fafafa;
  border: 1px solid #ebedf0;
  border-radius: 2px;
}
.ant-drawer-body
{
  /* padding: 1px !important; */
  overflow-x: hidden;

}
.bgNone{
  background: none !important;
  border: none;

}
.site-drawer-render-in-current-wrapper{
  display: flex;
    align-items: flex-end;
    justify-content: center;
}

.form_input_label {
  &.shrink {
      top: -5px;
      left: 0px;
      font-size: 14px;
      color: black;
      
    }
}
`;

export const FormContainer = styled.div`
  /* width: 300px; */
  /* height: ; */
  label {
    color: red;
  }
`;
export const FormTag = styled.form`
  /* width: 300px; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  input {
    margin: 10px 0;
    border: none;
    border-bottom: 1px solid lightgray;
    color: white;
  }
  .btn {
    margin-top: 20px;
    button {
      margin: 0 15px;
    }
  }
`;
