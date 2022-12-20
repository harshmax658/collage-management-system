import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`.sign_up {
  display: flex;
  flex-direction: column;
  width: 380px;

  .title {
    margin: 10px 0;
  }
  
  /* .ant-notification-notice {
    background-color: red !important;
  } */
}
`;

export const SignUpStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .title {
    margin: 10px 0;
  }

  .formContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
    label {
      top: 35px;
    }

    .ant-picker {
      border: none !important;
      border-bottom: 1px solid grey !important;
      border-radius: inherit !important;
      outline: none !important;
    }
  }

  .ant-space-item {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
  .ant-space {
    justify-content: center !important;
  }
`;
