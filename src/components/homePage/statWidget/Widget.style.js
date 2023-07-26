import styled from "styled-components"

export const Container = styled.div`
    width: ${props => props.theme.widths.full};
    height: ${props => props.theme.heights.full};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const RowContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent ? props.justifyContent : "center"};
    margin: 1rem;
`;

export const ComponentContainer = styled.div`
    width: ${props => props.theme.widths.full};
    height: ${props => props.theme.heights.full};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
`;

export const Title = styled.h1`
    font-size: 4rem;
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0rem;
    margin-top: 0rem;
`;

export const SubTitle = styled.h4`
    font-size: 1.5rem;
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.primary};
    margin-top: 0rem;
    margin-bottom: 0rem;
`;

export const SmallText = styled.span`
    font-size: 1.2rem;
    font-weight: ${props => props.theme.typography.fontWeight.medium};
    color: ${props => props.theme.colors.text.primary};
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-bottom: 0.5px solid ${props => props.theme.colors.text.primary};
`;

export const BorderBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.background.paper};
    margin: 10px;
    padding: 10px 10px;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
`;
