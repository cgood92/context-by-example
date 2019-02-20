import React from "react";

import { PeopleProvider } from "./contexts/people";
import { ViewPrefProvider } from "./contexts/view-prefs";
import { SelectableListProvider } from "./contexts/selectable-list";

const Providers = ({ children }) => (
  <ViewPrefProvider>
    <PeopleProvider>
      <SelectableListProvider>{children}</SelectableListProvider>
    </PeopleProvider>
  </ViewPrefProvider>
);

export default Providers;
