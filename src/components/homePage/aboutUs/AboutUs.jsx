import React from 'react'
import { Container, Paragraph, Title } from './AboutUs.style'

const AboutUs = () => {
    return (
        <Container>
                <Title>About Us</Title>
                <Paragraph>
                    Experience the future of healthcare with the Medyzer. Where innovation and security come together to shape the future.
                </Paragraph>
                <Paragraph>
                    With blockchain, your health records are secure, accessible, and easily shareable with doctors and other healthcare providers. Say goodbye to lost or stolen files, and hello to seamless record-keeping.
                    For any suggestions and queries please reach out to us by email.
                </Paragraph>
                <Paragraph style={{ marginTop: '1rem', fontWeight: 'bold' }} >
                    We're working hard to bring you something amazing. Stay tuned!
                </Paragraph>
        </Container>
    )
}

export default AboutUs