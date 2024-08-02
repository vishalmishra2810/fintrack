"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaChartLine, FaListAlt, FaCog, FaUserCircle } from "react-icons/fa";
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const RightSidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [value, onChange] = useState(new Date());

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 h-screen w-64 ${isDarkMode ? 'bg-gray-900' : 'bg-blue-800'} p-4`}>
        {/* Logo */}
        <div className="text-white text-2xl font-bold mb-8">
          <Link href="/">Finance Tracker</Link>
        </div>

        {/* User Profile */}
        <div className="flex items-center mb-8">
          <FaUserCircle className="text-white text-3xl mr-3" />
          <div>
            <div className="text-white text-lg font-bold">John Doe</div>
            <Link href="/settings" className="text-blue-300 text-sm hover:underline">
              Account Settings
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <Link href="/" className="flex items-center text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            <FaHome className="mr-2" /> Dashboard
          </Link>
          <Link href="/transactions" className="flex items-center text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            <FaListAlt className="mr-2" /> Transactions
          </Link>
          <Link href="/reports" className="flex items-center text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            <FaChartLine className="mr-2" /> Reports
          </Link>
          <Link href="/settings" className="flex items-center text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            <FaCog className="mr-2" /> Settings
          </Link>
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Right Sidebar */}
      <div className="fixed top-0 right-0 h-screen w-96 bg-gray-100 p-6 overflow-y-auto">
        {/* Calendar */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Calendar</h2>
          <Calendar onChange={() => onChange} value={value} />
        </div>

        {/* Recent Transactions */}
        <div>
          <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
          <ul className="space-y-4">
            <li className="flex justify-between p-4 bg-white rounded shadow">
              <div>
                <div className="font-bold">Groceries</div>
                <div className="text-gray-500 text-sm">July 28, 2024</div>
              </div>
              <div className="text-red-500 font-bold">-$50.00</div>
            </li>
            <li className="flex justify-between p-4 bg-white rounded shadow">
              <div>
                <div className="font-bold">Salary</div>
                <div className="text-gray-500 text-sm">July 25, 2024</div>
              </div>
              <div className="text-green-500 font-bold">+$2,500.00</div>
            </li>
            <li className="flex justify-between p-4 bg-white rounded shadow">
              <div>
                <div className="font-bold">Electric Bill</div>
                <div className="text-gray-500 text-sm">July 20, 2024</div>
              </div>
              <div className="text-red-500 font-bold">-$120.00</div>
            </li>
            {/* Add more dummy transactions here */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
