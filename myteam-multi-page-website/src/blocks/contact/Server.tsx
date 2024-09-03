import React from "react";
import Image from "next/image";
import { FormBlock } from "./Form/form";
import { Form } from "@payloadcms/plugin-form-builder/types";

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
  form: Form;
}

export default async function BuildBlockServer({
  title,
  subtitle,
  elements,
  form,
}: BuildBlockServerProps) {
  return (
    <section className="bg-primary-midnight-green py-20 sm:py-24 lg:py-28 relative min-h-[calc(100vh-195px)] overflow-clip">
      <div className="w-[100px] h-[200px] absolute top-24 left-0 hidden sm:block">
        <Image
          src="/left-shape-contact.svg"
          alt="Shape left contact"
          className="object-contain"
          fill
          loading="eager"
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
        <Image
          src="/right-shape-content.svg"
          alt="Shape right content"
          className="object-contain"
          fill
          loading="eager"
        />
      </div>
    </section>
  );
}
