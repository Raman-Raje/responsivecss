import styled from 'styled-components'

export const Container = styled.div`
    width: ${props => props.theme.widths.full};
    height: ${props => props.theme.heights.fullScreen};
    overflow:hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.colors.background.default};
`;

export const TopContainer = styled.div`
    width: ${props => props.theme.widths.full};
    height: ${props => props.theme.heights.navbar};
    display: flex;
    align-items: center;
`;

export const BottomContainer = styled.div`
    display: flex;
    width: ${props => props.theme.widths.full};
    height: calc(${props => props.theme.heights.fullScreen} - ${props => props.theme.heights.navbar});
    border-top: 0.5px solid lightgray;
`;

export const SidebarContainer = styled.div`
    flex: 1;
    border-right: 0.5px solid lightgray;
`;

export const ScreenContainer = styled.div`
  flex: 8;
`;