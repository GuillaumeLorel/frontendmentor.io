import React from "react";
import iconSuccess from "../assets/images/icon-success.svg";

const SucessMessage = ({ email, setEmail, setSuccess }) => {
  const handleClick = () => {
    setSuccess(false);
    setEmail("");
  };
  return (
    <div className="bg-white w-full h-screen flex flex-col justify-center p-6 sm:max-w-[500px] sm:h-fit sm:rounded-[36px] sm:p-16 sm:pt-12">
      <div className="flex flex-col m-auto">
        <img
          src={iconSuccess}
          alt="icon-success"
          className=" max-w-[64px] mb-8"
        />
        <h2 className="text-dark-navy text-[40px] sm:text-[56px] font-bold leading-tight sm:leading-[56px] mb-5">
          Thanks for subscribing!
        </h2>
        <p>
          A confirmation email has been sent to {email}. Please open it and
          click the button inside to confirm your subscription
        </p>
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="w-full bg-dark-navy rounded-lg px-4 py-4 mt-4 text-white font-bold text-base focus:outline-none focus:ring-2 focus:ring-dark-navy focus:ring-opacity-50 hover:bg-gradient hover:shadow-button transition-all sm:mt-10">
        Dismiss message
      </button>
    </div>
  );
};

export default SucessMessage;
