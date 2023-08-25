import React from "react";
import { lightTheme } from "../../../config/theme";

const AboutUs = () => {
  return (
    <div className="py-6 my-6">
      <h1 className="font-bold mb-20" style={{ color: "rgb(69 81 75)" }}>
        About Us
      </h1>
      <p className="text-xl inline-block">
        Experience the future of healthcare with the{" "}
        <h3
          className="inline-block font-bold"
          style={{ color: lightTheme.colors.darkLogo }}
        >
          Medyzer.
        </h3>{" "}
        Where innovation and security come together to shape the future. Where
        innovation and security come together to shape the future.
      </p>
      <p className="text-xl inline-block">
        With blockchain, your health records are{" "}
        <h3
          className="inline-block font-bold"
          style={{ color: lightTheme.colors.darkLogo }}
        >
          secure, accessible, and easily shareable
        </h3>{" "}
        with doctors and other healthcare providers. Say goodbye to lost or
        stolen files, and hello to
        <h3
          className="inline-block font-bold"
          style={{ color: lightTheme.colors.darkLogo }}
        >
          {" "}
          &nbsp;seamless record-keeping.
        </h3>{" "}
        For any suggestions and queries please reach out to us by email.
      </p>
      <h2
        className="text-2xl font-bold mt-3"
        style={{ color: lightTheme.colors.darkLogo }}
      >
        We're working hard to bring you something amazing. Stay tuned!
      </h2>
    </div>
  );
};

export default AboutUs;
