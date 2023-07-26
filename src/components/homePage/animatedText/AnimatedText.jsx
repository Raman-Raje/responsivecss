import React from 'react'
import { Container, SentenceContainer, Simple, Secure, Fast } from './AnimatedText.style'

const AnimatedText = () => {
    return (
        <Container>
            <SentenceContainer>
                    Medyzer is  {` `}
                    <Simple>Simple</Simple>
                    <Secure>Secure</Secure>
                    <Fast>Fast</Fast>
            </SentenceContainer>
        </Container>
    )
}

export default AnimatedText