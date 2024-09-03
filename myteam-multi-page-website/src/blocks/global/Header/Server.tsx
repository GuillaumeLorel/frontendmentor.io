import { getPayloadHMR } from "@payloadcms/next/utilities";
import React from "react";
import config from "@payload-config";
import Image from "next/image";
import Sidebar from "./Sidebar/Sidebar";

export default async function HeaderServer() {
  const payload = await getPayloadHMR({ config });
  const header = await payload.findGlobal({
    slug: "header",
  });

  return (
    <header className="sticky z-50 top-0 w-full bg-primary-midnight-green pt-12 sm:pt-16 pb-4 lg:pt-[73px] lg:pb-6">
      <div className="flex items-center justify-between max-w-[1440px] px-6 sm:px-10 lg:px-[165px] mx-auto">
        <div className="flex items-center gap-20 w-full sm:justify-start justify-between">
          <div className="relative w-40 h-10">
            <Image
              src="/logo.svg"
              fill
              className="object-contain"
              alt="Logo myteam"
              loading="eager"
            />
          </div>
          <nav>
            <ul className="items-center gap-10 hidden sm:flex">
              {header.nav?.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="text-white font-semibold lowercase text-base-lg hover:text-primary-light-coral ease-out duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Sidebar header={header} />
          </nav>
        </div>
        <a
          href={header.cta.link}
          className="text-base-lg leading-base-lg text-white 
          font-semibold py-[9px] px-8 border-[2px] border-solid border-white 
          rounded-3xl disabled:opacity-25 hover:bg-white hover:text-secondary-dark-green ease-out duration-300 hidden sm:block text-nowrap"
        >
          {header.cta.label}
        </a>
      </div>
    </header>
  );
}
