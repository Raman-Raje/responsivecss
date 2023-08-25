import React from "react";
// import NavBar from "../../../components/common/navBar/NavBar";
// import Intro from "../../../components/homePage/intro/Intro";

import { TopContainer, BottomContainer } from "./FirstPage.style";
import Carousel from "../../../components/homePage/Carousel/Carousel";

const FirstPage = () => {
  return (
    <>
      <BottomContainer>
        {/* <Intro /> */}
        <Carousel />
      </BottomContainer>
    </>
  );
};

export default FirstPage;
