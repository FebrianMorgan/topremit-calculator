import React from "react";
import { Header } from "../Components/Header";
import { css } from "@emotion/css";

const styled = {
  root: css`
    font-family: "Mulish", sans-serif;
    overflow: hidden;
    max-width: 26.563rem;
    padding: 0;
    margin: auto;
    height: 100vh;

    .container {
      margin: 0;
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      padding: 0 24px;
    }
  `,
};

function ConfirmationPage() {
  return (
    <div className={styled.root}>
      <Header />
      <form className="container"></form>
    </div>
  );
}

export default ConfirmationPage;
