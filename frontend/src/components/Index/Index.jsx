import React from "react";
import Form from "../Form/Form";
import NavBar from "../NavBar/NavBar";
import { Main, GlobalCss } from "./index_style";

const Index = () => {
  return (
    <Main>
      <GlobalCss />
      <NavBar />
      <div className="form">
        <Form />
      </div>
    </Main>
  );
};

export default Index;
