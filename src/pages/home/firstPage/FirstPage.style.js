import styled from 'styled-components'

export const TopContainer = styled.div`
    width: ${props => props.theme.widths.full};
    height: ${props => props.theme.heights.navbar};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BottomContainer = styled.div`
  width: ${props => props.theme.widths.full};
  height: calc(${props => props.theme.heights.fullScreen} - ${props => props.theme.heights.navbar});
  display: flex;
  align-items: center;
  justify-content: center;
`;



