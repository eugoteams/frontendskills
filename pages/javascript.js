/** @format */

import content from "@/model/content";
import { Fragment } from "react";
import js from "../public/assets/img/js.png";
import ImageComponent from "@/Component/ImageComponent/ImageComponent";
import DocComponent from "@/Component/DocComponent/DocComponent";

export default function Home() {
  return (
    <Fragment>
      <ImageComponent src={js} />
      <DocComponent data={content} />
    </Fragment>
  );
}
