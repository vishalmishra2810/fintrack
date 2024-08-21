"use client";

import React, { useState } from "react";


type Expense = {
  name: string;
  amount: number;
};

const Budget: React.FC = () => {
  const [salary, setSalary] = useState("");
  const [fixedExpenses, setFixedExpenses] = useState("");
  const [otherExpenses, setOtherExpenses] = useState<Expense[]>([]);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleCalculateBudget = (e: React.FormEvent) => {
    e.preventDefault();
    const totalFixedExpenses = parseFloat(fixedExpenses) || 0;
    const totalOtherExpenses = otherExpenses.reduce(
      (acc, expense) => acc + parseFloat(expense.amount.toString()),
      0
    );
    const totalExpenses = totalFixedExpenses + totalOtherExpenses;
    const remaining = parseFloat(salary) - totalExpenses;
    setRemainingBudget(remaining > 0 ? remaining : 0);
  };

  const handleAddExpense = () => {
    if (expenseName && expenseAmount) {
      const newExpense: Expense = {
        name: expenseName,
        amount: parseFloat(expenseAmount) || 0,
      };
      setOtherExpenses([...otherExpenses, newExpense]);
      setExpenseName("");
      setExpenseAmount("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-center text-3xl font-bold text-gray-900">
          Monthly Budget Planner
        </h1>
        <form
          onSubmit={handleCalculateBudget}
          className="bg-white p-6 rounded-lg shadow-lg space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Monthly Salary
            </label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fixed Expenses (EMI, Rent, etc.)
            </label>
            <input
              type="number"
              value={fixedExpenses}
              onChange={(e) => setFixedExpenses(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Plan Your Spending
            </h2>
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
                placeholder="Expense Name"
                className="block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <input
                type="number"
                value={expenseAmount}
                onChange={(e) => setExpenseAmount(e.target.value)}
                placeholder="Amount"
                className="block w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <button
                type="button"
                onClick={handleAddExpense}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add
              </button>
            </div>
            <ul className="space-y-2">
              {otherExpenses.map((expense, index) => (
                <li
                  key={index}
                  className="flex justify-between p-2 border border-gray-300 rounded-md"
                >
                  <span className="font-semibold">{expense.name}</span>
                  <span>₹{expense.amount.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Calculate Budget
          </button>
        </form>
        <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Summary</h2>
          <p className="text-lg">
            Remaining Budget:{" "}
            <span className="font-bold text-indigo-600">
            ₹{remainingBudget.toFixed(2)}
            </span>
          </p>
        </div>
        <p>As Per The Study, Atleast 20% of Salary amount needs to be invested.</p>
      </div>
    </div>
  );
};

export default Budget;
