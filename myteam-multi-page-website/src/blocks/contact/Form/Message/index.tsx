import React from "react";
import { MessageField } from "@payloadcms/plugin-form-builder/types";

export const Message: React.FC<MessageField> = ({ message }) => {
  console.log(message);
  return <div>{/* <p>{message}</p> */}</div>;
};
