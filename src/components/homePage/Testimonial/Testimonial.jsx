import React, { useState } from "react";
import TestimonialData from "../../../_mock/TestimonialData";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import "./Testimonial.css";
const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = TestimonialData[index];
  const checkNumber = (number) => {
    if (number > TestimonialData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return TestimonialData.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const minIndex = 0;
  const maxIndex = TestimonialData.length - 1;

  const getRandomPerson = () => {
    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    };

    let randomIndex = getRandomIntInclusive(minIndex, maxIndex);
    if (randomIndex === index) {
      randomIndex = index + 1;
    }
    setIndex(checkNumber(randomIndex));
  };

  return (
    <div className="mx-auto my-12 testimonial-section" style={{ width: "80%" }}>
      <div>
        <h1 className="text-4xl font-bold my-8 mx-auto w-full text-center ">
          What Our Client Says?
        </h1>
        <article className="review" style={{ width: "50%", margin: "auto" }}>
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="button-container">
            <button className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Testimonial;
