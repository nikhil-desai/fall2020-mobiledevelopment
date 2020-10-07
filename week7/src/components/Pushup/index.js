import React, { useState } from "react";

const Pushup = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Push-ups: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Pushup;
