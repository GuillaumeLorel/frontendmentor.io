"use client";

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../global/ThemeContext";

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleInputChange = (event) => {
    setSearchTerm(event);
  };

  return (
    <div className="flex items-center gap-6 py-5 px-8 bg-white dark:bg-dark-blue input-shadow rounded-md h-[56px] w-full max-w-full sm:max-w-[340px] lg:max-w-[480px]">
      <Image
        src={
          isDarkMode
            ? "/images/icon-search-dark.svg"
            : "/images/icon-search-light.svg"
        }
        width={18}
        height={18}
        alt="Search"
      />
      <input
        type="text"
        placeholder="Search for a country..."
        className="bg-transparent text-very-dark-blue-light-mode dark:text-white placeholder-very-dark-blue-light-mode dark:placeholder-white
        focus:outline-none text-sm w-full"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
