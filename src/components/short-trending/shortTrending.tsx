
"use client";

import React, { useState } from "react";

const ShortTrending = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index: any) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  const accordionItems = [
    {
      title: "Breaking: Major Tech Company Unveils Revolutionary AI Technology",
      content:
        "In a groundbreaking announcement, a leading tech company revealed its latest AI technology that promises to reshape industries. Experts believe this innovation will pave the way for a new era in artificial intelligence, transforming how businesses operate and revolutionizing everyday life.",
    },
    {
      title:
        "Global Climate Summit: World Leaders Unite to Combat Climate Change",
      content:
        "Leaders from around the world gathered at the Global Climate Summit to address the pressing issue of climate change. Committing to ambitious goals, nations pledged to reduce carbon emissions, invest in renewable energy, and implement sustainable practices. The summit marks a significant step toward a greener and more sustainable future.",
    },
    {
      title:
        "Space Exploration Milestone: Astronauts Successfully Land on Mars",
      content:
        "In an historic achievement, astronauts landed safely on Mars after a months-long journey. This monumental feat opens new horizons for humanity's exploration of space, offering valuable insights into the Martian terrain and potential for future colonization. Scientists and space enthusiasts worldwide celebrate this remarkable accomplishment.",
    },
  ];

  return (
    <div id="accordionFlushExample" className="mx-10">
      {accordionItems.map((item, index) => (
        <div
          className={`rounded-none border ${
            openAccordion === index
              ? "border-b-0"
              : "border-l-0 border-r-0 border-t-0"
          } border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800`}
          key={index}
        >
          <h2 className="mb-0" id={`flush-heading${index}`}>
            <button
              className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
              type="button"
              data-te-collapse-init
              data-te-target={`#flush-collapse${index}`}
              aria-expanded={openAccordion === index ? "true" : "false"}
              onClick={() => handleAccordionClick(index)}
            >
              {item.title}
              <span
                className={`-mr-1 ml-auto h-5 w-5 shrink-0 ${
                  openAccordion === index
                    ? "rotate-[-180deg] fill-[#212529]"
                    : ""
                } transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <div
            id={`flush-collapse${index}`}
            className={`!visible ${
              openAccordion === index ? "" : "hidden"
            } border-0`}
            data-te-collapse-item
            aria-labelledby={`flush-heading${index}`}
          >
            <div className="px-5 py-4">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShortTrending;
