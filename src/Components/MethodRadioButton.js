import { useRadio, useRadioGroup, Box } from "@chakra-ui/react";
import { css } from "@emotion/css";
import React from "react";
import { useCalculator } from "../useCalculator";
import { useController, useFormContext, Controller } from "react-hook-form";

const styled = {
  root: css`
    display: flex;
    flex-wrap: wrap;
    gap: 0 16px;
    .radio-button {
      color: #8295b5;
      cursor: pointer;
      border-width: 1px;
      border-radius: 6.25rem;
      font-size: 14px;
      padding: 7px 14px;
      margin-bottom: 16px;
    }
  `,
};
function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        className={`radio-button`}
        _focus={{
          bg: "#f4faff",
          color: "#30a6ff",
          border: "1px solid #f4faff",
          fontWeight: "700",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

function MethodRadioButton({ onChange }) {
  const { methodButton, updateSelectedMethod, selectedMethodId } =
    useCalculator();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  function handleChange(value) {
    onChange(value);
    updateSelectedMethod(value);
  }

  return (
    <div className={styled.root} {...group}>
      {methodButton.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard
            {...radio}
            key={value.id}
            value={value.id}
            onChange={(e) => handleChange(e.target.value)}
          >
            {value.name}
          </RadioCard>
        );
      })}
    </div>
  );
}

export { MethodRadioButton };
