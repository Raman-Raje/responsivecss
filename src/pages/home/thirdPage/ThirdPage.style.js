import styled from 'styled-components'

export const TopContainer = styled.div`
    width: ${props => props.theme.widths.full};
    height: calc(${props => props.theme.heights.full} - ${props => props.theme.heights.footer});
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: ${props => props.theme.widths.full};
    height: ${props => props.theme.heights.full};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Left = styled.div`
    width: 50%;
    height: ${props => props.theme.heights.full};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Right = styled.div`
    width: 50%;
    height: ${props => props.theme.heights.full};
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ff9800;
`;

export const BottomContainer = styled.div`
    width: ${props => props.theme.widths.full};
    height: 15vh;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
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