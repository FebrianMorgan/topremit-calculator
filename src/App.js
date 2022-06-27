import React from "react";
import { ChakraProvider, Container, Flex, VStack } from "@chakra-ui/react";
import { Header } from "./Components/Header";
import { CalculatorProvider } from "./useCalculator";
import { css } from "@emotion/css";
import { SelectCountry } from "./Components/SelectCountry";
import { MethodRadioButton } from "./Components/MethodRadioButton";
import { InputField } from "./Components/InputField";

const styled = {
  root: css`
    max-width: 26.563rem;
    padding: 0;
    margin: auto;

    .container {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0 24px;
    }
  `,
};

function App() {
  return (
    <ChakraProvider>
      <CalculatorProvider>
        <div className={styled.root}>
          <Header />
          <div className="container">
            <SelectCountry />
            <MethodRadioButton />
            <InputField type={"send"} />
            <InputField type={"receive"} />
          </div>
        </div>
      </CalculatorProvider>
    </ChakraProvider>
  );
}

export default App;
