import React from "react";
import logo from "../assets/images/logo.svg";
import Calculator from "./Calculator";

const Header = () => {
  return (
    <header className="py-8 px-6 gradient-header relative xl:pt-20">
      <div className="container">
        <img
          src={logo}
          alt=""
          className="max-w-[40px] m-auto xl:mr-auto xl:ml-0 xl:max-w-[64px]"
        />
        <div className="flex flex-col xl:flex-row xl:gap-40 xl:items-center xl:min-h-[600px]">
          <div className="xl:flex-1">
            <h1 className="heading-xl text-gunmetal text-center xl:text-left my-6 ">
              Body Mass Index Calculator
            </h1>
            <p className="text-center xl:text-left mb-12">
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>

          <Calculator className="xl:flex-1" />
        </div>
      </div>
    </header>
  );
};

export default Header;
