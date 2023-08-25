import React from "react";
import { ComponentContainer } from "./Widget.style";
import CountUp, { useCountUp } from "react-countup";

const CreateWidget = ({ data }) => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 3000,
  });

  return (
    <ComponentContainer>
      <div
        className="stats-img-container"
        style={{
          width: "25%",
          height: "100px",
          padding: "10px",
          marginBottom: "30px",
          borderRadius: "10px",
          backgroundColor: "#62D2A2",
        }}
      >
        <img
          style={{
            overflow: "hidden",
            width: "100%",
            backgroundSize: "cover",
          }}
          src={data && data.icon && data.icon}
          alt="icon"
        />
      </div>
      <h2 className="text-3xl font-semibold">
        <CountUp
          delay={2}
          start={0}
          end={data && data.counter && data.counter}
          enableScrollSpy
        />
        + {data && data.title && data.title}
      </h2>
      <p className="text-center">{data && data.desc && data.desc}</p>
    </ComponentContainer>
  );
};

export default CreateWidget;
