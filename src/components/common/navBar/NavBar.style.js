import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.justifyContent || "space-between"};
    height: ${props => props.theme.heights.full};
    width: ${props => props.theme.widths.full};
    margin: 4px 4px;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 10%;
`;

export const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 40%;
`;

export const ComponentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Logo = styled.div`
    font-size: 1.75rem;
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    color: ${props => props.theme.colors.text.primary};
    padding: 0 16px;
    cursor: pointer;
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

export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 35px;
    height: 35px;
    border-radius: 5px;
    margin: 10px;
    overflow: hidden;
    &:hover {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.background.default};
    }
    cursor: pointer;
`;

export const Indicator = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    top: 0;
    right: 0;
    position: absolute;
    background-color: ${props => {
        switch (props.indicatorStatus) {
            case 'connected':
                return props.theme.colors.success;  // Assuming you've defined success color in theme
            case 'disconnected':
                return props.theme.colors.error;  // Assuming you've defined error color in theme
            case 'notAuthenticated':
                return props.theme.colors.text.secondary;  // Assuming you've defined warning color in theme
            default:
                return props.theme.colors.background.default;  // Default color if none of the status match
        }
    }};
`;

