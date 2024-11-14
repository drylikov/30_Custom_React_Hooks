import React, { useState } from "react";
import useTimeout from "./useTimeout";

export default function TimeoutComponent() {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 1000);
  return (
    <>
      <span>{count}</span>
      <br />
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>Clear</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
