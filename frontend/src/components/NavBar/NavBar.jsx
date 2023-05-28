import React from "react";
import { Nav } from "./navbar_style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRole } from "../../redux/login/action";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Nav>
      <div className="logo">logo</div>
      <div className="menu">
        <ul>
          <li
            onClick={() => {
              navigate("/admin");
              dispatch(setRole());
            }}
          >
            Admin Login
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default NavBar;
