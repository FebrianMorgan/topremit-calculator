import { css } from "@emotion/css";
import React, { useEffect } from "react";
import { useCalculator } from "../useCalculator";
import { useFormContext } from "react-hook-form";

const styled = {
  root: css`
    margin: 25px 0 24px;
    position: relative;
    &:after {
      content: "ˇ";
      font-size: 2.5rem;
      top: 13px;
      right: 18px;
      position: absolute;
      pointer-events: none;
    }

    .select-container {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      padding: 0 16px;
      width: 100%;
      height: 62px;
      border: 1px solid #d5e0e8;
      -webkit-appearance: none;
      appearance: none;
    }
  `,
};
function SelectCountry() {
  // const countries = useCountry();
  const { countries, updateSelectedCountry, fetchServices } = useCalculator();
  const { register, setValue, getValues } = useFormContext();

  React.useEffect(() => {
    setValue("country", "SGP");
    fetchServices(getValues("country"));
  }, []);

  return (
    <div className={styled.root}>
      <select
        {...register("country", {
          onChange: (e) => {
            updateSelectedCountry(e);
          },
        })}
        value={getValues("country")}
        className="select-container"
      >
        <option value="" disabled selected>
          Select Destination Country
        </option>
        {countries.map((v) => {
          return (
            <option key={v.name} value={v.iso_code}>
              {v.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export { SelectCountry };
