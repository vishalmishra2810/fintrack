"use client";

import { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <nav
        aria-label="Page navigation example"
        className="flex items-center justify-center mb-[30px]"
      >
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <a
              href="#"
              onClick={handlePreviousClick}
              className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          {[1, 2, 3, 4, 5].map((pageNumber) => (
            <li key={pageNumber}>
              <a
                href="#"
                aria-current={pageNumber === currentPage ? "page" : undefined}
                onClick={() => handlePageClick(pageNumber)}
                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  pageNumber === currentPage
                    ? "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    : ""
                }`}
              >
                {pageNumber}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              onClick={handleNextClick}
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
