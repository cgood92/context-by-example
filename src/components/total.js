import React, { useContext } from "react";

import PeopleContext from "../contexts/people";

const Total = props => {
  const { list, loading } = useContext(PeopleContext);
  const total = list.length;
  if (loading) {
    return <div>Loading...</div>;
  }
  return <div>Total: {total}</div>;
};

export default Total;
