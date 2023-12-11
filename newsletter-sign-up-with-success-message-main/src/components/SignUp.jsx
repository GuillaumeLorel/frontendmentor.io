import React from "react";
import { useState } from "react";
import iconList from "../assets/images/icon-list.svg";
import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";

const SignUp = ({ email, setEmail, setSuccess }) => {
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(email.toLowerCase()));
    return re.test(email.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    if (!email) {
      setEmailError("Email address is required");
      console.log(emailError);
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      console.log(emailError);
      return;
    }
    setEmailError("");
    console.log(emailError);
    setSuccess(true);
  };
  return (
    <div className="grid grid-rows-mobile sm:grid-rows-1 sm:grid-cols-desktop sm:h-fit h-screen w-full sm:max-w-[930px] sm:bg-white sm:rounded-[36px]">
      <div className="sm:hidden w-full">
        <img
          src={illustrationMobile}
          alt="illustration-sign-up-mobile"
          className="w-full"
        />
      </div>
      <div className="hidden sm:col-start-2 sm:p-6 sm:pl-0 sm:flex sm:justify-end">
        <img
          src={illustrationDesktop}
          alt="illustration-sign-up-mobile"
          className="sm:max-w-[400px] w-full"
        />
      </div>
      <div className="sm:col-start-1 sm:row-start-1 bg-white sm:rounded-[36px] px-6 py-10 sm:flex sm:flex-col sm:justify-center sm:p-14">
        <h2 className="text-dark-navy text-[40px] sm:text-[56px] font-bold leading-normal">
          Stay updated!
        </h2>
        <p className="text-base font-normal text-dark-navy my-6 sm:mt-2">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="flex flex-col gap-3">
          <li className="flex gap-4 items-start">
            <img src={iconList} alt="icon-list" className="inline" />
            <span className="text-base font-normal text-dark-navy">
              Product discovery and building what matters
            </span>
          </li>
          <li className="flex gap-4 items-start">
            <img src={iconList} alt="icon-list" className="inline" />
            <span className="text-base font-normal text-dark-navy">
              Measuring to ensure updates are a success
            </span>
          </li>
          <li className="flex gap-4 items-start">
            <img src={iconList} alt="icon-list" className="inline" />
            <span className="text-base font-normal text-dark-navy">
              And much more!
            </span>
          </li>
        </ul>
        <form action="" className="mt-10" onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <label htmlFor="email" className="text-xs font-bold text-dark-navy">
              Email address
            </label>
            <span className="text-right text-xs font-bold text-vermillion">
              {emailError}
            </span>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@company.com"
            className={`w-full rounded-lg border border-opacity-25 px-4 py-3 mt-1 
            focus:outline-none focus:border-opacity-100 bg-opacity-15 ${
              emailError &&
              "border-vermillion border-opacity-100  text-vermillion placeholder:text-vermillion bg-vermillion "
            }}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-dark-navy rounded-lg px-4 py-4 mt-4 text-white font-bold text-base focus:outline-none focus:ring-2 focus:ring-vermillion  focus:ring-opacity-50 hover:bg-gradient hover:shadow-button transition-all">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
