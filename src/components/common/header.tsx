import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="headerWidth">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with the Image component */}
        <div className="flex items-center">
          <h1 className="text-white text-2xl font-bold pr-2">
            <Image src="/artist.png" alt="Logo" width={100} height={24} />
          </h1>
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-gray-800 px-2 py-1 rounded-lg"
          />
        </div>

        {/* Navigation */}
        <nav className="space-x-4">
          <a href="/" className="text-white hover:underline">
            Home
          </a>
          <a href="/" className="text-white hover:underline">
            Home
          </a>
          <a href="/" className="text-white hover:underline">
            Home
          </a>
          <a href="/login" className="text-white hover:underline">
            login
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
