"use client";

import React, { useState } from "react";

type Transaction = {
  amount: string;
  location: string;
  time: string;
};

const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [amount, setAmount] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");

  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    const newTransaction: Transaction = {
      amount,
      location,
      time,
    };
    setTransactions([...transactions, newTransaction]);
    setAmount("");
    setLocation("");
    setTime("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <h1 className="text-center text-3xl font-bold text-gray-900">
          Transaction
        </h1>
        <form
          onSubmit={handleAddTransaction}
          className="bg-white p-6 rounded-lg shadow-lg space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount Paid
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Where Spent
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Time Spent
            </label>
            <input
              type="datetime-local"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Transaction
          </button>
        </form>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Transactions</h2>
          {transactions.length === 0 ? (
            <p className="text-gray-500">No transactions yet.</p>
          ) : (
            <ul className="space-y-2">
              {transactions.map((transaction, index) => (
                <li
                  key={index}
                  className="flex justify-between p-3 border border-gray-300 rounded-md"
                >
                  <div>
                    <p className="font-semibold">{transaction.location}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(transaction.time).toLocaleString()}
                    </p>
                  </div>
                  <p className="font-bold text-indigo-600">
                    ₹{transaction.amount}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
