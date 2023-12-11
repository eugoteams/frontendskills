/** @format */

import { Fragment } from "react";
import ImageComponent from "@/Component/ImageComponent/ImageComponent";
import AccordionComponent from "@/Component/AccordionComponent/AccordionComponent";
import Stack from "@/Component/UI/Stack";
import htmlTuts from "@/model/htmlTuts";
import html from "../public/assets/img/html.png";

const Html = (props) => {
  console.log(htmlTuts);
  return (
    <Fragment>
      <ImageComponent src={html} />
      <Stack $mg={"4rem"}>
        {htmlTuts.map((chapter, index) => {
          let value = index + 1;
          let num = value / 10 < 1 ? "0" + value : value;
          return (
            <AccordionComponent
              key={`javascript_${index}`}
              id={num}
              title={chapter["title"]}
              description={chapter["description"]}
              tags={chapter["tags"]}
              content={chapter["content"]}
            />
          );
        })}
      </Stack>
    </Fragment>
  );
};

export default Html;
