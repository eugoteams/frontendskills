/** @format */

import styled from "styled-components";

const Text = styled.div`
  font-size: ${(props) => (props.$fz ? props.$fz : "1rem")};
  font-weight: ${(props) => (props.$fw ? props.$fw : "400")};
  margin: 0.5rem 1rem;
  line-height: 1.5;
`;

export default Text;
