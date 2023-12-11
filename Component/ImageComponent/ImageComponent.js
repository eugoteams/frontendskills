/** @format */

import { Fragment } from "react";
import styled from "styled-components";
import Image from "next/image";
import Flex from "../UI/Flex";

const ImageHolder = styled.div`
  width: 100%;
  height: 18rem;
  overflow: hidden;
  margin: 1rem auto;
`;

const ImageComponent = ({ src }) => {
  return (
    <Fragment>
      <ImageHolder>
        <Flex>
          <Image src={src} alt={"logo.png"} width={120} height={120} />
        </Flex>
      </ImageHolder>
    </Fragment>
  );
};

export default ImageComponent;
