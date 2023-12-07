/** @format */

import Flex from "@/Component/UI/Flex";
import React, { Fragment, memo } from "react";
import styled from "styled-components";

const NumberDiv = styled.div`
  font-weight: 800;
  font-size: 2rem;
  position: relative;
  // border: 1px solid red;
  width: fit-content;
  height: auto;
  color: #868e96;
  //background-color: blue;

  &:after {
    content: "";
    display: inline-block;
    position: aboslute;
    top: 0;
    left: 0;
    transform: translate(0.4rem, -0.1rem);

    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #868e96;
  }

  //Tablet-View-Screen
  @media (max-width: 48em) {
  }
  //Mobile-Large-Screen
  @media (max-width: 27em) {
    font-size: 1.7rem;
  }
  //Mobile-Medium-Screen
  @media (max-width: 24em) {
    font-size: 1.5rem;
  }
  //Mobile-Small-Screen
  @media (max-width: 20em) {
    font-size: 1.2rem;
  }
`;

const NumberComponent = ({ id }) => {
  return (
    <Fragment>
      <NumberDiv>{id}</NumberDiv>
    </Fragment>
  );
};

export default memo(NumberComponent);
