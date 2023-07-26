import React from 'react'
import NavBar from '../../../components/common/navBar/NavBar'
import Intro from '../../../components/homePage/intro/Intro'

import { TopContainer, BottomContainer } from './FirstPage.style'

const FirstPage = () => {
    return (
        <>
            <TopContainer>
                <NavBar buttonName="Sign In" />
            </TopContainer>
            <BottomContainer>
                <Intro />
            </BottomContainer>
        </>
    )
}

export default FirstPage