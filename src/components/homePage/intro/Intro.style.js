import styled from "styled-components"

export const Container = styled.div`
    width: ${props => props.theme.widths.full};
    height: ${props => props.theme.heights.full};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const RowContainer = styled.div`
    width: ${props => props.theme.widths.full};
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const IntroContainer = styled.div`
    width: ${props => props.theme.widths.full};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px; // 1rem
`;

export const TextContainer = styled.div`
    width: ${props => props.theme.widths.full};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem; // 32px

`;

export const Title = styled.h1`
    font-size: 4rem;
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.text.primary};
    margin-bottom: 0rem;
    margin-top: 0rem;
`;

export const SubTitle = styled.h4`
    font-size: 1.5rem;
    font-weight: ${props => props.theme.typography.fontWeight.medium};
    color: ${props => props.theme.colors.text.primary};
    margin-top: 0rem;
    margin-bottom: 0rem;
`;

export const InfomrationContainer = styled.div`
    width: ${props => props.theme.widths.full};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem; // 16px
`;

export const ButtonContainer = styled.button`
    color: ${props => props.theme.colors.text.white};
    border: 1px black;
    border-radius: 5px;
    background-color: ${props => props.theme.colors.primary};
    padding:10px 20px;
    font-size: ${props => props.theme.typography.fontSize.sm}; // 14px
    margin: 10px 10px;
    cursor: pointer;
`

export const ButtonText = styled.span`
    font-size: ${props => props.theme.typography.fontSize.sm}; // 14px
    `;