import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Logo, ButtonContainer } from './NavBar.style'

const NavBar = ({ buttonName }) => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    switch (buttonName) {
      case 'Sign In':
        navigate('/signin')
        break;
      case 'Sign Up':
      case 'Get Started':
        navigate('/signup')
        break;
      default:
        break;
    }
  }

  return (
    <Container >
      <Logo onClick={() => navigate('/')} >
        Medyzer
      </Logo>
      <ButtonContainer onClick={handleButtonClick}>
        {buttonName}
      </ButtonContainer>
    </Container>
  )
}

export default NavBar