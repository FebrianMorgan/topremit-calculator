import React from "react";
import { Header } from "../Components/Header";
import { css } from "@emotion/css";
import { SelectCountry } from "../Components/SelectCountry";
import { MethodRadioButton } from "../Components/MethodRadioButton";
import { InputFieldWithAddon } from "../Components/InputFieldWithAddon";
import { ContinueButton } from "../Components/ContinueButton";
import { QuotationNote } from "../Components/QuotationNote";
import { useFormContext, Controller } from "react-hook-form";

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

function Calculator() {
  const { control } = useFormContext();
  return (
    <div className={styled.root}>
      <Header />
      <form className="container">
        <SelectCountry />
        <Controller
          control={control}
          name="service"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <MethodRadioButton onChange={onChange} />
          )}
        />
        <InputFieldWithAddon type={"send"} />
        <QuotationNote />
        <InputFieldWithAddon type={"receive"} />
        <ContinueButton />
      </form>
    </div>
  );
}

export default Calculator;
