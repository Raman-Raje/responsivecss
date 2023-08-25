import React from "react";
import { RowContainer, ButtonContainer } from "./ContactUs.style";
import { Formik, Form } from "formik";
import ContactUsValidation from "../../../validation/contactUsValidation";
import FormikField from "../../common/FormikField/FormikField";
import FormikTextAreaField from "../../common/FormikField/FormikTextAreaField";
import { Mail, Phone, Place } from "@mui/icons-material";
import "./ContactUs.css";
const initailValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactUs = () => {
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);

    // TODO:- handle the contact us form

    setSubmitting(false);
    resetForm();
  };

  return (
    <div
      className="flex bg-container"
      style={{
        width: "80%",
        margin: "2% auto",
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        webkitBackdropFilter: "blur( 4px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        backgroundImage:
          "https://img.freepik.com/free-photo/vintage-world-map-background-with-compass-hand-placing-red-hearts_23-2147607796.jpg?w=1060&t=st=1692861451~exp=1692862051~hmac=ca334dcb36b7a65b2a16cd7d8619fb279fedfb312e5836d93fcb7d37a27db650",
      }}
    >
      <div className="px-8 py-4 contact-form">
        <h1 style={{ color: "#178066" }} className="text-4xl font-bold">
          Get In Touch
        </h1>
        <p>We're open to any suggestion or just to have a chat.</p>

        <div className="flex">
          <Place className="mr-2 social-icons" />
          <p style={{ color: "#183d00" }}>
            <b>Address:</b>
            <br />
            Near Banglore Road, Pune, Maharastra
            <br />
            Pune, India - 411003
          </p>
        </div>
        <div className="flex">
          <Mail className="mr-2 social-icons" />
          <p>
            <b>Email:</b>
            <br /> contact@medyzer.com
          </p>
        </div>
        <div className="flex">
          <Phone className="mr-2 social-icons" />
          <p>
            <b>Contact:</b>
            <br /> +122 5548 5686
          </p>
        </div>
      </div>
      <div
        className="real-contact-form"
        style={{
          width: "50%",
          padding: "10px 15px",
          borderRadius: "0 10px 10px 0",
          background: "#17B67F",
        }}
      >
        <Formik
          initialValues={initailValues}
          validationSchema={ContactUsValidation}
          onSubmit={onSubmit}
        >
          <Form style={{ overflow: "hidden" }}>
            <FormikField
              name="name"
              type="text"
              label="Name"
              placeholder="Enter your name"
            />
            <FormikField
              name="email"
              type="email"
              label="Email"
              placeholder="Enter your email"
            />
            <FormikField
              name="subject"
              type="text"
              label="Subject"
              placeholder="Enter the subject"
            />
            <FormikTextAreaField
              name="message"
              type="text"
              label="Message"
              placeholder="Enter your message"
            />
            <RowContainer
              style={{
                alignItems: "self-start",
                justifyContent: "left",
                padding: "0 10px",
              }}
            >
              <ButtonContainer className="px-3 py-1 fill-btn" type="submit">
                Send Message
              </ButtonContainer>
            </RowContainer>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactUs;
