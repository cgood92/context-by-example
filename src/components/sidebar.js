import React from "react";
import styled from "@emotion/styled";

import SortControl from "./sort-control";
import Total from "./total";

const Container = styled("aside")`
  padding: 8px;
`;

const Sidebar = () => (
  <Container>
    <SortControl />
    <Total />
  </Container>
);

export default Sidebar;
