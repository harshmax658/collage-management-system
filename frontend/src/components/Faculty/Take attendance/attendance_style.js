import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
::-webkit-scrollbar {
    width: 15px;
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


.ant-drawer-title{
    text-align: center;
    font-size: 1.3rem !important;
}


.sectionBtn{
    button{
        margin: 0 10px;
    }
}
.container{
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin: 0 auto;
    line-height: 1.7rem;
    align-items: center;
    border-radius: 5px;
   
    :hover{
        background-color: #e1eaec;
        transition: ease-in-out .3s;
    }
    
    .left{
        .boxs{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 135%;

      
       } 
        
        /* width: 80%; */
    }
    .right{
        /* width: 20%; */
        button{
            margin-right: 25px;
        }
    }

    
}
`;
