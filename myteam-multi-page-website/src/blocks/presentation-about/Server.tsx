import React from "react";
import Image from "next/image";

interface PresentationAboutBlockServerProps {
  title: string;
  text: string;
  rightShape?: {
    url: string;
  };
}

export default async function PresentationAboutBlockServer({
  title,
  text,
  rightShape,
}: PresentationAboutBlockServerProps) {
  return (
    <section className="bg-primary-midnight-green pt-16 pb-28 sm:pt-24 lg:pb-32 lg:pt-24 flex items-center justify-center relative">
      <div className="wrapper flex flex-col lg:flex-row items-center lg:items-stretch gap-4 sm:gap-6 lg:gap-10 relative text-center lg:text-left">
        <h1 className="title-h1-small text-white w-max flex-[33%]">{title}</h1>
        <div className="flex flex-col gap-10 items-start justify-between flex-[66%] sm:px-8 lg:px-0">
          <div className="w-[50px] h-1 bg-primary-light-coral hidden lg:block"></div>
          <p className="text-white base-lg">{text}</p>
        </div>
      </div>
      <div className="absolute right-0 bottom-[-100px] sm:bottom-0 w-[100px] h-[200px] sm:h-[200px]">
        {rightShape && (
          <Image
            src={rightShape?.url}
            alt="default alt text"
            fill
            className="object-cover object-top sm:object-contain"
          />
        )}
      </div>
    </section>
  );
}
