/** @format */

import { Fragment } from "react";
import styled from "styled-components";
import Image from "next/image";
import Flex from "../UI/Flex";

const ImageHolder = styled.div`
  width: 100%;
  height: 10rem;
  overflow: hidden;
  margin: 1rem auto;
`;

const ImageComponent = ({ src }) => {
  return (
    <Fragment>
      <ImageHolder>
        <Flex>
          <Image src={src} alt={"logo.png"} width={50} height={50} />
        </Flex>
      </ImageHolder>
    </Fragment>
  );
};

export default ImageComponent;
