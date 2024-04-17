"use client";
import { useEffect, useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "./ThemeContext";

const ToggleMode = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleClick = () => {
    toggleTheme();
  };

  return (
    <button className="relative flex items-center gap-2" onClick={handleClick}>
      <Image
        src={
          isDarkMode
            ? "/images/icon-moon-dark.svg"
            : "/images/icon-moon-light.svg"
        }
        alt="Moon icon"
        width={20}
        height={20}
        className="w-4 h-5 sm:w-5 sm:h-5"
      />
      <span className="dark:text-white text-very-dark-blue-light-mode text-xs sm:text-base font-semibold">
        Dark Mode
      </span>
    </button>
  );
};

export default ToggleMode;
