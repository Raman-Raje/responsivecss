import styled from "styled-components";
import { TextField, withStyles } from "@material-ui/core";

export const StyledTextField = withStyles({
  root: {
    width: "100%",
    "@media only screen and (max-width: 480px)": {
      padding: "5px",
    },
    "& .MuiInputBase-root": {
      fontFamily: "Arial",
      fontSize: "13px",
      lineHeight: "1.5",
      width: "100%",
    },
    "& .MuiInputBase-root textarea": {
      // Add this line to target the textarea directly
      height: "100px", // Set your desired height
    },
  },
})(TextField);

const BaseContainer = styled.div`
  width: ${(props) => props.theme.widths.full};
  display: flex;
  justify-content: flex-start;
  text-overflow: ellipsis; // If the text is too long, it will be truncated and end with an ellipsis (...).
  align-items: center;
  margin-top: 0rem;
  margin-bottom: 0rem;
`;

export const ErrorContainer = styled(BaseContainer)`
  font-size: 1rem; // 1rem = 16px
  color: yellow;
  margin-top: 0.25rem;
`;

export const LabelText = styled(BaseContainer)`
  font-size: 1rem; // 1rem = 16px
  color: ${(props) => props.theme.colors.text.white};
  margin-bottom: 0.25rem;
`;

export const RequiredText = styled.span`
  color: ${(props) => props.theme.colors.error};
`;

export const HelperText = styled(BaseContainer)`
  font-size: 0.825rem; // 8px
  color: ${(props) => props.theme.colors.text.secondary};
  margin-top: 0.125rem;
`;

export const RowContainer = styled.div`
  width: ${(props) => props.theme.widths.full};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ColumnContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 20px;
`;

export const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 10px;
  background-color: transparent;
  color: white;
  border: 2px solid white;
  border-radius: 10px;
  &::placeholder {
    color: white;
  }
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;

export const Select = styled.select`
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 10px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;

export const TextArea = styled.textarea`
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 10px;
  color: white;
  border: 2px solid white;
  background-color: transparent;
  border-radius: 10px;
  resize: none; // The resize property controls if and how an element can be resized by the user by clicking and dragging the bottom right corner of the element.
  &::placeholder {
    color: white;
  }
  &:hover {
    border: 2px solid white !important;
  }
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;

export const Wrapper = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  display: flex;
  align-items: center;
  flex-direction: column;
`;
