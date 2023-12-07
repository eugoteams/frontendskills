/** @format */

import styled from "styled-components";

const Accordion = styled.div`
  width: 100%;
  height: ${(props) => (props.$height ? props.$height : "9rem")};
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin: 1rem auto;
  position: relative;
  transition: all 0.1s linear;
  overflow: hidden;

  //Mobile-Large-Screen
  @media (max-width: 27em) {
    //margin: 1rem 0.2rem;
  }
`;

export default Accordion;
