import React from "react";
import StoreProvider from "../store";
import Counter from "./Counter";

const App = () => {
  return (
    <StoreProvider>
      <Counter />
    </StoreProvider>
  );
};

export default App;
