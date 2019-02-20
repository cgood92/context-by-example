import React, { createContext, useState, useCallback } from "react";

const context = createContext();
const { Provider, Consumer } = context;

import { fetchPeople } from "../data/api";

const toId = ({ url }) => url;
const PeopleProvider = ({ children }) => {
  const _fetchPeople = useCallback(sort => {
    setState(state => ({ ...state, loading: true }));
    return fetchPeople(sort).then(data => {
      setState(state => ({
        ...state,
        people: data.reduce(
          (acc, person) => ({
            ...acc,
            [toId(person)]: person
          }),
          data
        ),
        list: data.map(toId),
        loading: false
      }));
      return data;
    });
  });
  const [state, setState] = useState({
    people: {},
    list: [],
    fetchPeople: _fetchPeople,
    loading: false
  });
  return <Provider value={state}>{children}</Provider>;
};

export default context;
export { PeopleProvider, Consumer as PeopleConsumer };
