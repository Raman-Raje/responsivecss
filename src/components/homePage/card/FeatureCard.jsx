import React from 'react'
import {
  Container,
  RowContainer,
  CardContainer,
  Top,
  Bottom,
  BorderBox,
  Title
} from './FeatureCard.style'

import Card from './Card'


const Data = [
  {
    title: 'Appointment',
    list: [
      'Seamlessly manage  appointment scheduling',
      'Acces history of Patient for the clinic',
      'Customizable appointment durations and buffer times',
      'Calendar view for doctors and staff to manage appointments',
      
    ]
  },
  {
    title: 'Prescription',
    list: [
      'Customizable prescription templates',
      'Easily create and manage prescriptions',
      'Access to Drug database with over 500k drugs',
      'Send prescriptions to the patient via SMS or email',
    ]
  },
  {
    title: 'Dashboard',
    list: [
      'Stay ahead of your clinic with real-time analytics',
      'Visualize your clinic’s performance with graphs and charts',
      'Compare doctor and staff performance over time',
      'Access to patient demographics and trends'
    ]
  }
]

const FeatureCard = () => {
  return (
    <Container>
      <RowContainer>
        <Title>Silient Features:-</Title>
      </RowContainer>
      <RowContainer>

        {
          Data.map((feature, index) => {
            return (
              <Card key={index} feature={feature} />
            )
          })
        }
      </RowContainer>
    </Container>
  )
}

export default FeatureCard