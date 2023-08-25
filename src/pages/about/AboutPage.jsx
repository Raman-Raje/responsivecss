import NavBar from "../../components/common/NavBar/NavBar";
import AboutUs from "../../components/aboutPage/AboutUs/AboutUs";
import StyledFooter from "../../components/common/Footer/Footer";
import { TopContainer } from "../home/firstPage/FirstPage.style";
import Team from "../../components/aboutPage/Team/Team";
import "./AboutPage.css";
const AboutPage = () => {
  return (
    <>
      <TopContainer>
        <NavBar buttonName="Sign In" />
      </TopContainer>
      <div
        className="pt-16 about-title-container"
        style={{
          height: "40vh",
          backgroundImage:
            "linear-gradient(to bottom, #209e8a, #209e8a, #209e8a,#209e8a, #209e8a, #22a28d, #23a591, #25a994, #29b19b, #2db9a3, #30c1aa, #34c9b2)",
        }}
      >
        <div
          className="about-title"
          style={{
            width: "80%",
            margin: "auto",
            textAlign: "center",
            color: "white",
            fontWeight: "bolder",
          }}
        >
          <h2 className="about-text mt-20 mx-auto">
            Everyone believes the future of healthcare is digital
          </h2>
          <p className="about-sub-text text-2xl font-thin">
            We build solutions to make that future a reality
          </p>
        </div>
      </div>
      <div className="mt-16 mx-auto about-desc" style={{ width: "80%" }}>
        <AboutUs />
      </div>
      {/* <Team /> */}
      <StyledFooter />
    </>
  );
};

export default AboutPage;
