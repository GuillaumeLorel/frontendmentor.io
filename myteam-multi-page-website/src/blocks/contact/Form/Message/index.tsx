import React from "react";

interface MessageField {
  message: string;
}

export const Message: React.FC<MessageField> = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};
