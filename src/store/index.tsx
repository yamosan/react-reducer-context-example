import React, { createContext, useContext, useReducer } from "react";

type TStore = {
  count: number;
};

const initialStore: TStore = {
  count: 0,
};

type TAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" }
  | { type: "multiply"; payload: number };

const reducer: React.Reducer<TStore, TAction> = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "multiply":
      return { count: state.count ** action.payload };
    default:
      return state;
  }
};

type TStoreContext = {
  globalState: TStore;
  setGlobalState: React.Dispatch<TAction>;
};

const StoreContext = createContext<TStoreContext>({} as TStoreContext);

export const useStore = () => useContext(StoreContext);

const StoreProvider: React.FC = ({ children }) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialStore);
  return (
    <StoreContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
