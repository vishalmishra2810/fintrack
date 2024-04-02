import React from "react";

const About = () => {
  return (
    <>
      <section className="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="relative">
                <img
                  src="https://i.postimg.cc/QtyYkbxp/pexels-andrea-piacquadio-927022.jpg"
                  alt=""
                  className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                />
                <div className="absolute z-10 hidden w-full h-full bg-blue-400 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
                <div className="absolute z-50 text-blue-400 transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-14 h-14 bi bi-play-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="relative">
                <h1 className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                  About Us
                </h1>
              </div>
              <div className="bg-gray-100 min-h-screen py-10">
                <div className="container mx-auto px-4">
                  <h1 className="text-3xl font-bold text-center mb-6">
                    About JournalMotion
                  </h1>
                  <p className="text-lg mb-6">
                    At JournalMotion, we are more than just a news media
                    platform; we are your gateway to the world's latest events,
                    trends, and developments. With a commitment to delivering
                    timely and accurate news coverage, we strive to keep our
                    audience informed, engaged, and empowered.
                  </p>
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
                    <p className="text-lg mb-6">
                      Our mission at JournalMotion is clear: to provide
                      comprehensive and unbiased news coverage that empowers
                      individuals to make informed decisions. We understand the
                      importance of reliable information in today's fast-paced
                      world, and we aim to be your trusted source for news that
                      matters.
                    </p>
                    <h2 className="text-xl font-semibold mb-2">
                      Comprehensive Coverage
                    </h2>
                    <p className="text-lg mb-6">
                      From breaking news stories to in-depth analyses, our team
                      of dedicated journalists works tirelessly to bring you the
                      most relevant and up-to-date information. Whether it's
                      politics, business, technology, health, or culture, we
                      cover a wide range of topics to ensure that you stay
                      informed about the issues that impact your life.
                    </p>
                    <h2 className="text-xl font-semibold mb-2">
                      Unwavering Integrity
                    </h2>
                    <p className="text-lg mb-6">
                      Integrity is at the core of everything we do at
                      JournalMotion. We adhere to the highest standards of
                      journalistic ethics and strive to present the facts
                      objectively and impartially. Our commitment to
                      truthfulness, accuracy, and transparency is unwavering,
                      ensuring that our readers can trust the information they
                      receive from us.
                    </p>
                    <h2 className="text-xl font-semibold mb-2">
                      Founder's Vision
                    </h2>
                    <p className="text-lg mb-6">
                      Founded by visionary entrepreneur Vishal Mishra,
                      JournalMotion was born out of a passion for journalism and
                      a desire to make a positive impact on society. With years
                      of experience in the media industry, Vishal envisioned a
                      platform that would not only inform but also inspire and
                      empower individuals to engage with the world around them.
                    </p>
                    <h2 className="text-xl font-semibold mb-2">
                      Connect with Us
                    </h2>
                    <p className="text-lg mb-6">
                      At JournalMotion, we believe in the power of community.
                      That's why we invite you to connect with us on our various
                      platforms – from our website to social media channels.
                      Join the conversation, share your thoughts, and stay
                      connected with the latest news and updates from
                      JournalMotion.
                    </p>
                    <h2 className="text-xl font-semibold mb-2">Our Promise</h2>
                    <p className="text-lg mb-6">
                      As we continue to grow and evolve, our commitment to
                      excellence remains unchanged. We promise to uphold the
                      highest standards of journalism, to provide you with
                      accurate and reliable information, and to serve as your
                      trusted guide in an ever-changing world.
                    </p>
                    <p className="text-lg mb-6">
                      <strong>Thank You</strong>
                      <br />
                      We are grateful for the opportunity to serve you, our
                      readers, and we thank you for your continued support.
                      Together, we will journey towards a future where knowledge
                      is power, and informed decisions shape our world for the
                      better.
                    </p>
                  </div>
                  <a
                    href="/"
                    className="px-4 py-3 text-gray-50 transition-all transform bg-blue-400 rounded-[80px] hover:bg-blue-500 dark:hover:text-gray-100 dark:text-gray-100 "
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
