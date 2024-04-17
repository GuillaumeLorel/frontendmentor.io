import { useState } from "react";
import Image from "next/image";

const Filter = ({ filterRegion, setFilterRegion, regions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState("Region");
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setFilterRegion(option);
    setFilterText(option);
    setIsOpen(false);
  };

  return (
    <div onClick={toggleDropdown} className=" cursor-pointer relative">
      <span className="flex items-center gap-12 py-4 px-6 input-shadow rounded-md text-sm bg-white dark:bg-dark-blue dark:text-white h-[56px]">
        Filter by {filterText}{" "}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.45 3.45L6 6.9L2.55 3.45L1.5 4.5L6 9L10.5 4.5L9.45 3.45Z"
            fill="black"
            className="dark:fill-white"
          />
        </svg>
      </span>
      {isOpen && (
        <div className="bg-white dark:bg-dark-blue dark:text-white w-full absolute top-[110%] input-shadow rounded-md py-4 px-6 flex flex-col gap-2 text-sm">
          <div
            onClick={() => handleOptionClick("All")}
            className="cursor-pointer">
            All
          </div>
          {regions.map((item) => (
            <div
              key={item}
              onClick={() => handleOptionClick(item)}
              className="cursor-pointer">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
