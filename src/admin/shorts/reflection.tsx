// Reflection.js
import React from "react";

const Reflection = ({ value, value2 }: any) => {
  return (
    <>
      <div className="w-1/2 ml-2 p-3">{value}</div>
      <div className="w-1/2 ml-2 p-3">{value2}</div>
    </>
  );
};

export default Reflection;
