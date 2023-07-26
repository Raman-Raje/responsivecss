import React from 'react'
import { Field, useField, ErrorMessage } from "formik";
import { RowContainer, ErrorContainer, TextArea, ColumnContainer, HelperText, LabelText } from './FormikTextField.style'; // Make sure to import it from the correct location

const FormikField = ({ label = '', helperText = '', ...props }) => {
    const [field, meta] = useField(props);


    return (
        <ColumnContainer>
            <RowContainer>
                <LabelText>{label}</LabelText>
            </RowContainer>
            <RowContainer>
                <Field
                    as={TextArea}
                    {...field}
                    {...props}
                />
            </RowContainer>
            <RowContainer>
                <HelperText>{helperText}</HelperText>
            </RowContainer>
            <RowContainer>
                <ErrorMessage name={field.name} component={ErrorContainer} />
            </RowContainer>
        </ColumnContainer>

    )
}

export default FormikField