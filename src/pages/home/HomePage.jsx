import React from "react";
import { Element } from "react-scroll";
import { Container } from "./HomePage.style";
import { TopContainer } from "./firstPage/FirstPage.style";
import NavBar from "../../components/common/NavBar/NavBar";
import FirstPage from "./firstPage/FirstPage";
import SecondPage from "./secondPage/SecondPage";
import StyledFooter from "../../components/common/Footer/Footer";
import ContactPage from "./ContactPage/ContactPage";
import Testimonial from "../../components/homePage/Testimonial/Testimonial";
import FAQs from "../../components/homePage/FAQs/FAQs";
import BookAppointment from "../../components/homePage/BookAppointment/BookAppointment";
const HomePage = () => {
  return (
    <>
      <TopContainer>
        <NavBar buttonName="Sign In" />
      </TopContainer>
      <Element name="firstPage">
        <Container>
          <FirstPage />
        </Container>
      </Element>
      <Element name="secondPage">
        <Container>
          <SecondPage />
        </Container>
      </Element>
      <BookAppointment />
      <Testimonial />
      <FAQs />
      <ContactPage />
      <StyledFooter />
    </>
  );
};

export default HomePage;
