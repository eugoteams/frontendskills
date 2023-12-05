/** @format */

import { Fragment } from "react";
import styled from "styled-components";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

const LayoutContainer = styled.div`
  width: 95rem;
  margin: 1rem auto;
  height: 100vh;
  padding: 1.5rem;
`;

const RootLayout = ({ children }) => {
  return (
    <Fragment>
      <LayoutContainer className={inter.className}>{children}</LayoutContainer>
    </Fragment>
  );
};

export default RootLayout;
