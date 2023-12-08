import React from "react";

const Attribute = ({ attribute, score, icon }) => {
  return (
    <div className={`attribute attribute--${attribute}`}>
      <div className="attribute__left">
        <img src={icon} alt={attribute} />
        <h3 className={`attribute__title attribute__title--${attribute}`}>
          {attribute}
        </h3>
      </div>
      <div className="attribute__right">
        <p>
          {score} <span>/ 100</span>
        </p>
      </div>
    </div>
  );
};

export default Attribute;
