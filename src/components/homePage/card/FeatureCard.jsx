import React from "react";
import Card from "./Card";
import FeatureData from "../../../_mock/FeatureData";
import "./Feature.css";
const FeatureCard = () => {
  return (
    <div>
      {FeatureData &&
        FeatureData.map((feature, index) => {
          return <Card key={index} feature={feature} />;
        })}
    </div>
  );
};

export default FeatureCard;
