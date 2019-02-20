import React from "react";

import { PeopleConsumer } from "../contexts/people";
import { connectConsumer } from "../util/common";

const Total = props => {
  const { total, loading } = props;
  if (loading) {
    return <div>Loading...</div>;
  }
  return <div>Total: {total}</div>;
};

export default connectConsumer(PeopleConsumer)(({ list, loading }) => ({
  total: list.length,
  loading
}))(Total);
