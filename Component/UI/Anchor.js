/** @format */

import styled from "styled-components";
import Link from "next/link";

const Anchor = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1.3rem;
  text-transform: capitalize;
  font-weight: 600;
  padding: 1rem;
  display: block;
  transition: all 0.2s linear;

  &:hover {
    background-color: #bac8ff;
    color: #fffffe;
    transition: all 0.2s linear;
    border-radius: 0.5rem;
  }
`;

export default Anchor;
