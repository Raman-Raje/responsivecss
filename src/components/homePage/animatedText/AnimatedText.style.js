import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  8%, 25% {
    opacity: 1;
  }
  33%, 100% {
    opacity: 0;
  }
`;

const Word = styled.span`
  position: absolute;
  left: 5.1em; /* Adjust this value to position the animated words after 'is' */
  animation: ${fadeInOut} 12s linear infinite;
  opacity: 0;
`;

export const Simple = styled(Word)`
  animation-delay: 0s;
`;

export const Secure = styled(Word)`
  animation-delay: 4s;
`;

export const Fast = styled(Word)`
  animation-delay: 8s;
`;

export const Container = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primary};

`;

export const SentenceContainer = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 5rem;
  font-size: 2.5rem;
  font-weight: ${props => props.theme.typography.fontWeight.bold};
  color: ${props => props.theme.colors.text.white};
`;