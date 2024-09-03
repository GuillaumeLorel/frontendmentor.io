import React from "react";
import Image from "next/image";

interface PresentationBlockServerProps {
  title: string;
  subtitle: string;
  text: string;
}

export default async function PresentationBlockServer({
  title,
  subtitle,
  text,
}: PresentationBlockServerProps) {
  const titleWithSubtitle = `${title} <span class="text-primary-light-coral">${subtitle}</span>`;

  return (
    <section className="bg-primary-midnight-green pt-20 sm:pt-28 lg:pt-32 flex items-center justify-center relative">
      <div className="absolute left-0 top-32 w-[100px] h-[200px] hidden lg:block">
        <Image
          src="/circle-left-pres-home.svg"
          fill
          className="object-contain"
          alt="Circle left pres home"
        />
      </div>
      <div className="wrapper flex flex-col lg:flex-row items-center lg:items-stretch gap-4 sm:gap-6 lg:gap-10 pb-48 sm:pb-64 relative text-center lg:text-left">
        <h1
          className="title-h1 text-white w-max flex-[60%]"
          dangerouslySetInnerHTML={{ __html: titleWithSubtitle }}
        />
        <div className="flex flex-col gap-20 items-start justify-between flex-[40%]">
          <div className="w-[50px] h-1 bg-secondary-rapture-blue hidden lg:block"></div>
          <p className="text-white base-lg">{text}</p>
        </div>
        <div className="absolute lg:right-[83px] bottom-0 w-[358px] h-[100px]">
          <Image
            src="/circle-bottom-pres-home.svg"
            fill
            className="object-contain"
            alt="Circle bottom pres home"
          />
        </div>
      </div>
    </section>
  );
}
