"use client"; // This is a client component 

import React, { useState } from "react";

const Admin = () => {
  const [heading1, setHeading1] = useState("");
  const [heading2, setHeading2] = useState("");
  const [heading3, setHeading3] = useState("");

  // Function to handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevents default form submission behavior
    // Do something with the input field values (e.g., save to database, console.log, etc.)
    console.log(heading1);
    console.log(heading2);
    console.log(heading3);
  };
  return (
    <>
      <form className="max-w-sm mx-auto my-10" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="heading1"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Heading 1
          </label>
          <input
            type="text"
            id="heading1"
            value={heading1}
            onChange={(e) => setHeading1(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="heading2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Heading 2
          </label>
          <input
            type="text"
            id="heading2"
            value={heading2}
            onChange={(e) => setHeading2(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="heading3"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Heading 3
          </label>
          <input
            type="text"
            id="heading3"
            value={heading3}
            onChange={(e) => setHeading3(e.target.value)}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Post
        </button>
      </form>
    </>
  );
};

export default Admin;
