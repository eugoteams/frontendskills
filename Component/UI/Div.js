/** @format */

import styled from "styled-components";

const Div = styled.div`
  position: ${(props) => (props.$pos ? props.$pos : "relative")};
  top: ${(props) => (props.$posTop ? props.$posTop : "0")};
  bottom: ${(props) => (props.$posBt ? props.$posBt : "0")};
  right: ${(props) => (props.$posRight ? props.$posRight : "0")};
  left: ${(props) => (props.$posLeft ? props.$posLeft : "0")};
  background-color: ${(props) => (props.$bgColor ? props.$bgColor : "#fffffe")};
  height: ${(props) => (props.$height ? props.$height : "100%")};
  width: ${(props) => (props.$width ? props.$width : "100%")};
  z-index: ${(props) => (props.$zIndex ? props.$zIndex : "0")};
  overflow: ${(props) => (props.$overflow ? props.$overflow : "hidden")};
  //border: 1px solid red;
  padding: ${(props) => (props.$pd ? props.$pd : "0")};
  box-shadow: ${(props) =>
    props.$boxShadow
      ? ""
      : `rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  cursor: pointer`};
  opacity: ${(props) => (props.$opacity ? props.$opacity : "")};

  //Mobile-Large-Screen
  @media (max-width: 27em) {
    width: ${(props) => props.$mdWidth};
  }
`;

export default Div;
