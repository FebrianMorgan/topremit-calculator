import { css } from "@emotion/css";
import { useCalculator } from "../useCalculator";
import React from "react";
import { useFormContext } from "react-hook-form";

const styled = {
  root: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 62px;
    border-radius: 8px;
    border: 1px solid #d5e0e8;
    margin: 12px 0;

    .input-container {
      padding: 0 16px;
      margin: 0;
      width: 366px;
      height: 60px;
      border-radius: 8px 0px 0px 8px;
    }

    .input-addon {
      color: #2e4865;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px;
      width: 66px;
      height: 60px;
      border-left: 1px solid #d5e0e8;
      font-weight: 500;
    }
  `,
};

function InputFieldWithAddon({ type }) {
  const { register, watch } = useFormContext();
  const { currency, fetchQuotation } = useCalculator();
  const placeholder = type === "send" ? "You send" : "Recipient gets";
  const value = type === "send" ? "IDR" : currency;
  const amount = watch();
  console.log(amount, "rerender");

  // React.useEffect(() => {
  //   const debouncer = setTimeout(() => {
  //     console.log(amount);
  //     console.log("here", amount);
  //     if (amount !== "" && amount !== 0) {
  //       console.log("now here");
  //       // fetchQuotation();
  //     }
  //   }, 1500);
  //   return () => clearTimeout(debouncer);
  // }, [watch("amount")]);

  return (
    <>
      <div className={styled.root}>
        <input
          {...register("amount")}
          type="number"
          placeholder={placeholder}
          className="input-container"
        ></input>
        <span className="input-addon">{value}</span>
      </div>
    </>
  );
}

export { InputFieldWithAddon };
