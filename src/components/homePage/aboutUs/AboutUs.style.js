import styled from "styled-components"

export const Container = styled.div`
    width: ${props => props.theme.widths.full};
    height: ${props => props.theme.heights.full};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 1rem; // 1rem = 16px
`;

export const Paragraph = styled.span`
    font-size: 1.5rem;
    color: ${props => props.theme.colors.text.primary};
    align-self: flex-start;
`;

export const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    margin-bottom: 1rem;
    margin-top: 0rem;
    border-bottom: 0.5px solid #212121;
    align-self: flex-start;
    color: ${props => props.theme.colors.primary};
`;