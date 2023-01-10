import React from "react";

const Child = (props) => {
  const getcityname = props.mycityname;
  console.log(getcityname);
  return (
    <div>
      <h1>Cityname={getcityname}</h1>
    </div>
  );
};

export default Child;
