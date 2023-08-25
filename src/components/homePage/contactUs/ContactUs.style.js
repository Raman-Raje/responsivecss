import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => props.theme.widths.full};
  height: ${(props) => props.theme.heights.full};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
  color: ${(props) => props.theme.colors.text.primary};
  margin-bottom: 1rem;
  margin-top: 0rem;
  border-bottom: 0.5px solid ${(props) => props.theme.colors.text.primary};
`;

export const RowContainer = styled.div`
  width: ${(props) => props.theme.widths.full};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.button`
  color: ${(props) => props.theme.colors.text.white};
  border-radius: 5px;
  ${"" /* background-color: ${(props) => props.theme.colors.primary}; */}
  padding:10px 20px;
  font-size: 1rem;
  margin: 10px 10px;
  cursor: pointer;
  background: white;
  color: #17b67f;
  &:hover {
  }
`;

export const Input = styled.input`
  margin: 10px 10px;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 10px;
  background: transparent;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;

export const ErrorContainer = styled.div`
  font-size: 1rem; // 1rem = 16px
  color: ${(props) => props.theme.colors.error};
  margin-top: 0rem;
  margin-bottom: 0rem;
`;

export const TextArea = styled.textarea`
  margin: 10px 10px;
  width: ${(props) => (props.width ? props.width : "100%")};
  padding: 10px;
  border-radius: 5px;
`;
