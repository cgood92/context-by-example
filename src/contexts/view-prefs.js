import React, { Component, createContext, useState } from "react";

const context = createContext();
const { Provider, Consumer } = context;

const ViewPrefProvider = ({ children }) => {
  const toggle = () =>
    updateState(({ sort, ...rest }) => ({
      ...rest,
      sort: sort === "ASC" ? "DSC" : "ASC"
    }));
  const [state, updateState] = useState({ sort: "ASC", toggle });
  return <context.Provider value={state}>{children}</context.Provider>;
};

export default context;
export { ViewPrefProvider, Consumer as ViewPrefConsumer };
