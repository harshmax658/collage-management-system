import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
.formInput_group {
  position: relative;
  margin: 45px 0;

  .form_input {
    background: none;
    background-color: #ffff;
    color: $sub-color;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid grey !important;
    margin: 25px 0;
    outline: none;

    &:focus ~ .form_input_label {
      top: -20px;
      left: 0px;
      font-size: 14px;
      color: black;
    }
  }
  input[type="password"] {
    letter-spacing: 0.3rem;
  }
  .form_input_label {
    color: grey;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 7px;
    transition: 300ms ease all;

    &.shrink {
      top: -20px;
      left: 0px;
      font-size: 14px;
      color: black;
      
    }
  }
}

`;
