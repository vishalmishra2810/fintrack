"use client"; // This is a client component

import React, { useState } from 'react';
import Testing from './previewComponent';
import { newsFormService } from '@/src/service/news.service';

const MyFormComponent = ({ onFormSubmit }: any) => {
  const [formData, setFormData] = useState({
    heading1: '',
    heading2: '',
    heading3: ''
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      onFormSubmit(formData);

      const newsFormResponse = await newsFormService.newsFormData(JSON.stringify(formData));
      
      console.log('here is logs', newsFormResponse)
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };
  

  return (
    <React.Fragment>
      <div className="flex">
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
              value={formData.heading1}
              onChange={handleChange}
              className="shadow-sm w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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
              value={formData.heading2}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 w-[500px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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
              value={formData.heading3}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border w-[500px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Post
          </button>
        </form>
        <div>
          <Testing formData={formData} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default MyFormComponent;
