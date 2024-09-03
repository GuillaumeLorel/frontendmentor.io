"use client";
import React, { useState } from "react";
import Image from "next/image";

interface TeamBlockServerProps {
  title: string;
  members: {
    name: string;
    role: string;
    image: {
      url: string;
    };
    description: string;
    socials: {
      icon: {
        url: string;
      };
      link: string;
    }[];
  }[];
}

export default function TeamBlockServer({
  title,
  members,
}: TeamBlockServerProps) {
  const [visibleMemberIndex, setVisibleMemberIndex] = useState<number | null>(
    null
  );

  const handleClick = (index: number | null) => {
    setVisibleMemberIndex(visibleMemberIndex === index ? null : index);
  };

  return (
    <section className="bg-secondary-deep-jungle-green py-36 relative overflow-clip">
      <div className="absolute left-0 top-[-100px] sm:top-0 sm:bottom-0 w-[100px] h-[200px]">
        <Image
          src="/left-shape-team.svg"
          fill
          className="object-contain"
          alt="Left shape team"
          loading="eager"
        />
      </div>
      <div className="wrapper flex flex-col items-center gap-16">
        <h2 className="title-h2 text-white">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 lg:gap-x-7 gap-y-14 sm:gap-y-20 w-full">
          {members.map((member, index) => (
            <div
              key={index}
              className="relative pt-8 pb-14 px-7 bg-secondary-sacramento-state-green"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 relative outline outline-2 outline-white rounded-full">
                  <Image
                    src={member.image.url}
                    fill
                    className="object-contain"
                    alt="Member image"
                    loading="eager"
                  />
                </div>
                <p className="text-lg text-secondary-rapture-blue font-bold mt-4">
                  {member.name}
                </p>
                <span className="text-base text-white italic font-medium text-center">
                  {member.role}
                </span>
              </div>
              <div
                className={`z-10 bg-secondary-dark-green top-0 left-0 absolute w-full h-full  pt-4 xl:pt-8 pb-14 px-7 ease-out duration-300 ${
                  visibleMemberIndex === index
                    ? "opacity-100"
                    : "opacity-0 insivible"
                }`}
              >
                <div className="flex flex-col items-center">
                  <p className="base-lg text-secondary-rapture-blue font-bold mt-4 mb-2">
                    {member.name}
                  </p>
                  <p className="text-base text-center text-white font-semibold max-w-64">
                    {member.description}
                  </p>
                  <div className="flex items-center gap-4 mt-6">
                    {member.socials.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        className="w-6 h-5 relative"
                      >
                        <Image
                          src={social.icon.url}
                          fill
                          className="object-contain"
                          alt=""
                          loading="eager"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleClick(index)}
                className={`z-20 size-14  rounded-full flex items-center justify-center absolute 
									bottom-0 left-1/2 translate-x-[-50%] translate-y-[50%] cursor-pointer hover:bg-secondary-rapture-blue ease-out duration-300 ${
                    visibleMemberIndex === index
                      ? "rotate-45 bg-secondary-rapture-blue hover:bg-primary-light-coral"
                      : "rotate-0 bg-primary-light-coral"
                  }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 0H6V6H0V10H6V16H10V10H16V6H10V0Z"
                    fill="#012F34"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-[147px] h-[100px]">
        <Image
          src="/right-shape-team.svg"
          fill
          className="object-contain"
          alt="Right shape team"
          loading="eager"
        />
      </div>
    </section>
  );
}
