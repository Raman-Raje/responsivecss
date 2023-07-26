import React from 'react'
import { useField, ErrorMessage } from "formik";
import { RowContainer, StyledTextField, ErrorContainer, ColumnContainer } from './FormikTextField.style'; // Make sure to import it from the correct location

const FormikTextField = ({ ...props }) => {
    const [field, meta] = useField(props);

    return (
        <ColumnContainer style={{ margin: '2px 10px' }}>
            <RowContainer>
                <StyledTextField
                    {...field}
                    {...props}
                    size="small"
                    variant="outlined"
                />
            </RowContainer>
            <RowContainer>
                <ErrorMessage name={field.name} component={ErrorContainer} />
            </RowContainer>
        </ColumnContainer>
    );
};

export default FormikTextField;
