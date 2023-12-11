/** @format */

import React, { Fragment } from "react";
import { Head } from "next/document";
import ImageComponent from "@/Component/ImageComponent/ImageComponent";
import reactjs from "../public/assets/img/reactjs.png";
import Title from "@/Component/UI/Title";

const ReactJs = (props) => {
  return (
    <Fragment>
      <ImageComponent src={reactjs} />
      <Title $fz={"2rem"} $fw={"800"} $center>
        Under Work ....!
      </Title>
    </Fragment>
  );
};

export default ReactJs;
