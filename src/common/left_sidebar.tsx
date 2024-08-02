"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaChartLine, FaListAlt, FaCog, FaUserCircle } from "react-icons/fa";

const LeftSideBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 h-screen w-64 ${isDarkMode ? 'bg-[#000000]' : 'bg-blue-800'} p-4`}>
        <div className="text-white text-2xl font-bold mb-8">
          <Link href="/">Finance Tracker</Link>
        </div>

        <div className="flex items-center mb-8">
          <FaUserCircle className="text-white text-3xl mr-3" />
          <div>
            <div className="text-white text-lg font-bold">John Doe</div>
            <Link href="/settings" className={`text-blue-300 text-sm ${isDarkMode ? 'text-[#ffffff]' : 'text-blue-300'} hover:underline`}>
              Account Settings
            </Link>
          </div>
        </div>

        <nav className="space-y-4">
          <Link href="/" className="flex items-center text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            <FaHome className="mr-2" /> Dashboard
          </Link>
          <Link href="/transactions" className="flex items-center text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            <FaListAlt className="mr-2" /> Transactions
          </Link>
          <Link href="/budget" className="flex items-center text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            <FaChartLine className="mr-2" /> Make Budget
          </Link>
          <Link href="/settings" className="flex items-center text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            <FaCog className="mr-2" /> Settings
          </Link>
        </nav>

        <button
          onClick={toggleTheme}
          className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
};

export default LeftSideBar;
