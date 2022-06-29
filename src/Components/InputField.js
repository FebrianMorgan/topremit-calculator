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
      width: 100%;
      height: 60px;
      border-radius: 8px;
    }
  `,
};

function InputField({ text, name }) {
  const { register, getValues } = useFormContext();
  const placeholder = text;

  return (
    <>
      <div className={styled.root}>
        <input
          {...register(name)}
          type="text"
          placeholder={placeholder}
          className="input-container"
        ></input>
      </div>
    </>
  );
}

export { InputField };
