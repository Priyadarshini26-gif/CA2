import { createContext, useReducer, useEffect } from "react";
import { AppReducer, initialState } from "../reducer/appReducer.js";
import { fetchData } from "../services/api.js";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      dispatch({ type: "INITIAL_DATA", payload: data });
    };
    loadData();
  }, []);

  return (
    <appContext.Provider value={{ state, dispatch }}>
      {children}
    </appContext.Provider>
  );
};
