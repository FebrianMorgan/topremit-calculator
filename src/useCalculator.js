import React from "react";
import axios from "axios";

const defaultValue = {
  progress: 30,
  country: [],
  button: ["Bank Transfer", "Cash Pickup", "E-wallet"],
  updateSelectedCountry: () => {},
};

const CalculatorContext = React.createContext(defaultValue);

function CalculatorProvider({ children }) {
  const [progress, setProgress] = React.useState(30);
  const [country, setCountry] = React.useState([]);
  const [button, setButton] = React.useState([
    "Bank Transfer",
    "Cash Pickup",
    "E-wallet",
  ]);

  React.useEffect(() => {
    axios
      .get("https://frontend-test.topremit.com/api/countries", {
        params: {
          type: "REMIT",
          available: true,
        },
      })
      .then((response) => {
        const data = response.data.data;
        setCountry(data);
      });
  }, []);

  function updateSelectedCountry(e) {
    if (e.target.value === "") return;
    axios
      .get("https://frontend-test.topremit.com/api/services", {
        params: {
          type: "REMIT",
          country: e.target.value,
        },
      })
      .then((response) => {
        const data = [...response.data.data];
        if (data.length > 1) {
          data.sort((a, b) => {
            if (a.name > b.name) return 1;
            else if (a.name < b.name) return -1;
          });
        }
        const newData = data.map((v) => v.name);
        setButton(newData);
      });
  }
  return (
    <CalculatorContext.Provider
      value={{ progress, country, updateSelectedCountry, button }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

function useCalculator() {
  return React.useContext(CalculatorContext);
}

export { CalculatorProvider, useCalculator };
