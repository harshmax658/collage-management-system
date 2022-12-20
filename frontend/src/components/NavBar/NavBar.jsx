import React from "react";
import { Nav } from "./navbar_style";

const NavBar = () => (
  <Nav>
    <div className="logo">logo</div>
    <div className="menu">
      <ul>
        <li>home</li>
        <li>login</li>
        <li>signup</li>
      </ul>
    </div>
  </Nav>
);
export default NavBar;
