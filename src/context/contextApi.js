import { createContext, useState, useEffect } from "react";
import { fatchDataFromApi } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState(false);
  const [selectCategories, setselectCategories] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fatchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fatchSelectedCategoryData = (query) => {
    setLoading(true);
    fatchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);
      setSearchResult(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResult,
        selectCategories,
        setselectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
