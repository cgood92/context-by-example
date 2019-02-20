import React, { useContext, useState, useEffect } from "react";

import ViewPrefContext from "../../contexts/view-prefs";
import PeopleContext from "../../contexts/people";

import PersonRow from "./person-row";

const PeopleTable = () => {
  const [loading, setLoading] = useState(false);
  const { fetchPeople, list } = useContext(PeopleContext);
  const { sort } = useContext(ViewPrefContext);
  useEffect(() => {
    setLoading(true);
    fetchPeople(sort).then(() => setLoading(false));
  }, [sort]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {list.map(id => (
        <PersonRow key={id} id={id} />
      ))}
    </div>
  );
};

export default PeopleTable;
