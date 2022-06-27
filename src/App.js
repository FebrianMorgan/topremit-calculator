import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Container maxW="425px" centerContent>
        <div>Hello World</div>
      </Container>
    </ChakraProvider>
  );
}

export default App;
