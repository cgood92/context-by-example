import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import { PeopleConsumer } from "../../contexts/people";
import { SelectableListConsumer } from "../../contexts/selectable-list";
import { compose, connectConsumer } from "../../util/common";

const selected = css`
  background-color: #444444 !important;
  color: white;
  padding-left: 16px;
  font-weight: bold;
`;

const Row = styled("div")`
  padding: 8px;
  transition: 0.2s all;
  ${props => (props.selected ? selected : "")};
  &:hover {
    background-color: #d5d5d5;
  }
`;

const PersonRow = props => {
  const { id, name, isSelected, onSelect } = props;
  return (
    <Row onClick={onSelect(id)} selected={isSelected}>
      {name}
    </Row>
  );
};

export default compose(
  connectConsumer(PeopleConsumer)(({ people }, { id }) => people[id]),
  connectConsumer(SelectableListConsumer)(
    ({ selectedIds, onSelect }, { id }) => ({
      isSelected: selectedIds.includes(id),
      onSelect
    })
  )
)(PersonRow);
