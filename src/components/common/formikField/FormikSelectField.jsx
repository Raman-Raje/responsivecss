import React from 'react'
import { Field, useField, ErrorMessage } from "formik";
import { RowContainer, ErrorContainer, Select, ColumnContainer, RequiredText, HelperText, LabelText } from './FormikTextField.style'; // Make sure to import it from the correct location

const FormikField = ({ label = '', helperText = '', required = false, ...props }) => {
    const [field, meta] = useField(props);


    return (
        <ColumnContainer>
            <RowContainer>
                <LabelText>{label}{required && <RequiredText>*</RequiredText>}</LabelText>
            </RowContainer>
            <RowContainer>
                <Field
                    as={Select}
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