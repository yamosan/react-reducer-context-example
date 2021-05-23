import React, { useState } from "react";
import { useStore } from "../store";

const Counter = () => {
  const { globalState, setGlobalState } = useStore();
  const [value, setValue] = useState(0);

  return (
    <>
      <h2>count: {globalState.count}</h2>
      <div>
        <button
          onClick={() => {
            setGlobalState({ type: "increment" });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            setGlobalState({ type: "decrement" });
          }}
        >
          -1
        </button>
        <button
          onClick={() => {
            setGlobalState({ type: "reset" });
          }}
        >
          reset
        </button>
      </div>
      <div>
        <input
          type="number"
          value={value}
          min={0}
          max={10}
          onChange={(e) => setValue(e.target.valueAsNumber)}
          style={{ width: "40px" }}
        />
        <button
          onClick={() => {
            setGlobalState({ type: "multiply", payload: value });
          }}
        >
          multiply
        </button>
      </div>
    </>
  );
};

export default Counter;
