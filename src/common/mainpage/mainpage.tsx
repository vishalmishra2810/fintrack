"use client";

import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import { Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Import the entire chart.js library

type Expense = {
  name: string;
  amount: number;
};

interface ExpenseChartProps {
  salary: number;
  fixedExpenses: number;
  otherExpenses: Expense[];
}

const MainPage = () => {

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

  const salary = 5000; // Monthly salary
  const fixedExpenses = 2000; // Fixed expenses like EMI, rent
  const otherExpenses: Expense[] = [
    { name: "Groceries", amount: 500 },
    { name: "Transport", amount: 300 },
    { name: "Utilities", amount: 150 },
    { name: "Entertainment", amount: 200 },
  ];

  const totalFixedExpenses = fixedExpenses || 0;
  const totalOtherExpenses = otherExpenses.reduce(
    (acc: number, expense: { amount: { toString: () => string; }; }) => acc + parseFloat(expense.amount.toString()),
    0
  );
  const totalExpenses = totalFixedExpenses + totalOtherExpenses;
  const remainingBudget = salary - totalExpenses;

  // Ensure the remaining budget is non-negative
  const validRemainingBudget = remainingBudget > 0 ? remainingBudget : 0;

  // Data for the chart
  const data = {
    labels: ["Fixed Expenses", "Other Expenses", "Remaining Budget"],
    datasets: [
      {
        label: "Budget Distribution",
        data: [totalFixedExpenses, totalOtherExpenses, validRemainingBudget],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

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

        <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Budget Distribution</h2>
      <Pie data={data} />
    </div>
      </div>
    </>
  );
};

export default MainPage;
