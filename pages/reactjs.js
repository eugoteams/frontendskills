/** @format */

import { Fragment } from "react";
import ImageComponent from "@/Component/ImageComponent/ImageComponent";
import reactjs from "../public/assets/img/reactjs.png";
import reactuts from "@/model/reacttuts";
import DocComponent from "@/Component/DocComponent/DocComponent";

const ReactJs = (props) => {
  return (
    <Fragment>
      <ImageComponent src={reactjs} />
      <DocComponent data={reactuts} />
    </Fragment>
  );
};

export default ReactJs;
