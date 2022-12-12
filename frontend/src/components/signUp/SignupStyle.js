import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`.sign_up {
  display: flex;
  flex-direction: column;
  width: 380px;

  .title {
    margin: 10px 0;
  }
  .ant-notification-notice {
    background-color: red !important;
  }
}
`;

export const SignUpStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  .title {
    margin: 10px 0;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    text-align: center;
  }
`;
