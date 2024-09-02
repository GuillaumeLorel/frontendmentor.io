import React from "react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";
import Image from "next/image";

interface TestimonialsBlockServerProps {
  title: string;
  subtitle: string;
  testimonials: {
    quote: string;
    name: string;
    position: string;
    image: {
      url: string;
      alt?: string;
    };
  }[];
  leftShape?: {
    url: string;
    alt?: string;
  };
  rightShape?: {
    url: string;
    alt?: string;
  };
}

export default async function TestimonialsBlockServer({
  title,
  subtitle,
  testimonials,
  leftShape,
  rightShape,
}: TestimonialsBlockServerProps) {
  return (
    <section className="bg-primary-midnight-green py-36 sm:py-28 lg:py-36 relative">
      <div className="absolute left-0 top-0 w-[147px] h-[100px]">
        <Image src={leftShape?.url} fill className="object-contain" alt="" />
      </div>
      <div className="wrapper flex flex-col items-center gap-12 lg:gap-14">
        <h2 className="title-h2 text-white text-center max-w-[930px]">
          {title}{" "}
          <span className="text-secondary-rapture-blue">{subtitle}</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-7">
          {testimonials.map(({ quote, name, position, image }) => (
            <article
              key={name}
              className="flex flex-col items-center gap-4 lg:gap-6 text-center"
            >
              <Image
                src="/icon-quote.svg"
                width={67}
                height={56}
                className="object-contain mb-[-45px]"
                alt=""
              />
              <blockquote className="text-center text-white base">
                {quote}
              </blockquote>
              <div className="flex flex-col items-center">
                <h3 className="text-secondary-rapture-blue base-lg">{name}</h3>
                <p className="text-white text-[13px] italic font-medium">
                  {position}
                </p>
              </div>
              <div className="w-16 h-16 relative outline outline-2 outline-white rounded-full">
                <Image src={image.url} fill className="object-contain" alt="" />
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="absolute right-0 bottom-0 w-[200px] h-[100px]">
        <Image src={rightShape?.url} fill className="object-contain" alt="" />
      </div>
    </section>
  );
}
