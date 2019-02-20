import React, { PureComponent } from "react";

import { ViewPrefConsumer } from "../../contexts/view-prefs";
import { PeopleConsumer } from "../../contexts/people";
import { connectConsumer, compose } from "../../util/common";
import { fetchPeople } from "../../data/api";

import PersonRow from "./person-row";

class PeopleTable extends PureComponent {
  state = { loading: true };
  componentDidMount() {
    this.fetchPeople();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.sort !== this.props.sort) {
      this.fetchPeople();
    }
  }
  fetchPeople = () => {
    const { fetchPeople, sort } = this.props;
    this.setState({ loading: true });
    fetchPeople(sort).then(() => this.setState({ loading: false }));
  };
  render() {
    const { list } = this.props;
    const { loading } = this.state;
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
  }
}

export default compose(
  connectConsumer(PeopleConsumer)(({ fetchPeople, list }) => ({
    fetchPeople,
    list
  })),
  connectConsumer(ViewPrefConsumer)(({ sort }) => ({ sort }))
)(PeopleTable);
