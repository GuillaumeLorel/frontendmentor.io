import React from "react";
import iconEating from "../assets/images/icon-eating.svg";
import iconExercise from "../assets/images/icon-exercise.svg";
import iconSleep from "../assets/images/icon-sleep.svg";

const Tips = () => {
  return (
    <section className="gradient-tips relative bg-opacity-25 pt-16 pb-16">
      <div className="container grid grid-rows-3 gap-10 md:grid-cols-3 md:gap-8 md:grid-rows-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-10 md:flex-col md:items-start md:gap-0">
          <img src={iconEating} className="max-w-[64px]" />
          <div className="mt-8 sm:mt-0 md:mt-11">
            <h2 className="heading-m text-gunmetal mb-6">Healthy eating</h2>
            <p>
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-10 md:flex-col md:items-start md:gap-0">
          <img src={iconExercise} className="max-w-[64px]" />
          <div className="mt-8 sm:mt-0 md:mt-11">
            <h2 className="heading-m text-gunmetal mb-6">Regular exercise</h2>
            <p>
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-10 md:flex-col md:items-start md:gap-0">
          <img src={iconSleep} className="max-w-[64px]" />
          <div className="mt-8 sm:mt-0 md:mt-11">
            <h2 className="heading-m text-gunmetal mb-6">Adequate sleep</h2>
            <p>
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
