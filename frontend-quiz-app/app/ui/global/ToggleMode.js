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

  return (
    <label className="inline-flex items-center cursor-pointer gap-4">
      <Image
        src={
          isDarkMode
            ? `/images/icon-sun-light.svg`
            : `/images/icon-sun-dark.svg`
        }
        width={24}
        height={24}
        className="cursor-pointer"
        alt="Color mode"
      />
      <input
        type="checkbox"
        value=""
        className="sr-only peer cursor-pointer"
        onChange={toggleTheme}
        checked={isDarkMode}
      />
      <div className="cursor-pointer relative w-12 h-7 bg-purple rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
      <Image
        src={
          isDarkMode
            ? `/images/icon-moon-light.svg`
            : `/images/icon-moon-dark.svg`
        }
        width={24}
        height={24}
        className="cursor-pointer"
        alt="Color mode"
      />
    </label>
  );
};

export default ToggleMode;
