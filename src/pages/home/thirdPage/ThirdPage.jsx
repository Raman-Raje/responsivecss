import React from 'react'
import { TopContainer, BottomContainer, Wrapper, Left, Right, BorderBox } from './ThirdPage.style'
import AboutUs from '../../../components/homePage/aboutUs/AboutUs';
import ContactUs from '../../../components/homePage/contactUs/ContactUs';
import Footer from '../../../components/common/footer/Footer';

const ThirdPage = () => {
  return (
    <>
      <TopContainer>
        <Wrapper >
          <Left>
            <AboutUs />
          </Left>
          <Right>
            <BorderBox>
              <ContactUs />
            </BorderBox>
          </Right>
        </Wrapper>
      </TopContainer>
      <BottomContainer>
        <Footer />
      </BottomContainer>
    </>

  )
}

export default ThirdPage