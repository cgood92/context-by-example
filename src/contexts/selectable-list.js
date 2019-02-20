import React, { Component, createContext, useState, useContext } from "react";
import SelectableList from "../components/selection-helper";
import PeopleContext from "./people";

const context = createContext();
const { Provider, Consumer } = context;

const SelectableListProvider = ({ children }) => {
  const { list } = useContext(PeopleContext);
  return (
    <SelectableList
      ids={list}
      render={data => <Provider value={data}>{children}</Provider>}
      alwaysSelectOne={false}
    />
  );
};

export default context;
export { SelectableListProvider, Consumer as SelectableListConsumer };
