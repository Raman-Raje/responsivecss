import React from 'react'
import { TopContainer, MiddleContainer, BottomContainer } from './SecondPage.style'

import AnimatedText from '../../../components/homePage/animatedText/AnimatedText'
import FeatureCard from '../../../components/homePage/card/FeatureCard'
import Widget from '../../../components/homePage/statWidget/Widget'

const SecondPage = () => {
    return (
        <>
            <TopContainer>
                <FeatureCard />
            </TopContainer>
            <MiddleContainer>
                <AnimatedText />
            </MiddleContainer>
            <BottomContainer>
                <Widget />
            </BottomContainer>
        </>
    )
}

export default SecondPage