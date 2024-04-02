"use client";

import Link from "next/link";
import React from "react";

const AdminHeader = () => {
  const categories = [
    {
      id: 1,
      name: "Category 1",
      subcategories: ["Subcategory 1.1", "Subcategory 1.2", "Subcategory 1.3"],
    },
    {
      id: 2,
      name: "Category 2",
      subcategories: ["Subcategory 2.1", "Subcategory 2.2", "Subcategory 2.3"],
    },
    // Add more categories as needed
  ];

  return (
    <header className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="mr-5 text-[50px] text-[#e44d3b]">
          JM
        </Link>
        <nav className="flex space-x-4">
          <a href="/" className="text-white hover:text-gray-200">
            Home
          </a>
          <a href="/about" className="text-white hover:text-gray-200">
            About Us
          </a>
          <a href="/contact" className="text-white hover:text-gray-200">
            Contact
          </a>
          {categories.map((category) => (
            <div key={category.id} className="relative group">
              <span className="text-white cursor-pointer group-hover:text-gray-200">
                {category.name}
              </span>
              <ul className="absolute hidden bg-white border border-gray-300 rounded-md shadow-md p-2 mt-1 group-hover:block">
                {category.subcategories.map((subcategory) => (
                  <li
                    key={subcategory}
                    className="cursor-pointer hover:text-blue-500"
                  >
                    {subcategory}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default AdminHeader;
