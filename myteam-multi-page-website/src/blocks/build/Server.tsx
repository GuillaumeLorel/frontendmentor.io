import React from "react";
import Image from "next/image";

interface BuildBlockServerProps {
  title: string;
  elements: {
    image: {
      url: string;
    };
    elementTitle: string;
    elementText: string;
  }[];
}

export default async function BuildBlockServer({
  title,
  elements,
}: BuildBlockServerProps) {
  return (
    <section className="bg-secondary-sacramento-state-green py-16 sm:py-24 lg:py-36 relative">
      <div className="wrapper flex flex-col lg:flex-row gap-16 lg:gap-32">
        <div className="flex flex-col justify-start gap-8 lg:gap-14 flex-[45%]">
          <div className="w-[50px] h-1 bg-primary-light-coral"></div>
          <h2 className="title-h2 text-white pr-28 lg:pr-0">{title}</h2>
        </div>
        <div className="flex-[55%] flex flex-col gap-8">
          {elements.map((element, index) => {
            const { image, elementTitle, elementText } = element;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6"
              >
                <div className="min-w-[72px] h-[72px] relative">
                  <Image
                    src={image.url}
                    alt={elementTitle}
                    className="object-contain"
                    fill
                  />
                </div>
                <div className="flex flex-col gap-2 lg:gap-4 text-center sm:text-left">
                  <h3 className="title-h3 text-primary-light-coral">
                    {elementTitle}
                  </h3>
                  <p className="base opacity-80 text-white">{elementText}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[100px] h-[244px] absolute top-0 bottom-auto lg:top-auto lg:bottom-0 right-0">
        <Image
          src="/shape-build-section.svg"
          alt="Shape build section"
          className="object-contain"
          fill
        />
      </div>
    </section>
  );
}
