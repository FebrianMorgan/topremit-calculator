import { useRadio, useRadioGroup, Box, HStack } from "@chakra-ui/react";
import { css } from "@emotion/css";
import { useCalculator } from "../useCalculator";

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
        className="radio-button"
        _checked={{
          bg: "#f4faff",
          color: "#30a6ff",
          border: "none",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

function MethodRadioButton() {
  // Button too small
  const { methodButton } = useCalculator();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <div className={styled.root} {...group}>
      {methodButton.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </div>
  );
}

export { MethodRadioButton };
