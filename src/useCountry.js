import React from "react";
import axios from "axios";

function useCountry() {
  const [countries, setCountries] = React.useState([]);

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

  return countries;
}

export default useCountry;
