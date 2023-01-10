import React from "react";
import Parent from "./props/Parent";
import Stateclass from "./stateinclass/Stateclass";
import Statefunction from "./stateinfunction/Statefunction";

const App = () => {
  return (
    <>
      <Parent />
      <Stateclass />
      <Statefunction />
    </>
  );
};

export default App;
