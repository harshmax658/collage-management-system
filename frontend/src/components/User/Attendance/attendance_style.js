import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 #box {
      /* border: 2px solid; */
      /* height: 200px; */
      /* width: auto; */
      display: grid;
      grid-template-columns: 0fr 0fr 0fr 0fr 0fr 0fr;
      justify-content: center
      
    }
    .box {
      /* border: 2px solid; */
      height: 40px;
      width: 40px;
      background-color: #becbd6;
      margin: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
    }
    .ant-modal-footer{
      margin-top: 65px;
      position: absolute;
    right: 20px;
    bottom: 20px;
    }
    .ant-modal-content{
      height: 26rem;
    }
    .ant-modal-title{
      font-size: 1.3rem !important;
    text-align: center;
    text-shadow: 0px 2px 13px #4715c1;
    }
    .notfy{
      display: flex;
    align-items: center;
    position: absolute;
    bottom: 25px;
    left: 35px;
      .red{
        /* display: flex; */
        height: 10px;
        width:  10px;
        margin: 5px;
        background-color: green;
      }
      .green{
        background-color: red;
        /* display: flex; */
        margin:5px;
        height:10px;
        width :10px;
      }
    }
`;
export const Main = styled.main`
  display: flex;
`;
export const Left = styled.div`
  margin-right: 100px;
`;
export const Right = styled.div`
  /* display: none; */
  button {
    color: white;
    :disabled {
      color: red;
    }
  }
`;
