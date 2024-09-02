import React from "react";
import Image from "next/image";

export default function ClientsBlockServer({ title, logos, leftShape }) {
  console.log("logos", logos[0].logo.url);
  return (
    <section className="bg-secondary-sacramento-state-green py-[88px] sm:py-24 lg:py-36 relative">
      <div className="w-[200px] h-[100px] lg:h-[200px] absolute top-0 left-[-100px] sm:left-0">
        <Image
          src={leftShape?.url}
          alt={leftShape?.alt}
          className="object-bottom object-cover lg:object-contain"
          fill
        />
      </div>
      <div className="wrapper flex flex-col items-center gap-16 sm:px-10 lg:px-[165px]">
        <h2 className="title-h2 text-white">{title}</h2>
        <div className="flex flex-col sm:flex-row gap-12 items-center justify-between w-full">
          {logos.map((logo, index) => (
            <div key={index} className="relative">
              <img src={logo.logo.url} alt={logo.logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}