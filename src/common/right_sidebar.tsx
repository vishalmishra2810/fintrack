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

      {/* Right Sidebar */}
      <div className="fixed top-0 right-0 h-screen w-96 bg-gray-100 p-6 overflow-y-auto">
        {/* Calendar */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Calendar</h2>
          <Calendar onChange={() => onChange} value={value} />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 mt-5">Recent Transactions</h2>
          <ul className="space-y-4">
            <li className="flex justify-between p-4 bg-white rounded shadow">
              <div>
                <div className="font-bold">Groceries</div>
                <div className="text-gray-500 text-sm">July 28, 2024</div>
              </div>
              <div className="text-red-500 font-bold">-₹50.00</div>
            </li>
            <li className="flex justify-between p-4 bg-white rounded shadow">
              <div>
                <div className="font-bold">Salary</div>
                <div className="text-gray-500 text-sm">July 25, 2024</div>
              </div>
              <div className="text-green-500 font-bold">+₹2,500.00</div>
            </li>
            <li className="flex justify-between p-4 bg-white rounded shadow">
              <div>
                <div className="font-bold">Electric Bill</div>
                <div className="text-gray-500 text-sm">July 20, 2024</div>
              </div>
              <div className="text-red-500 font-bold">-₹120.00</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
