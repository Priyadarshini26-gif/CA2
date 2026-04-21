import { useReducer, useEffect } from "react";
import { AppContext } from "./AppContextObject.jsx";
import { AppReducer, initialState } from "../reducer/appReducer.js";
import { fetchData } from "../services/api.js";

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      dispatch({ type: "INITIAL_DATA", payload: data.orders || [] });
    };
    loadData();
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
