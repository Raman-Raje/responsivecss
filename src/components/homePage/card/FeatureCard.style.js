import styled from "styled-components"

export const Container = styled.div`
    width: ${props => props.theme.widths.full};
    height: ${props => props.theme.heights.full};
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${props => props.theme.colors.primary};
`;

export const RowContainer = styled.div`
    width: ${props => props.theme.widths.full};
    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent ? props.justifyContent : "center"};
    margin: 1rem; // 16px
`;

export const CardContainer = styled.div`
    width: ${props => props.theme.widths.full};
    height: ${props => props.theme.heights.full};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Top = styled.div`
    width: ${props => props.theme.widths.full};
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 0.5px solid #212121;
`;

export const Bottom = styled.div`
    width: ${props => props.theme.widths.full};
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
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

export const Title = styled.span`
    font-size: 2.0rem;
    border-bottom: 0.5px solid #fff;
    color: ${props => props.theme.colors.text.white};
`;

export const CardTitle = styled.span`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.text.primary};
`;

export const CardText = styled.span`
    font-size: 1.2rem;
    color:  ${props => props.theme.colors.text.secondary};
`;