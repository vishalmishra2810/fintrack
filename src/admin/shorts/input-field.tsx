// InputField.js
import React from "react";

const InputField = ({ value, onChange }: any) => {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type something"
        className="w-full my-10 mr-2 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
      />
     
    </>
  );
};

export default InputField;
