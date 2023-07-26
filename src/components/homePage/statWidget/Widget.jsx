import React from 'react'
import { Container, RowContainer, BorderBox, SmallText } from './Widget.style'
import CreateWidget from './CreateWidget'

const data = [
    {
        counter: 100,
        title: 'Doctors'
    },
    {
        counter: 50,
        title: 'Clinics'
    },
    {
        counter: 100,
        title: 'Users'
    },
]

const Widget = () => {
  return (
    <Container>
        <RowContainer>
            <SmallText>Trusted by</SmallText>
        </RowContainer>
        <RowContainer justifyContent='space-around'>
            {
                data.map((data, index) => {
                    return (
                            <CreateWidget data={data} key={index} />
                    )
                }
            )}
        </RowContainer>
    </Container>
  )
}

export default Widget