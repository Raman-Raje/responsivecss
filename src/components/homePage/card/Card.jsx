import React from "react";
import CheckMark from "./../../../assets/checkMark.png";
import { lightTheme } from "../../../config/theme";
const Card = ({ feature }) => {
  return (
    <div className="flex feature-card">
      <div className="feature-card-img" style={{ width: "40%" }}>
        <img
          className="w-full"
          src={feature && feature.url && feature.url}
          alt="appointment"
        />
      </div>
      <div className="feature-card-desc my-auto mx-0 p-5">
        <h2
          style={{ color: lightTheme.colors.darkLogo }}
          className="font-bold pb-4"
        >
          {feature && feature.title && feature.title}
        </h2>
        <ul className="p-0">
          {feature &&
            feature.list &&
            feature.list.map((list, index) => {
              return (
                <li className="list-none flex" key={index}>
                  <img
                    className="w-5 h-5 mr-2"
                    src={CheckMark && CheckMark}
                    alt="✅"
                  />
                  <p>{list && list}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
