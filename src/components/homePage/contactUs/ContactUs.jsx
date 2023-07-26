import React from 'react'
import { Container, Title, RowContainer, ButtonContainer } from './ContactUs.style'
import { Formik, Form, } from 'formik';
import ContactUsValidation from '../../../validation/contactUsValidation';
import FormikField from '../../common/formikField/FormikField';
import FormikTextAreaField from '../../common/formikField/FormikTextAreaField';

const initailValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
}

const ContactUs = () => {

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        console.log(values)

        // TODO:- handle the contact us form

        setSubmitting(false)
        resetForm()
    }

    return (
        <Container>
            <Title>Contact Us</Title>
            <Formik
                initialValues={initailValues}
                validationSchema={ContactUsValidation}
                onSubmit={onSubmit}
            >
                <Form>
                    <FormikField
                        name="name"
                        type="text"
                        label="Name"
                        placeholder="Enter your name"
                    />
                    < FormikField
                        name="email"
                        type="email"
                        label="Email"
                        placeholder="Enter your email"
                    />
                    < FormikField
                        name="subject"
                        type="text"
                        label="Subject"
                        placeholder="Enter the subject"
                    />
                    < FormikTextAreaField
                        name="message"
                        type="text"
                        label="Message"
                        placeholder="Enter your message"
                    />
                    <RowContainer>
                        <ButtonContainer type="submit" >Send</ButtonContainer>
                    </RowContainer>
                </Form>
            </Formik>
        </Container>
    )
}

export default ContactUs