import React from "react";
import Image from "next/image";
import { FormBlock } from "./Form/form";

interface BuildBlockServerProps {
  title: string;
  subtitle: string;
  elements: {
    image: {
      url: string;
      alt?: string;
    };
    elementTitle: string;
  }[];
  form: {
    title: string;
    description: string;
    fields: {
      name: string;
      label: string;
      type: string;
      required: boolean;
    }[];
  };
  leftShape?: {
    url: string;
    alt?: string;
  };
  rightShape?: {
    url: string;
    alt?: string;
  };
}

export default function BuildBlockServer({
  title,
  subtitle,
  elements,
  form,
  leftShape,
  rightShape,
}: BuildBlockServerProps) {
  return (
    <section className="bg-primary-midnight-green py-20 sm:py-24 lg:py-28 relative min-h-[calc(100vh-195px)] overflow-clip">
      <div className="w-[100px] h-[200px] absolute top-24 left-0 hidden sm:block">
        <Image
          src={leftShape?.url}
          alt={leftShape?.alt}
          className="object-contain"
          fill
        />
      </div>
      <div className="wrapper flex flex-col lg:flex-row gap-16 lg:gap-6">
        <div className="flex flex-col flex-1 items-center lg:items-start gap-4 sm:gap-6 lg:gap-8">
          <h1 className="title-h1-small text-white">{title}</h1>
          <h2 className="text-[32px] font-bold text-primary-light-coral">
            {subtitle}
          </h2>
          <div className="flex flex-col gap-2 self-start mt-6 sm:mt-0">
            {elements.map((element, index) => {
              const { image, elementTitle } = element;
              return (
                <div key={index} className="flex items-center gap-6">
                  <div className="min-w-[72px] h-[72px] relative">
                    <Image
                      src={image.url}
                      alt={elementTitle}
                      className="object-contain"
                      fill
                    />
                  </div>
                  <h3 className="title-h3 text-white">{elementTitle}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1">
          <FormBlock form={form} />
        </div>
      </div>
      <div className="w-[80px] h-[200px] absolute bottom-[-100px] sm:bottom-0 right-0">
        {rightShape && (
          <Image
            src={rightShape.url}
            alt={rightShape.alt ?? "default alt text"}
            className="object-contain"
            fill
          />
        )}
      </div>
    </section>
  );
}
