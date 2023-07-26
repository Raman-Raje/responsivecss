import React from 'react'
import { Link } from "react-scroll";
import { useNavigate } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Container, Title, IntroContainer, TextContainer, SubTitle, InfomrationContainer, ButtonContainer, RowContainer } from './Intro.style'

const Intro = () => {
    
    const navigate = useNavigate();

    return (
        <Container>
            <IntroContainer>
                <TextContainer>
                    <Title>
                        A Platform to Manage
                    </Title>
                    <Title style={{ color: "#3795BD" }}>
                        Your Clinic
                    </Title>
                    <Title>
                        Effortlessly
                    </Title>
                </TextContainer>
                <TextContainer>
                    <SubTitle>
                        Medyzer brings your clinic into the digital age.
                    </SubTitle>
                    <SubTitle>
                        Effortlessly manage Appointments, Patients, Doctors, and Staff all in one place.
                    </SubTitle>
                    <SubTitle>
                        Gain insights into your clinic's performance with integrated Dashboard.
                    </SubTitle>
                    <SubTitle style={{ fontWeight: "bold" }}>
                        Designed with love for the betterment of the healthcare.
                    </SubTitle>
                </TextContainer>
            </IntroContainer>

            <InfomrationContainer>
                <ButtonContainer onClick={() => navigate("/signup")}>Get Started</ButtonContainer>

                {/* navigate to youTube Channel onClick */}
                <ButtonContainer style={{ backgroundColor: "#212121" }}
                    onClick={() => window.open("#", "_blank")}
                >
                    <RowContainer>
                        <YouTubeIcon style={{ marginRight: "5px" }} />
                        Know More
                    </RowContainer>
                </ButtonContainer>

                <Link
                    to="thirdPage"
                    smooth={true}
                    duration={600}
                >
                    <ButtonContainer>
                        Contact Us
                    </ButtonContainer>
                </Link>
            </InfomrationContainer>
        </Container>
    )
}

export default Intro