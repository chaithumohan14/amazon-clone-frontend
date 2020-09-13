import React, { useContext, createContext, useReducer } from "react";

const RawStore = createContext();

export const StoreProvider = ({ initialState, reducer, children }) => (
  <RawStore.Provider value={useReducer(reducer, initialState)}>
    {children}
  </RawStore.Provider>
);

export const Store = () => useContext(RawStore);
