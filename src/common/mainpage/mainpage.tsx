"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaHome, FaChartLine, FaListAlt, FaCog, FaUserCircle } from "react-icons/fa";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Import the entire chart.js library

const MainPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [calendarValue, onCalendarChange] = useState(new Date());

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Sample data for the graph
  const spendingData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Monthly Spending',
        data: [300, 400, 350, 500, 450, 600, 550],
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  // Determine the financial status color
  const getStatusColor = (amount: number) => {
    return amount >= 0 ? 'bg-green-500' : 'bg-red-500';
  };

  const remainingAmount = 500; 
  const financialStatus = remainingAmount - spendingData.datasets[0].data.reduce((a, b) => a + b, 0);

  return (
    <>
      {/* Main Content */}
      <div className="ml-64 mr-96 p-8 flex flex-col space-y-8">
        {/* Monthly Spending Graph */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Monthly Spending</h2>
          <Line data={spendingData} />
        </div>

        {/* Monthly Survival Meter */}
        <div className="bg-white p-6 rounded shadow flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Monthly Survival Meter</h2>
          <div className={`w-full h-6 rounded ${getStatusColor(financialStatus)}`} />
          <div className="text-lg font-bold mt-4">
            {financialStatus >= 0 ? 'You will survive this month!' : 'You are in the red!'}
          </div>
        </div>

        {/* Remaining Amount for the Month */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Remaining Amount This Month</h2>
          <div className="text-3xl font-bold">
          ${remainingAmount.toFixed(2)}
          </div>
        </div>

        {/* ChatGPT Section */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">ChatGPT Assistant</h2>
          <p>Ask ChatGPT for financial advice or insights.</p>
          {/* Placeholder for future ChatGPT integration */}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="fixed top-0 right-0 h-screen w-96 bg-gray-100 p-6 overflow-y-auto">
        {/* Calendar */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Calendar</h2>
          <Calendar onChange={() => onCalendarChange} value={calendarValue} />
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
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
            {/* Add more dummy transactions here */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainPage;
