import React from "react";
import { Container, RowContainer } from "./Widget.style";
import CreateWidget from "./CreateWidget";
import StatsData from "../../../_mock/StatsData";
import "./Widget.css";
const Widget = () => {
  return (
    <Container
      className="mb-4 stats-main-container"
      style={{ backgroundColor: "transparent" }}
    >
      <center className="mb-4">
        <h1 className="text-3xl font-bold pt-3">TRUSTED BY</h1>
        <h3 className="text-xl">
          Our Product is trusted by top Product Companies
        </h3>
      </center>
      <RowContainer className="stats-container" justifyContent="space-around">
        {StatsData &&
          StatsData.map((data, index) => {
            return <CreateWidget data={data} key={index} />;
          })}
      </RowContainer>
    </Container>
  );
};

export default Widget;
