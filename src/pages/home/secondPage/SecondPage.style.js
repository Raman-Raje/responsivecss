import styled from 'styled-components'

export const TopContainer = styled.div`
    width: ${props => props.theme.widths.full};
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const MiddleContainer = styled.div`
    width: ${props => props.theme.widths.full};
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BottomContainer = styled.div`
    width: ${props => props.theme.widths.full};
    height: 40vh;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
`;
