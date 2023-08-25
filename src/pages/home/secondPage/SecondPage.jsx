import React from "react";
import {
  TopContainer,
  MiddleContainer,
  BottomContainer,
} from "./SecondPage.style";

import FeatureCard from "../../../components/homePage/Card/FeatureCard";
import Widget from "../../../components/homePage/StatWidget/Widget";

const SecondPage = () => {
  return (
    <>
      <TopContainer>
        <FeatureCard />
      </TopContainer>
      <BottomContainer>
        <Widget />
      </BottomContainer>
    </>
  );
};

export default SecondPage;
