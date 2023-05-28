import styled from "styled-components";

export const Nav = styled.nav`
  content: "";
  height: 60px;
  opacity: 0.5;
  width: 100%;
  background-color: black;
  position: sticky;
  top: 0;
  left: 0x;
  display: grid;
  grid-template-columns: 0.5fr 1fr;

  .menu {
    color: red;
    ul {
      display: flex;
      list-style: none;
      li {
        cursor: pointer;
      }
    }
  }
`;
