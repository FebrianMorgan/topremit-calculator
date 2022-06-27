import { css } from "@emotion/css";
import React from "react";
import { Select } from "@chakra-ui/react";
import { country, useCalculator } from "../useCalculator";

const styled = {
  root: css`
    color: #8295b5;
    margin-top: 25px;
    margin-bottom: 24px;
    border-radius: 8px;
  `,
};
function SelectCountry() {
  const { country, updateSelectedCountry } = useCalculator();
  return (
    <Select
      placeholder="Select Destination Country"
      className={styled.root}
      onChange={(e) => updateSelectedCountry(e)}
    >
      {country.map((v) => {
        return (
          <option key={v.iso_code} value={v.iso_code}>
            {v.name}
          </option>
        );
      })}
    </Select>
  );
}

export { SelectCountry };
