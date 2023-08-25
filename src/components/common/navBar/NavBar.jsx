import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Logo, ButtonContainer } from "./NavBar.style";
import "./NavBar.css";
const NavBar = ({ buttonName }) => {
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);

  const handleButtonClick = () => {
    switch (buttonName) {
      case "Sign In":
        navigate("/signin");
        break;
      case "Sign Up":
      case "Get Started":
        navigate("/signup");
        break;
      default:
        break;
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      className={`navbar ${scrolling ? "scrolled" : ""}`}
      style={{ padding: "0 10%" }}
    >
      <Logo
        className="logo"
        style={{ textAlign: "left", color: scrolling ? "#000" : "#fff" }}
        onClick={() => navigate("/")}
      >
        Medyzer
      </Logo>
      <div style={{ margin: 0, padding: 0 }}>
        <a
          onClick={() => navigate("/about")}
          className="font-bold mr-8 about-link"
          style={{
            color: scrolling ? "green" : "white",
            cursor: "pointer",
          }}
        >
          About Us
        </a>
        <ButtonContainer className="fill-btn" onClick={handleButtonClick}>
          {buttonName}
        </ButtonContainer>
      </div>
    </Container>
  );
};

export default NavBar;
