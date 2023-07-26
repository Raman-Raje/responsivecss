import React from 'react'
import { Element } from "react-scroll";
import { Container } from './HomePage.style'

import FirstPage from './firstPage/FirstPage'
import SecondPage from './secondPage/SecondPage'
import ThirdPage from './thirdPage/ThirdPage'

const HomePage = () => {

    return (
        <>
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
            <Element name="thirdPage">
                <Container>
                    <ThirdPage />
                </Container>
            </Element>
        </>

    )
}

export default HomePage;