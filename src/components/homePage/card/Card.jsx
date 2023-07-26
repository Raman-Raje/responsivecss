import React from 'react'
import {
    CardContainer,
    Top,
    Bottom,
    BorderBox,
    CardTitle,
    CardText
} from './FeatureCard.style'


const Card = ({ feature }) => {

    return (
        <BorderBox>
            <CardContainer>
                <Top>
                    <CardTitle>{feature.title}</CardTitle>
                </Top>
                <Bottom>
                    <ul>
                        {
                            feature.list.map((list, index) => {
                                return (
                                    
                                        <li key={index}><CardText>{list}</CardText></li>
                                    
                                )
                            })
                        }
                    </ul>
                </Bottom>
            </CardContainer>
        </BorderBox>
    )
}

export default Card