/** @format */

import { Fragment } from "react";
import ImageComponent from "@/Component/ImageComponent/ImageComponent";
import htmlTuts from "@/model/htmlTuts";
import html from "../public/assets/img/html.png";
import DocComponent from "@/Component/DocComponent/DocComponent";

const Html = (props) => {
  return (
    <Fragment>
      <ImageComponent src={html} />
      <DocComponent data={htmlTuts} />
    </Fragment>
  );
};

export default Html;
