import React from "react";
import Accordion from "./FAQsUtil";
import "./FAQs.css";
import FAQsData from "../../../_mock/FAQsData";
export default function FAQs() {
  return (
    <div
      style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
      className="my-16 py-8 faq"
    >
      <h1 className="text-4xl font-bold pb-3">Frequently Asked Questions</h1>
      <h2 className="text-xl mb-5">
        Quick Answers to questions you may have. Still have some questions,
        reach to Us -{" "}
        <a href="#" style={{ textDecoration: "underline" }}>
          Contact
        </a>
      </h2>
      <div>
        {FAQsData &&
          FAQsData.map((FAQ, index) => {
            return <Accordion key={index} title={FAQ.ques} content={FAQ.ans} />;
          })}
      </div>
    </div>
  );
}
