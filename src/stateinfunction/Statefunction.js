import React, { useState } from "react";

const Statefunction = () => {
  const [count, setcount] = useState(0);
  const Increment = () => {
    setcount(count + 1);
  };
  return (
    <>
     <div style={{ width: "40%", margin: "10px auto" }}>
      <h2>{count}</h2>
      <button
       style={{ padding: "10px 20px", margin: "10px" }}
       onClick={Increment}>
        State Using functional component Increment
       </button>
      </div>
    </>
  );
};

export default Statefunction;
