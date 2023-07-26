import React from 'react';
import { Container, Wrapper, Title, Description } from './NotFound.style';

const NotFound = () => {
    return (
        <Container>
            <Wrapper>
                <Title>404 - Page Not Found</Title>
                <Description>The page you are looking for does not exist.</Description>
            </Wrapper>
        </Container>
    );
}

export default NotFound;
