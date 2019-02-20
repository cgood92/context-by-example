import React, { Fragment as F } from "react";
import ReactDOM from "react-dom";
import "./reset.css";

import {
  Layout,
  Header,
  Main,
  SideBar as SidebarContainer
} from "./components/layout";
import PeopleTable from "./components/people-table";
import Sidebar from "./components/sidebar";
import Providers from "./providers";

const App = () => (
  <Layout>
    <Header>Awesome List of People</Header>
    <SidebarContainer>
      <Sidebar />
    </SidebarContainer>
    <Main>
      <PeopleTable />
    </Main>
  </Layout>
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Providers>
    <link
      href="https://fonts.googleapis.com/css?family=Lato"
      rel="stylesheet"
    />
    <App />
  </Providers>,
  rootElement
);
