import React from "react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";
import Image from "next/image";

export default async function PresentationBlockServer({
  title,
  subtitle,
  text,
  leftShape,
  bottomShape,
}) {
  const titleWithSubtitle = `${title} <span class="text-primary-light-coral">${subtitle}</span>`;

  return (
    <section className="bg-primary-midnight-green pt-20 sm:pt-28 lg:pt-32 flex items-center justify-center relative">
      <div className="absolute left-0 top-32 w-[100px] h-[200px] hidden lg:block">
        <Image src={leftShape?.url} fill className="object-contain" />
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
          <Image src={bottomShape?.url} fill className="object-contain" />
        </div>
      </div>
    </section>
  );
}
