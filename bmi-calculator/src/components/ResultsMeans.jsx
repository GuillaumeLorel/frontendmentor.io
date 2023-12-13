import React from "react";
import manEating from "../assets/images/image-man-eating.webp";

const ResultsMeans = () => {
  return (
    <section className="container mb-18 mt-18 xl:mt-10 xl:mb-24 flex flex-col px-[0!important] md:px-[initial!important] md:flex-row md:gap-12 lg:items-end lg:gap-16">
      <img
        src={manEating}
        alt="Man eating"
        className="md:max-w-[435px] md:object-contain md:-ml-28 lg:ml-0 xl:max-w-[560px]"
      />
      <div className="mb-10 mt-12 px-6 left-curve after:content-left-curve relative">
        <h1 className="heading-l text-gunmetal mb-9">
          What your BMI result means
        </h1>
        <p>
          A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
          Maintaining a healthy weight may lower your chances of experiencing
          health issues later on, such as obesity and type 2 diabetes. Aim for a
          nutritious diet with reduced fat and sugar content, incorporating
          ample fruits and vegetables. Additionally, strive for regular physical
          activity, ideally about 30 minutes daily for five days a week.
        </p>
      </div>
    </section>
  );
};

export default ResultsMeans;
