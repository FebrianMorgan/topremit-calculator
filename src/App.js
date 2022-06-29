import { ChakraProvider } from "@chakra-ui/react";
import { CalculatorProvider, useCalculator } from "./useCalculator";
import { useForm, FormProvider } from "react-hook-form";
import Calculator from "./Pages/Calculator";
import PersonalDetail from "./Pages/PersonalDetail";
import ConfirmationPage from "./Pages/ConfirmationPage";
import { usePages } from "./usePages";

function App() {
  const { page } = usePages();

  function renderPage() {
    switch (page) {
      case 1:
        return <Calculator />;
      case 2:
        return <PersonalDetail />;
      case 3:
        return <ConfirmationPage />;
      default:
        return <Calculator />;
    }
  }

  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      country: "",
      service: null,
      amount: "",
    },
  });
  return (
    <FormProvider {...methods}>
      <ChakraProvider>
        <CalculatorProvider>
          {/* <Calculator /> */}
          {renderPage()}
        </CalculatorProvider>
      </ChakraProvider>
    </FormProvider>
  );
}

export default App;
