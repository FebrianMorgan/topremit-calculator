import React from "react";
import { useCalculator } from "./useCalculator";

const defaultValue = {
  page: 0,
  prevPage: () => {},
  nextPage: () => {},
};

const PageContext = React.createContext(defaultValue);

function PageProvider({ children }) {
  const { setProgress } = useCalculator();
  const [page, setPage] = React.useState(1);

  function prevPage(e) {
    e.preventDefault();
    if (page < 4 && page >= 0) setPage((page) => page - 1);
    setProgress((prev) => prev - 30);
  }

  function nextPage(e) {
    e.preventDefault();
    if (page < 4 && page >= 0) {
      setPage((page) => page + 1);
      setProgress((prev) => prev + 30);
    } else {
      setPage(1);
      setProgress(40);
    }
  }
  return (
    <PageContext.Provider value={{ page, nextPage, prevPage }}>
      {children}
    </PageContext.Provider>
  );
}

function usePages() {
  return React.useContext(PageContext);
}

export { PageProvider, usePages };
