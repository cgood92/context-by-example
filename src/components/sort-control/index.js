import React from "react";

import ArrowUp from "./arrow";
import styled from "@emotion/styled";
import Button from "./button";
import { ViewPrefConsumer } from "../../contexts/view-prefs";
import { connectConsumer } from "../../util/common";

const DecoratedArrow = styled(ArrowUp)`
  transition: 0.2s transform;
  transform: scaleY(${props => (props.order === "ASC" ? "1" : "-1")});
  & > path {
    stroke-width: 0.2px !important;
  }
`;

const SortControl = props => {
  const { sort, toggle } = props;
  return (
    <div>
      Sort:
      <Button onClick={toggle} data-selector="sort-order">
        <DecoratedArrow height={9} width={9} order={sort} />
      </Button>
    </div>
  );
};

export default connectConsumer(ViewPrefConsumer)(({ sort, toggle }) => ({
  sort,
  toggle
}))(SortControl);
