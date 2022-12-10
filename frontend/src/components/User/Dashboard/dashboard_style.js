import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
.box{
    border: 1px solid red;
}
.svg{
    svg{

        font-size: 5rem;
    }
    font-size: 5rem;
}
.df{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.cPointer{
  cursor: pointer;
}
.name{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    font-size:1.2rem;
    .count{
        
        font-size:1.5rem;
    }
}
.red{
  color: red;

}

`;

export const DashHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 40%;
`;
export const Layout = styled.div`
  /* border: 1px solid; */
  height: 100%;
`;
export const DashboardDownInfo = styled.div`
  /* border: 1px solid; */
  height: 60%;
  display: grid;
  grid-template-columns: 0.7fr 0.6fr 0.5fr;

  .middle {
    /* border: 1px solid; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    div {
      margin: 0 10px;
    }
    .name {
      height: 80%;
      .count {
        font-size: 1.19rem;
      }
    }
    .fee {
      .name {
        margin-bottom: 5px;
        font-size: 1.3rem;
      }
      .status {
        line-height: 1.6rem;
        font-size: 1.1rem;
      }
    }
  }
  .right {
    /* border: 1px solid red; */
    background-color: black;
    color: white;

    display: flex;
    flex-direction: column;
    .heading {
      text-align: center;
      box-shadow: 0px 1px 5px 0px red;
    }
    .containt {
      margin-left: 40px;
    }
    ol {
      font-size: 1.3rem;

      li {
        line-height: 2.3rem;
      }
    }
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;

    .percentage {
      color: white;
      color: white !important;

      border: 1px solid;
      font-size: 4rem;
      padding: 50px 23px;
      border-radius: 50%;
      height: 190px;
      width: 190px;
      text-align: center;
    }
  }
`;
