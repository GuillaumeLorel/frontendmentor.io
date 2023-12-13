import React from "react";
import iconAge from "../assets/images/icon-age.svg";
import iconGender from "../assets/images/icon-gender.svg";
import iconMuscle from "../assets/images/icon-muscle.svg";
import iconPregnancy from "../assets/images/icon-pregnancy.svg";
import iconRace from "../assets/images/icon-race.svg";

const Limitations = () => {
  return (
    <section className="container mt-24 mb-32 xl:flex relative">
      <div
        className={`xl:absolute xl:max-w-[560px] right-curve after:content-right-curve relative`}>
        <h2 className="heading-l text-gunmetal mb-9 text-center xl:text-left">
          Limitations of BMI
        </h2>
        <p className="text-center xl:text-left">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
      </div>
      <div className="grid gap-4 mt-14 sm:grid-cols-4 xl:grid-cols-8 xl:ml-56 xl:mt-0">
        <div className="p-6 rounded-2xl shadow bg-white sm:col-span-2 xl:row-start-1 xl:col-start-5 xl:col-end-8">
          <header className="flex items-center gap-4 mb-4">
            <img src={iconGender} alt="" />
            <h3 className="heading-s text-gunmetal">Gender</h3>
          </header>
          <p>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow bg-white sm:col-span-2 xl:row-start-2 xl:col-start-3 xl:col-end-6">
          <header className="flex items-center gap-4 mb-4">
            <img src={iconAge} alt="" />
            <h3 className="heading-s text-gunmetal">Age</h3>
          </header>
          <p>
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow bg-white sm:col-span-2 xl:row-start-2 xl:col-start-6 xl:col-end-9">
          <header className="flex items-center gap-4 mb-4">
            <img src={iconMuscle} alt="" />
            <h3 className="heading-s text-gunmetal">Muscle</h3>
          </header>
          <p>
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn't differentiate muscle from fat.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow bg-white sm:col-span-2 xl:row-start-3 xl:col-start-1 xl:col-end-4">
          <header className="flex items-center gap-4 mb-4">
            <img src={iconPregnancy} alt="" />
            <h3 className="heading-s text-gunmetal">Pregnancy</h3>
          </header>
          <p>
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        <div className="p-6 rounded-2xl shadow bg-white sm:col-start-2 sm:col-end-4 xl:row-start-3 xl:col-start-4 xl:col-end-7">
          <header className="flex items-center gap-4 mb-4">
            <img src={iconRace} alt="" />
            <h3 className="heading-s text-gunmetal">Race</h3>
          </header>
          <p>
            Certain health concerns may affect individuals of some Black and
            Asian origins at lower BMIs than others. To learn more, it is
            advised to discuss this with your GP or practice nurse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Limitations;
