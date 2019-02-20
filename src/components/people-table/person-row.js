import React, { useContext } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

import PeopleContext from "../../contexts/people";
import SelectableListContext from "../../contexts/selectable-list";

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

const PersonRow = ({ id }) => {
  const {
    people: {
      [id]: { name }
    }
  } = useContext(PeopleContext);
  const { selectedIds, onSelect } = useContext(SelectableListContext);
  const isSelected = selectedIds.includes(id);
  return (
    <Row onClick={onSelect(id)} selected={isSelected}>
      {name}
    </Row>
  );
};

export default PersonRow;
