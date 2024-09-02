"use client";
import React, { useState } from "react";
import Image from "next/image";

interface NavItem {
  link: string;
  label: string;
}

interface CTA {
  link: string;
  label: string;
}

interface Header {
  nav?: NavItem[] | null;
  cta?: CTA | null;
}
interface SidebarProps {
  header: Header;
}

export default function Sidebar({ header }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden">
      <button onClick={toggleMenu} className="flex flex-col gap-1 w-5">
        <span className="w-full h-[3px] bg-white"></span>
        <span className="w-full h-[3px] bg-white"></span>
        <span className="w-full h-[3px] bg-white"></span>
      </button>
      <div
        className={`fixed top-0 right-0 w-screen h-screen bg-black bg-opacity-75 flex justify-end transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full w-full max-w-64 bg-primary-midnight-green pt-28 pl-12">
          <button
            onClick={toggleMenu}
            className="absolute top-14 right-6 text-white"
          >
            <Image
              src="/icon-close.svg"
              alt="Close menu"
              width={18}
              height={18}
            />
          </button>
          <ul className="flex flex-col gap-6 text-white">
            {header?.nav?.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-white font-semibold lowercase text-base-lg hover:text-primary-light-coral ease-out duration-300 cursor-pointer"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="flex h-auto">
              <a
                href={header?.cta?.link}
                className="text-base-lg leading-base-lg text-white 
          font-semibold py-[9px] px-8 border-[2px] border-solid border-white 
          rounded-3xl disabled:opacity-25 hover:bg-white hover:text-secondary-dark-green ease-out duration-300 text-nowrap mt-3"
              >
                {header?.cta?.label}
              </a>
            </li>
          </ul>
          <div className="w-[100px] h-[200px] absolute bottom-0 right-0">
            <Image
              src="/shape-sidebar.svg"
              alt="Shape sidebar"
              className="object-contain"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
}
