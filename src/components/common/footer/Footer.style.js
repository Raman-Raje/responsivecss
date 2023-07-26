import styled from 'styled-components'

export const Container = styled.div`
    width: ${props => props.theme.widths.full};
    height: ${props => props.theme.heights.full};
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.text.primary};
    color: ${props => props.theme.colors.text.white};
`;

export const Wrapper = styled.div`
    width: ${props => props.theme.widths.full};
    height: ${props => props.theme.heights.full};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Left = styled.div`
    width: 70%;
    height: ${props => props.theme.heights.full};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
`;

export const Right = styled.div`
    width: 30%;
    height: ${props => props.theme.heights.full};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
`;

export const RowContainer = styled.div`
    width: ${props => props.theme.widths.full};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const TextLine = styled.span`
    font-size: 1.2rem;
    align-self: flex-start;
`;

export const Title = styled(TextLine)`
    align-items: center;
    border-bottom: 0.5px solid #fff;
`;

export const SmallTextLine = styled.span`
    font-size: 1rem;
    align-self: flex-start;
`;

export const SocialMediaIcon = styled.a`
    font-size: 2rem;
    margin: 0.5rem;
    color: ${props => props.theme.colors.text.white};
    &:hover { 
        color: ${props => props.theme.colors.primary};
        }
`;