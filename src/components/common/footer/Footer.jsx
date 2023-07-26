import React from "react";
import { Container, Wrapper, Left, Right, TextLine, SocialMediaIcon, Title, RowContainer,SmallTextLine } from "./Footer.style";
import { FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <TextLine>Medyzer</TextLine>
                    <TextLine>Pune, India - 411003</TextLine>
                    <TextLine>Email: contact@medyzer.com</TextLine>
                    <SmallTextLine>Copyright 2022 Medyzer Organization. All rights reserved.</SmallTextLine>
                </Left>
                <Right>
                    <RowContainer>
                        <Title>Socila Media:-</Title>
                    </RowContainer>
                    <RowContainer>
                        <SocialMediaIcon href="#">
                            <FaTwitter />
                        </SocialMediaIcon>
                        <SocialMediaIcon href="#">
                            <FaLinkedin />
                        </SocialMediaIcon>
                        <SocialMediaIcon href="#">
                            <FaYoutube />
                        </SocialMediaIcon>
                    </RowContainer>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Footer