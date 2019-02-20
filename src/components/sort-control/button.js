import styled from "@emotion/styled";
export default styled("button")`
  height: 22px;
  border-radius: 2px;
  background-color: transparent;
  padding: 3px 5px;
  border: none;
  color: #a4a7af;
  font-weight: bold;
  font-size: 11px;
  margin: 0 2px;
  & path {
    fill: #a4a7af;
    stroke: #a4a7af;
    stroke-width: 0;
  }
  &:hover,
  &:focus {
    background-color: #e7e9ee;
  }
  &:focus {
    outline: 0;
    color: #303744;
    & path {
      fill: #303744;
      stroke: #303744;
    }
  }
`;
