import React from "react";
import Child from "./Child";

const Parent = () => {
  let cityname = "Hyderabad";
  return (
    <>
      <Child mycityname={cityname} />
    </>
  );
};

export default Parent;
