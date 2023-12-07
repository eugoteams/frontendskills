/** @format */

import styled, { css } from "styled-components";

const Title = styled.div`
  text-transform: capitalize;
  font-size: ${(props) => (props.$fz ? props.$fz : "1rem")};
  font-weight: ${(props) => (props.$fw ? props.$fw : "500")};
  margin: 0.5rem 1rem;
  color: ${(props) => (props.$color ? props.$color : "#212529")};
  height: 100%;
  width: 100%;
  text-align: left;
  //border: 1px solid red;
  // line-height: 1.5;
  // background-color: blue;
  ${(props) =>
    props.$center &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `};

  //Tablet-View-Screen
  @media (max-width: 48em) {
    color: green;
  }

  //Mobile-Large-Screen
  @media (max-width: 27em) {
    font-size: 1.4rem;
  }
  //Mobile-Small-Screen
  @media (max-width: 20em) {
    font-size: 1.2rem;
  }
`;

export default Title;
