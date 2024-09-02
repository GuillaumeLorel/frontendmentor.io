import React from "react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";
import Image from "next/image";

export default async function FooterServer() {
  const payload = await getPayloadHMR({ config });
  const footer = await payload.findGlobal({
    slug: "footer",
  });
  return (
    <footer className="bg-secondary-dark-green py-12">
      <div className="wrapper flex flex-col lg:flex-row gap-8 lg:gap-0 items-stretch justify-between">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-32 items-center justify-between">
          <div className="flex flex-col items-center sm:items-start gap-6">
            <div className="relative w-24 h-6 lg:w-40 lg:h-10">
              <Image src={footer.logo.url} fill className="object-contain" />
            </div>
            <ul className="flex items-center gap-10">
              {footer.nav?.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="text-white font-semibold lowercase text-base-lg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="font-semibold text-base leading-base text-white opacity-60 max-w-40 text-center sm:text-right lg:text-right">
            {footer.address}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-end justify-between gap-4 sm:gap-0">
          <div className="flex items-center gap-4">
            {footer.social?.map((item) => (
              <a key={item.id} href={item.link} className="relative w-6 h-6">
                {/* @ts-ignore */}
                <Image src={item.icon.url} fill className="object-contain" />
              </a>
            ))}
          </div>
          <p className="font-semibold text-base leading-base text-white opacity-60">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
