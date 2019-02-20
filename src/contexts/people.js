import React, { PureComponent, createContext } from "react";

const context = createContext();
const { Provider, Consumer } = context;

import { fetchPeople } from "../data/api";

const toId = ({ url }) => url;
class PeopleProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      people: {},
      list: [],
      fetchPeople: this.fetchPeople.bind(this),
      loading: false
    };
  }
  fetchPeople = sort => {
    this.setState({ loading: true });
    return fetchPeople(sort).then(data => {
      this.setState(state => ({
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
  };
  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export default context;
export { PeopleProvider, Consumer as PeopleConsumer };
