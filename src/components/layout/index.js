import styled from "@emotion/styled";

export const Layout = styled("div")`
  font-family: "Lato", sans-serif;
  display: grid;
  height: 100vh;
  grid-template-rows: 50px 1fr;
  grid-template-columns: 125px auto;
  & > * {
    border: 1px solid black;
  }
`;

export const Header = styled("header")`
  grid-column: 1 / span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const SideBar = styled("aside")``;

export const Main = styled("main")``;
