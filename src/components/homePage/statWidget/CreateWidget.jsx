import React from 'react'
import { Container, RowContainer, ComponentContainer, Title, SubTitle } from './Widget.style'

const CreateWidget = ({ data }) => {
    return (
        <ComponentContainer>
            <Title>{data.counter + '+'}</Title>
            <SubTitle>{data.title}</SubTitle>
        </ComponentContainer>
    )
}

export default CreateWidget