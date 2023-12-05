/** @format */

import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => (props.$width ? props.$width : "10%")};
  height: 100%;
  //border: 1px solid green;
  margin: 0;
  text-align: ${(props) => (props.$align ? props.$align : "left")};
`;

export default Container;
