import React from "react";
import axios from "axios";
import { useFormContext } from "react-hook-form";

const defaultValue = {
  progress: 40,
  countries: [],
  methodButton: [],
  selectedMethodId: 0,
  isoCode: "",
  currency: "",
  countryName: "",
  inputValue: 0,
  inputLocation: true,
  setProgress: () => {},
  setInputValue: () => {},
  fetchServices: () => {},
  fetchQuotation: () => {},
  updateSelectedCountry: () => {},
  updateSelectedMethod: () => {},
};

const CalculatorContext = React.createContext(defaultValue);

function CalculatorProvider({ children }) {
  const { getValues } = useFormContext();

  const [progress, setProgress] = React.useState(40);
  const [countries, setCountries] = React.useState([]);
  const [methodButton, setMethodButton] = React.useState([]);
  const [selectedMethodId, setSelectedMethodId] = React.useState(0);
  const isoCode = getValues("country");
  const [countryName, setCountryName] = React.useState("");
  const [currency, setCurrency] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [inputLocation, setInputLocation] = React.useState(true);

  // update country name
  React.useEffect(() => {
    if (countries.length < 1) return;
    const found = countries.find((country) => country.iso_code === isoCode);
    setCountryName(found.name);
  }, [isoCode]);

  // get countries
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
        setCountries(data);
      });
  }, []);

  async function updateSelectedCountry(e) {
    if (e.target.value === "") return;
    const value = e.target.value;
    await fetchServices(value);
  }

  // get currency
  React.useEffect(() => {
    if (selectedMethodId) {
      fetchCurrency(isoCode, selectedMethodId);
    }
  }, [selectedMethodId, updateSelectedCountry]);

  async function fetchServices(value) {
    if (value === "" || !value) return;
    const response = await axios.get(
      "https://frontend-test.topremit.com/api/services",
      {
        params: {
          type: "REMIT",
          country: value,
        },
      }
    );
    const data = [...response.data.data];
    if (data.length > 1) {
      data.sort((a, b) => {
        if (a.name > b.name) return 1;
        else if (a.name < b.name) return -1;
      });
    }
    setMethodButton(data);
    setSelectedMethodId(data[0].id);
  }

  async function fetchCurrency(value, id) {
    const response = await axios.get(
      "https://frontend-test.topremit.com/api/currencies",
      {
        params: {
          country: value,
          service: id,
        },
      }
    );
    setCurrency(response.data.data[0].iso_code);
  }

  function updateSelectedMethod(value) {
    setSelectedMethodId(value);
  }

  async function fetchQuotation() {
    const response = axios.post(
      "https://frontend-test.topremit.com/api/web/quotations",
      {
        params: {
          service: selectedMethodId,
          currency: currency,
          country: isoCode,
          amount: inputValue,
          is_send_amount: inputLocation,
        },
      }
    );
    console.log(response);
  }

  return (
    <CalculatorContext.Provider
      value={{
        progress,
        countries,
        methodButton,
        selectedMethodId,
        isoCode,
        currency,
        countryName,
        inputValue,
        inputLocation,
        setProgress,
        setInputValue,
        fetchServices,
        fetchQuotation,
        updateSelectedCountry,
        updateSelectedMethod,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}
function useCalculator() {
  return React.useContext(CalculatorContext);
}

export { CalculatorProvider, useCalculator };
