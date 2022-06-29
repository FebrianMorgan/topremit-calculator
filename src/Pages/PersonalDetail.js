import React from "react";
import { Header } from "../Components/Header";
import { css } from "@emotion/css";
import { InputField } from "../Components/InputField";
import { HeaderText } from "../Components/HeaderText";
import { ContinueButton } from "../Components/ContinueButton";

const styled = {
  root: css`
    font-family: "Mulish", sans-serif;
    overflow: hidden;
    max-width: 26.563rem;
    padding: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    max-height: 100vh;

    .container {
      margin: 0;
      flex-grow: 1;
      width: 100%;
      height: 100%;
      padding: 0 24px;
    }
  `,
};

function PersonalDetail() {
  return (
    <div className={styled.root}>
      <Header />
      <form className="container">
        <HeaderText text="Recipient's Personal Details" />
        <InputField text="First Name" name="firstName" />
        <InputField text="Last Name" name="lastName" />
        <InputField text="Address" name="address" />
        <ContinueButton />
      </form>
    </div>
  );
}

export default PersonalDetail;
