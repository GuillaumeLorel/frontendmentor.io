import React from "react";
import { TextField } from "@payloadcms/plugin-form-builder/types";
import { UseFormRegister, FieldValues, FieldErrorsImpl } from "react-hook-form";
import { Error } from "../Error";

export const Text: React.FC<
  TextField & {
    register: UseFormRegister<FieldValues & any>;
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any;
      }>
    >;
  }
> = ({ name, label, register, required: requiredFromProps, errors }) => {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder={label}
        id={name}
        {...register(name, { required: requiredFromProps })}
        className={`text-white placeholder:opacity-60 font-semibold text-base 
          bg-transparent border-b pl-[14px] pb-[17px] outline-none
          ${requiredFromProps && errors[name] ? "border-[#F67E7E] placeholder:text-[#F67E7E]" : "border-white placeholder:text-white"}
        `}
      />
      {requiredFromProps && errors[name] && <Error />}
    </div>
  );
};
