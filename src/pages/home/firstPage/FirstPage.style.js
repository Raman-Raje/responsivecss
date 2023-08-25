import styled from "styled-components";
export const TopContainer = styled.div`
  width: ${(props) => props.theme.widths.full};
  height: ${(props) => props.theme.heights.navbar};
  display: flex;
  top: 0;
  align-items: center;
  z-index: 1000;
  justify-content: center;
  position: fixed;
`;

export const BottomContainer = styled.div`
  width: ${(props) => props.theme.widths.full};
  height: calc(
    ${(props) => props.theme.heights.fullScreen} -
      ${(props) => props.theme.heights.navbar}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://themewagon.github.io/orthoc/images/hero-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
